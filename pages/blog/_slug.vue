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

import { getArticle } from '../../services/data-fetcher';

export default {
  async asyncData(context) {
    const { article, meta } = await getArticle(context);
    return { article, meta };
  },
  head() {
    return {
      ...this.meta
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
    text-align: justify;
  }
}

.dark-mode .article {

  @include device-is('tablet') {
    background-image: url('/img/background-banner-dark.svg');
  }

  &__container {
    background-color: $charade;
  }

  &__date {
    color: $cadet-blue;
  }
}

</style>
