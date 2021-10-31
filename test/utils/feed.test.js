import { createFeed } from '../../utils/feed';

function fetchResponse(response) {
  return {
    json: () => response,
  };
}

describe('Utils | feed', function () {
  describe('#createFeed', function () {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...OLD_ENV };
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });

    it('should get all articles and add it to feed', async function () {
      // given
      process.env.BASE_URL = 'http://localhost:3000';
      process.env.STRAPI_URL = 'https://strapi.example.net';
      global.fetch = jest.fn().mockReturnValue(
        fetchResponse([
          {
            id: 1,
            slug: 'premier-article',
            content: 'content article 1',
            title: '1er Article',
            date: '2021-09-10',
          },
          {
            id: 2,
            slug: 'second-article',
            content: 'content article 2',
            title: '2ème Article',
            date: '2021-09-11',
          },
        ])
      );
      const feed = {
        content: [],
        addItem: (feedItem) => {
          feed.content.push(feedItem);
        },
      };

      // when
      await createFeed().create(feed);

      // then
      const expectedUrl = 'https://strapi.example.net/articles';
      const expectedOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const expectedFeedContent = [
        {
          id: 'http://localhost:3000/blog/premier-article',
          link: 'http://localhost:3000/blog/premier-article',
          content: '<p>content article 1</p>\n',
          title: '1er Article',
          date: new Date('2021-09-10'),
        },
        {
          id: 'http://localhost:3000/blog/second-article',
          link: 'http://localhost:3000/blog/second-article',
          content: '<p>content article 2</p>\n',
          title: '2ème Article',
          date: new Date('2021-09-11'),
        },
      ];
      const expectedFeedOptions = {
        copyright: 'All rights reserved 2021, Vincent Hardouin',
        description: 'Le blog de Vincent Hardouin',
        favicon: 'http://localhost:3000/favicon.ico',
        id: 'http://localhost:3000',
        link: 'http://localhost:3000',
        title: 'Vincent Hardouin',
      };
      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedOptions);
      expect(feed.content).toEqual(expectedFeedContent);
      expect(feed.options).toEqual(expectedFeedOptions);
    });
  });
});
