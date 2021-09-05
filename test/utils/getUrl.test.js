import { getMediaUrl } from '../../utils/getUrl';

describe('Utils | getUrl', function () {
  describe('#getMediaUrl', function () {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...OLD_ENV };
    });

    afterAll(() => {
      process.env = OLD_ENV;
    });

    it('should return url prefix by baseUrl for local url', function () {
      const url = '/image/test.png';
      process.env.BASE_URL = 'http://localhost:3000';

      const response = getMediaUrl(url);

      expect(response).toBe('http://localhost:3000/image/test.png');
    });

    it('should return same url when is not local url', function () {
      const url = 'https://example.net/image/test.png';

      const response = getMediaUrl(url);

      expect(response).toBe('https://example.net/image/test.png');
    });
  });
});
