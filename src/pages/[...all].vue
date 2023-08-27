<script setup>
const route = useRoute();
console.log(route);
console.log(route.params);
console.log(route.params.all);
</script>

<template>
<Head/>
<div class="page404">
  <h2 class="page404_title">404 Page</h2>
  <p class="page404_text">No {{route.params.all.join('/')}} page.</p>
</div>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
.page404{
  text-align: center;
  flex: 1 1 0;
  padding-top: 44px;
  &_title, &_text{
    text-shadow:3px 2px 0 rgba(#f0f,.8),
                -3px -2px 0 rgba(#0ff,.8);
    width: 90%;
    margin-left:auto;
    margin-right: auto;
    transform:skew(-6deg);
  }
  &_title{
    font-size: 8rem;
  }
  &_text{
    font-size: 6rem;
  }
}
</style>