<script setup>

</script>

<template>
<header>
  <div class="wrapper">
    <nav class="nav"> 
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/vueI18n">VueI18n</RouterLink>
      <RouterLink to="/plugin">Plugin</RouterLink>
    </nav>
  </div>
</header>
</template>

<style lang="scss" scoped>
header {line-height: 1.5;}
nav {
  font-size: 14px;
  text-align: center;
  width: 100%;
  margin: 15px 0;
  > a{
    display: inline-block;
    padding: 0 1rem;
    + a{border-left: 1px solid var(--color-border);}
  }
}
.nav{
  .router-link-exact-active, 
  .router-link-active,
  .acitve{
    color: var(--color-text);
    &:hover {background-color: transparent;}
  }
}
</style>