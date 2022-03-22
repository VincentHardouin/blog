import { getMediaUrl } from './getUrl';

export function getAllMeta({ title, description, seoImageUrl }) {
  const seo = {
    siteName: 'Vincent Hardouin',
    metaTitle: title,
    metaDescription: description,
    imageUrl: seoImageUrl,
  };
  return {
    titleTemplate: `%s | ${seo.siteName}`,
    title: seo.metaTitle,
    meta: getMetaTags(seo),
  };
}

export function getMetaTags({
  metaTitle = 'Le blog de Vincent Hardouin',
  metaDescription = 'Blog de tutorials, humeurs, … sur des sujets tech.',
  imageUrl = '/image/og-card-default.png',
  article = false,
} = {}) {
  const tags = [];

  if (metaTitle) {
    tags.push(
      {
        hid: 'og:title',
        property: 'og:title',
        content: metaTitle,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: metaTitle,
      }
    );
  }
  if (metaDescription) {
    tags.push(
      {
        hid: 'description',
        name: 'description',
        content: metaDescription,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: metaDescription,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: metaDescription,
      }
    );
  }
  if (imageUrl) {
    tags.push(
      {
        hid: 'image',
        name: 'image',
        content: getMediaUrl(imageUrl),
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: getMediaUrl(imageUrl),
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: metaTitle,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: getMediaUrl(imageUrl),
      }
    );
  }
  if (article) {
    tags.push({
      hid: 'og:type',
      property: 'og:type',
      content: 'article',
    });
  }
  tags.push({
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image',
  });
  tags.push({
    hid: 'twitter:site',
    name: 'twitter:site',
    content: '@vincenthardouin',
  });

  return tags;
}
