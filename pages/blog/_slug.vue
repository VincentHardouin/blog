<template>
  <div class='article'>
    <div class='article__banner'></div>
    <div class='article__container'>
      <div class='article__date'>{{ date }}</div>
      <h1 class='article__title'>{{ article.title }}</h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if='content' class='article__content' v-html='content'></div>
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
  },
  computed: {
    content() {
      return this.$md.render(this.article.content);
    },
    date() {
      return this.$dayjs(this.article.date).format('l');
    }
  }
};
</script>

<style lang='scss' scoped>
.article {
  width: 100%;
  padding-top: 21px;

  @include device-is('tablet') {
    min-height: 50vh;
    background-image: url('/img/background-banner.svg');
    background-position: top;
    background-repeat: no-repeat;
    padding-top: 170px;
  }


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

  &__content {
    font-family: $font-roboto;
    font-weight: $font-normal;
    color: $fiord;
  }
}
</style>
