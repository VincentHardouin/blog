<template>
  <div class='page'>
    <h1 class='page__title'>{{ page.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <nuxt-content :document='page' />
  </div>
</template>

<script>
import { getPage } from '../services/data-fetcher';

export default {
  async asyncData(context) {
    const { page, meta } = await getPage(context);

    return {
      page,
      meta
    };
  },
  head() {
    return {
      ...this.meta
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

  &__content {
    text-align: justify;
  }
}

.dark-mode .page {
  background-color: $charade;
}

</style>
