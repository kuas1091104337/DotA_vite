<script setup>
</script>

<template>
<p class="DAtxtLoad">
  Loading<span class="DAtxtLoad_ing">.</span>
</p>
</template>

<style lang="scss">
@keyframes bTxtLoading{
  0%, 33.33%{text-shadow: 0 0 $dGrayColor;}
  66.66%{text-shadow: 5px 0 $dGrayColor;}
  100%{text-shadow: 5px 0 $dGrayColor, 10px 0 $dGrayColor;}
}
.DAtxtLoad{
  font-size: 16px;
  text-align: left;
  text-shadow: 1px 1px rgba(#f0f,.6), -1px -1px rgba(#0ff,.6);
  width: 64px;
  margin:0 auto;
  transform: skew(-8deg);
  &_ing{animation: bTxtLoading 1.2s step-start infinite;}
}
</style>