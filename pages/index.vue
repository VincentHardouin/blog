<template>
  <div class='index'>
    <ArticleCard v-for='article in articles'
                 :key='article.slug'
                 :article='article' />
  </div>
</template>

<script>
import { getArticles } from '../services/data-fetcher';

export default {
  async asyncData(context) {
    const { articles } = await getArticles(context);
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

