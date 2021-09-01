<template>
  <div class='index'>
    <ArticleCard v-for='article in articles'
                 :key='article.slug'
                 :article='article' />
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const { articles } = await $strapi.graphql({
      query: `query Articles {
          articles {
            slug
            title
            date
          }
        }`
    });
    return { articles };
  }
};
</script>

<style lang='scss' scoped>
.index {
  max-width: 820px;
  margin: 0 auto;
  padding: 14px;
}
</style>

