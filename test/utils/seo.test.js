import { getMetaTags } from '../../utils/seo';

describe('Utils | seo', function () {
  describe('#getMetaTags', function () {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...OLD_ENV };
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });

    it('should create meta tags with default values', function () {
      process.env.BASE_URL = 'http://localhost:3000';

      const response = getMetaTags();

      const expectedMetaTags = [
        {
          content: 'Le blog de Vincent Hardouin',
          hid: 'og:title',
          property: 'og:title',
        },
        {
          content: 'Le blog de Vincent Hardouin',
          hid: 'twitter:title',
          name: 'twitter:title',
        },
        {
          content: 'Blog de tutorials, humeurs, … sur des sujets tech.',
          hid: 'description',
          name: 'description',
        },
        {
          content: 'Blog de tutorials, humeurs, … sur des sujets tech.',
          hid: 'og:description',
          property: 'og:description',
        },
        {
          content: 'Blog de tutorials, humeurs, … sur des sujets tech.',
          hid: 'twitter:description',
          name: 'twitter:description',
        },
        {
          content: 'http://localhost:3000/image/og-card-default.png',
          hid: 'image',
          name: 'image',
        },
        {
          content: 'http://localhost:3000/image/og-card-default.png',
          hid: 'og:image',
          property: 'og:image',
        },
        {
          content: 'Le blog de Vincent Hardouin',
          hid: 'og:image:alt',
          property: 'og:image:alt',
        },
        {
          content: 'http://localhost:3000/image/og-card-default.png',
          hid: 'twitter:image',
          name: 'twitter:image',
        },
        {
          content: 'summary_large_image',
          hid: 'twitter:card',
          name: 'twitter:card',
        },
        {
          content: '@vincenthardouin',
          hid: 'twitter:site',
          name: 'twitter:site',
        },
      ];
      expect(response).toEqual(expectedMetaTags);
    });
  });
});
