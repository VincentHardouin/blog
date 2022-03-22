import { getMetaTags } from '../utils/seo';

export async function getArticle({ $strapi, params }) {
  const matchingArticles = await $strapi.$articles.find({
    slug: params.slug,
  });
  const article = matchingArticles[0];

  const seo = {
    siteName: 'Vincent Hardouin',
    metaTitle: article.title,
    metaDescription: article.description,
    imageUrl: article.seoImageUrl,
  };
  const meta = {
    titleTemplate: `%s | ${seo.siteName}`,
    title: seo.metaTitle,
    meta: getMetaTags(seo),
  };

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
