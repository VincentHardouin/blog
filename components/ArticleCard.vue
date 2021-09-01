<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class='post-card'>
    <h2 class='post-card__title'>{{ article.title }}</h2>
    <span class='post-card__date'>{{ article.date }}</span>
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
.post-card {
  max-width: 820px;
  padding: 7px;
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }

  &__title {
    font-family: $font-open-sans;
    font-size: 1rem;
    color: $cloud-burst;
  }

  &__date {
    font-family: $font-open-sans;
    font-size: 0.75rem;
    color: $tree-poppy;
  }
}
</style>
