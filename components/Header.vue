<template>
  <header class="header">
    <div class="flex header__title">Vincent Hardouin</div>
    <nav class="header__navbar">
      <ul class="navbar">
        <li><NuxtLink to='/' class="navbar__item">Accueil</NuxtLink></li>
        <li><NuxtLink to='/a-propos' class="navbar__item">A propos</NuxtLink></li>
      </ul>
    </nav>
    <div class="flex phantom" ></div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  max-width: 820px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;

  &__title {
    font-family: $font-open-sans;
    font-size: 1.44rem;
    color: $cloud-burst;
  }
}

.navbar {
  display: flex;
  list-style-type: none;

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
