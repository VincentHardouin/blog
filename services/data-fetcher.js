import { getAllMeta } from '../utils/seo';

export async function getArticle({ $content, params }) {
  const article = await $content('posts', params.slug).fetch();
  const meta = getAllMeta(article);
  return { article, meta };
}

export async function getArticles({ $content }) {
  const articles = await $content('posts').only(['title', 'slug', 'publishedAt']).sortBy('publishedAt', 'desc').fetch();
  return { articles };
}

export async function getPage({ $content, params }) {
  const page = await $content(params.slug).fetch();
  const meta = getAllMeta(page);
  return {
    page,
    meta,
  };
}
