import { getMediaUrl } from './getUrl';

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
        property: 'og:title',
        content: metaTitle,
      },
      {
        name: 'twitter:title',
        content: metaTitle,
      }
    );
  }
  if (metaDescription) {
    tags.push(
      {
        name: 'description',
        content: metaDescription,
      },
      {
        property: 'og:description',
        content: metaDescription,
      },
      {
        name: 'twitter:description',
        content: metaDescription,
      }
    );
  }
  if (imageUrl) {
    tags.push(
      {
        name: 'image',
        content: getMediaUrl(imageUrl),
      },
      {
        property: 'og:image',
        content: getMediaUrl(imageUrl),
      },
      {
        property: 'og:image:alt',
        content: metaTitle,
      },
      {
        name: 'twitter:image',
        content: getMediaUrl(imageUrl),
      }
    );
  }
  if (article) {
    tags.push({
      property: 'og:type',
      content: 'article',
    });
  }
  tags.push({ name: 'twitter:card', content: 'summary_large_image' });
  tags.push({ name: 'twitter:site', content: '@vincenthardouin' });

  return tags;
}
