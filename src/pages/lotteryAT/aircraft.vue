<script setup>

</script>

<template>
<div class="ATtest">
  <div class="ATtest_wrap">
    <img class="ATtest_wrap_img aircraft_wrap_img" src="@/assets/img/lotteryAT/aircraft1.jpg" alt="aircraft"/>
    <img class="ATtest_wrap_img aircraft_wrap_img" src="@/assets/img/lotteryAT/aircraft2.jpg" alt="aircraft"/>
    <img class="ATtest_wrap_img aircraft_wrap_img" src="@/assets/img/lotteryAT/aircraft3.jpg" alt="aircraft"/>
  </div>
  <h3 class="ATtest_text">
    <span>aircraft coming soon</span>
  </h3>
</div>
</template>

<style lang="scss">
@keyframes aircraft{
 0%{opacity:1;}
 33.33%, 66.66%{opacity:0;}
}
.aircraft_wrap_img{
  animation:aircraft 3s step-start infinite;
  + .aircraft_wrap_img{
    animation-delay:1s;
    + .aircraft_wrap_img{animation-delay:2s;}
  }
}
</style>