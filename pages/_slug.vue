<template>
  <div class='page'>
    <h1 class='page__title'>{{ page.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if='page.content' class='page__content' v-html='content'></div>
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
  },
  computed: {
    content() {
      return this.$md.render(this.page.content);
    }
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
