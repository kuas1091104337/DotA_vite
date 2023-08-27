<script setup>
const childMsg = ref('No child msg yet'),
      greeting = ref('Hello from parent'),
      msg = ref('from parent');
</script>

<template>
  <ChildComp 
    :msg="greeting" 
    @response="msg => childMsg = msg"
  >
    <strong>{{ msg }}</strong>
  </ChildComp>
  <p>{{ childMsg }}</p>
</template>

<style lang="scss">

</style>