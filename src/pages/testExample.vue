<script setup>
</script>

<template>
<Head/>
<article class="textEx">
  <nav class="textEx_nav">
    <RouterLink class="textEx_nav_item" to="/testExample/">example 1</RouterLink>
    <RouterLink class="textEx_nav_item" to="/testExample/todoList">example 2</RouterLink>
    <RouterLink class="textEx_nav_item" to="/testExample/propsEmits">example 3</RouterLink>
    <RouterLink class="textEx_nav_item" to="/testExample/vue2">example 4</RouterLink>
    <RouterLink class="textEx_nav_item" to="/testExample/page">example 5</RouterLink>
  </nav>
  <RouterView/>
</article>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
.textEx{
  font-family:'avenir','Microsoft YaHei','Microsoft JhengHei','PingFangTC',Helvetica;
  flex:1 1 0;
  padding: 44px 50px;
  &_nav{
    display: flex;
    justify-content:center;
    padding:10px;
    &_item{
      color:#fff;
      font-size: 14px;
      text-shadow: 0 0 2px rgba(#000,.35);
      line-height: 1;
      text-decoration:none;
      border-radius: 4px;
      padding: 10px;
      background-color:orange;
      transition:background-color .4s;
      + .textEx_nav_item{margin-left: 10px;}
      &.router-link-exact-active{background-color:orangered;}
    }
  }
}
@media screen and (min-width: 400px){
}
@media screen and (min-width: 640px){
}
@media screen and (min-width: 667px){
}
@media screen and (min-width: 1024px){
}
@media screen and (min-width: 1280px){
}
@media screen and (min-width: 1920px){
}
</style>