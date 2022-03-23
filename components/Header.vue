<template>
  <header class='header'>
    <NuxtLink to='/' class='flex header__title'>Vincent Hardouin</NuxtLink>
    <nav class='header__navbar'>
      <ul class='navbar'>
        <li>
          <NuxtLink to='/' class='navbar__item'>Accueil</NuxtLink>
        </li>
        <li v-for='item in items' :key='item.page.slug'>
          <NuxtLink :to="{ name: 'slug', params: { slug: item.page.slug } }" class='navbar__item'>
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class='flex phantom'></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  async fetch() {
    const mainMenu = await this.$strapi.find('main-menu');
    this.items = mainMenu.items;
  }
};
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  padding: 14px;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @include device-is('tablet') {
    flex-direction: row;
    gap: 14px;
  }

  &__title {
    font-family: $font-open-sans;
    color: $cloud-burst;
    text-decoration: none;
    text-align: center;
    font-size: 1.44rem;
  }
}

.dark-mode .header {
  background-color: $charade;

  &__title {
    color: $catskill-white;
  }
}

.navbar {
  display: flex;
  list-style-type: none;
  padding: 0;

  li {
    margin: 6px;
  }

  &__item {
    font-family: $font-open-sans;
    font-size: 1rem;
    text-decoration: none;
    color: $cloud-burst;
    position: relative;

    &:visited {
      color: $cloud-burst;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: $tree-poppy;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.4s;
    }

    &:hover {
      &::after {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }

    &.nuxt-link-exact-active {
      &::after {
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: $tree-poppy;
        transform: scaleX(1);
      }
    }

  }
}

.dark-mode .navbar {
  &__item {
    color: $catskill-white;
  }
}

.flex {
  flex: 1;
}
</style>
