import { getAllMeta } from '../utils/seo';

export async function getArticle({ $strapi, params }) {
  const [article] = await $strapi.$articles.find({
    slug: params.slug,
  });
  const meta = getAllMeta(article);
  return { article, meta };
}

export async function getArticles({ $strapi }) {
  const { articles } = await $strapi.graphql({
    query: `query Articles {
          articles {
            slug
            title
            date
          }
        }`,
  });
  return { articles };
}

export async function getPage({ $strapi, params }) {
  const [page] = await $strapi.$pages.find({
    slug: params.slug,
  });
  const meta = getAllMeta(page);
  return {
    page,
    meta,
  };
}
