<template>
  <div class='article'>
    <div class='article__banner'></div>
    <div class='article__container'>
      <div class='article__date'>{{ $dayjs(article.date).format('l') }}</div>
      <h1 class='article__title'>{{ article.title }}</h1>
      <div v-if='article.content' class='article__content' v-html='$md.render(article.content)'></div>
    </div>
  </div>
</template>

<script>
import { getMetaTags } from '../../utils/seo';

export default {
  async asyncData({ $strapi, params }) {
    const matchingArticles = await $strapi.$articles.find({
      slug: params.slug
    });

    const article = matchingArticles[0];
    return {
      article
    };
  },
  head() {
    const seo = {
      siteName: 'Vincent Hardouin',
      metaTitle: this.article.title,
      metaDescription: this.article.description,
      imageUrl: this.article.seoImageUrl
    };

    return {
      titleTemplate: `%s | ${seo.siteName}`,
      title: seo.metaTitle,
      meta: getMetaTags(seo)
    };
  }
};
</script>

<style lang='scss' scope>
.article {
  width: 100%;
  min-height: 50vh;
  background-image: url('/img/background-banner.svg');
  background-position: top;
  background-repeat: no-repeat;
  padding-top: 170px;

  &__container {
    max-width: 820px;
    margin: 0 auto;
    background-color: $white;
    padding: 14px;

    @include device-is('tablet') {
      padding: 14px 42px;
    }
  }

  &__date {
    font-family: $font-roboto;
    font-size: 0.875rem;
    font-weight: $font-light;
    color: $fiord;
    margin-bottom: 14px;
  }

  &__title {
    font-family: $font-open-sans;
    font-weight: $font-normal;
    font-size: 2rem;
    color: $tree-poppy;
    margin-bottom: 21px;
  }

  &__content {
    font-family: $font-roboto;
    font-weight: $font-normal;
    color: $fiord;

    h2 {
      font-family: $font-open-sans;
      font-size: 1.5rem;
      margin-bottom: 0.875rem;
    }

    h3 {
      font-family: $font-open-sans;
      font-size: 1.1875rem;
      margin-bottom: 0.875rem;
    }
  }

}
</style>
