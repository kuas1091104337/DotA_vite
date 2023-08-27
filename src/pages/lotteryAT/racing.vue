<script setup>

</script>

<template>
<div class="ATtest">
  <div class="ATtest_wrap">
    <img class="ATtest_wrap_img racing_wrap_img" src="@/assets/img/lotteryAT/racing2.jpg" alt="racing"/>
    <img class="ATtest_wrap_img racing_wrap_img" src="@/assets/img/lotteryAT/racing3.jpg" alt="racing"/>
  </div>
  <h3 class="ATtest_text">
    <span>racing coming soon</span>
  </h3>
</div>
</template>

<style lang="scss">
@keyframes racing{
 0%{opacity:1;}
 50%{opacity:0;}
}
.racing_wrap_img{
  animation:racing 2s step-start infinite;
  + .racing_wrap_img{animation-delay:1s;}
}
</style>