import MarkdownIt from 'markdown-it';

export function createFeed(type = 'rss2') {
  return {
    async create(feed) {
      feed.options = getFeedOptions();
      const md = new MarkdownIt({
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true,
        html: true,
      });
      md.use(require('markdown-it-highlightjs'));
      const response = await fetch(`${process.env.STRAPI_URL}/articles`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const articles = await response.json();
      articles.forEach((article) => {
        const url = `${process.env.BASE_URL}/blog/${article.slug}`;
        feed.addItem({
          date: new Date(article.date),
          id: url,
          link: url,
          title: article.title,
          content: md.render(article.content),
        });
      });
    },
    type,
  };
}

const getFeedOptions = () => {
  return {
    title: 'Vincent Hardouin',
    description: 'Le blog de Vincent Hardouin',
    id: process.env.BASE_URL,
    link: process.env.BASE_URL,
    favicon: `${process.env.BASE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Vincent Hardouin`,
  };
};
