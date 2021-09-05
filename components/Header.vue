<template>
  <header class='header'>
    <NuxtLink to='/' class='flex header__title'>Vincent Hardouin</NuxtLink>
    <nav class='header__navbar'>
      <ul class='navbar'>
        <li>
          <NuxtLink to='/' class='navbar__item'>Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/a-propos' class='navbar__item'>A propos</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class='flex phantom'></div>
  </header>
</template>

<style lang='scss' scoped>
.header {
  width: 100%;
  padding: 14px;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 14px;

  &__title {
    font-family: $font-open-sans;
    color: $cloud-burst;
    text-decoration: none;
    text-align: center;
    font-size: 1.1rem;

    @include device-is('tablet') {
      font-size: 1.44rem;
    }
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

    &:visited {
      color: $cloud-burst;
    }
  }
}

.flex {
  flex: 1;
}
</style>
