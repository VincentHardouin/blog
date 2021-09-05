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
          property: 'og:title',
        },
        {
          content: 'Le blog de Vincent Hardouin',
          name: 'twitter:title',
        },
        {
          content: 'Blog de tutorials, humeurs, … sur des sujets tech.',
          name: 'description',
        },
        {
          content: 'Blog de tutorials, humeurs, … sur des sujets tech.',
          property: 'og:description',
        },
        {
          content: 'Blog de tutorials, humeurs, … sur des sujets tech.',
          name: 'twitter:description',
        },
        {
          content: 'http://localhost:3000/image/og-card-default.png',
          name: 'image',
        },
        {
          content: 'http://localhost:3000/image/og-card-default.png',
          property: 'og:image',
        },
        {
          content: 'Le blog de Vincent Hardouin',
          property: 'og:image:alt',
        },
        {
          content: 'http://localhost:3000/image/og-card-default.png',
          name: 'twitter:image',
        },
        {
          content: 'summary_large_image',
          name: 'twitter:card',
        },
        {
          content: '@vincenthardouin',
          name: 'twitter:site',
        },
      ];
      expect(response).toEqual(expectedMetaTags);
    });
  });
});
