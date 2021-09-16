import { getInitialised } from './utils';

describe('page | index', () => {
  let page;

  afterEach(() => {
    page.destroy();
  });

  it('should load article and create article card', async () => {
    const articles = [{}, {}];
    page = await getInitialised({
      page: 'index',
      opts: { stubs: { ArticleCard: true } },
      asyncDataOpts: {
        $strapi: {
          graphql() {
            return Promise.resolve({ articles });
          },
        },
      },
    });

    expect(page.vm.articles).toEqual(articles);
    expect(page.findAll('articlecard-stub').length).toEqual(2);
  });
});
