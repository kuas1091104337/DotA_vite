<script setup>
</script>

<template>
<Head/>
<article class="lotteryAT">
  <h2 class="lotteryAT_title">Lottery Animation</h2>
  <RouterView/>
  <nav class="lotteryAT_nav">
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/">開獎動畫 1</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/aircraft">開獎動畫 2</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/racing">開獎動畫 3</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/suibao">開獎動畫 4</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/slot">開獎動畫 5</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/niuniu">開獎動畫 6</RouterLink>
    <RouterLink class="lotteryAT_nav_item" to="/lotteryAT/candy">開獎動畫 7</RouterLink>
  </nav>
</article>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
@keyframes ATshow{
 0%{
  opacity:0;
  transform:scale3d(.8,.8,1);
 }
 100%{
  opacity:1;
  transform:scale3d(1,1,1);
 }
}
$yeekeeW:1920;
.ATtext{
  color:rgba(#fff,.6);
  font-size: 32px;
  font-weight:lighter;
  text-align:center;
  width: 90%;
  margin:auto;
  transform: skew(-8deg);
}
.ATtest{
  position:relative;
  &_text{
    @extend %disFlexJustifyAlignCenter;
    background-color:rgba(#000,.35);
    margin:0;
    @extend %wh100pPosaT0L0;
    > span{
      color:#fff;
      font-size:32px;
      font-weight:normal;
      text-shadow:0 1px 3px rgba(#000,.8), 0 0 6px rgba(#000,.8), 0 0 9px rgba(#000,.8);
      transform: skew(-8deg);
    }
  }
  &_wrap_img{
    width:100%;
    ~ .ATtest_wrap_img{
      @extend %posaT0L0;
    }
  }
}
@media screen and (min-width: 1200px){
  .ATtest{
    max-width:1200px;
    margin:0 auto;
  }
}
.lotteryAT{
  color:#fff;
  background-color: #000;
  flex-grow: 1;
  border: 5px solid $GrayColor;
  margin-top: 44px;
  &_title{
    color:rgba(#fff,.85);
    font-size:size_pxToVw(240,$yeekeeW);
    text-shadow:size_pxToVw(-6,$yeekeeW) size_pxToVw(-6,$yeekeeW) 0 rgba(#0ff,.6),
                size_pxToVw(-12,$yeekeeW) size_pxToVw(-12,$yeekeeW) size_pxToVw(6,$yeekeeW) rgba(#0ff,.6),
                size_pxToVw(6,$yeekeeW) size_pxToVw(6,$yeekeeW) 0 rgba(#f0f,.6),
                size_pxToVw(12,$yeekeeW) size_pxToVw(12,$yeekeeW) size_pxToVw(6,$yeekeeW) rgba(#f0f,.6);
    text-align: center;
    width: 90%;
    margin:1em auto;
    transform: skew(-8deg);
  }
  &_nav{
    display: flex;
    flex-wrap:wrap;
    padding:30px 10px;
    &_item{
      color:#fff;
      font-size: 14px;
      text-shadow: 0 0 2px rgba(#000,.35);
      line-height: 1;
      text-align:center;
      text-decoration:none;
      width: calc(50% - 20px);
      border-radius: 4px;
      padding: 10px;
      background-color:#c0c;
      margin: 10px;
      transition:background-color .4s;
      &.router-link-exact-active{
        background-color:#0080ff;
      }
    }
  }
}
@media screen and (min-width: 400px) {
  .lotteryAT_nav_item{width: calc(33.3333% - 20px);}
}
@media screen and (min-width: 640px) {
  .lotteryAT{
    &_nav_item{width: calc(25% - 20px);}
    &_title{
      font-size:size_pxToVw(180,$yeekeeW);
      text-shadow:size_pxToVw(-4,$yeekeeW) size_pxToVw(-4,$yeekeeW) 0 rgba(#0ff,.6),
                  size_pxToVw(-8,$yeekeeW) size_pxToVw(-8,$yeekeeW) size_pxToVw(4,$yeekeeW) rgba(#0ff,.6),
                  size_pxToVw(4,$yeekeeW) size_pxToVw(4,$yeekeeW) 0 rgba(#f0f,.6),
                  size_pxToVw(8,$yeekeeW) size_pxToVw(8,$yeekeeW) size_pxToVw(4,$yeekeeW) rgba(#f0f,.6);
      margin: .5em auto;
    }
  }
}
@media screen and (min-width: 667px) {
  .lotteryAT_nav_item{width: calc(20% - 20px);}
}
// === 平板拿直的時候 portrait ===
@media screen and (min-width: 600px) and (max-width: 1024px)  and (orientation:portrait){
  .lotteryAT{
    &_title{margin:2em auto;}
    &_nav{padding: 35px;}
  }
}
@media screen and (min-width: 1024px) {
  .lotteryAT{
    &_title{margin: .75em auto}
    &_nav{
      justify-content:center;
      padding: 35px;
      &_item{
        font-size: 16px;
        width: auto;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .lotteryAT_title{
    font-size:180px;
    text-shadow:-4px -4px 0 rgba(#0ff,.6),
                -8px -8px 4px  rgba(#0ff,.6),
                4px 4px 0 rgba(#f0f,.6),
                8px 8px 4px rgba(#f0f,.6);
  }
}
</style>