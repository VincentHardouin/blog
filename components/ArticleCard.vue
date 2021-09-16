<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class='article-card'>
    <h2 class='article-card__title'>{{ article.title }}</h2>
    <span class='article-card__date'>{{ $dayjs(article.date).format('l') }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
.article-card {
  max-width: 820px;
  padding: 7px;
  display: block;
  text-decoration: none;

  &:visited {
    text-decoration: none;
    color: $cloud-burst;
  }

  &__title {
    font-size: 1rem;
    color: $cloud-burst;
    margin-bottom: 0;
  }

  &__date {
    font-family: $font-open-sans;
    font-size: 0.75rem;
    color: $tree-poppy;
  }
}
</style>
