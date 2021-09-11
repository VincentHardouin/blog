<template>
  <div class='page'>
    <h1>{{ page.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if='page.content' class='page__content' v-html='$md.render(article.content)'></div>
  </div>
</template>

<script>
import { getMetaTags } from '../utils/seo';

export default {
  async asyncData({ $strapi, params }) {
    const matchingPages = await $strapi.$pages.find({
      slug: params.slug
    });

    const page = matchingPages[0];
    return {
      page
    };
  },
  head() {
    const seo = {
      siteName: 'Vincent Hardouin',
      metaTitle: this.page.title,
      imageUrl: this.page.seoImageUrl
    };

    return {
      titleTemplate: `%s | ${seo.siteName}`,
      title: seo.metaTitle,
      meta: getMetaTags(seo)
    };
  }
};
</script>

<style lang='scss' scoped>
.page {
  max-width: 820px;
  margin: 0 auto;
  background-color: $white;
  padding: 14px;

  h1 {
    text-align: center;
  }
}
</style>
