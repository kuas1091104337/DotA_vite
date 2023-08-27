<script setup>
const props = defineProps({
  rouletteRule:{
    type:String,
    default:'text'
  }
});
</script>

<template>
<div class="roulette_rule">
  <article class="roulette_rule_wrap">
    <h2 class="roulette_rule__title">活動規則</h2>
    <div class="roulette_rule__content" v-html="props.rouletteRule"/>
  </article>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
@keyframes rouletteXmasTree{
  0%{transform:rotate3d(0,1,0,-3.5deg) translate3d(-50%,12%,0);}
  100%{transform:rotate3d(0,1,0,3.5deg) translate3d(-50%,12%,0);}
}
.roulette_rule{
  padding:0 20px 70px;
  &_wrap{
    line-height: 1.5;
    min-height: 125px;
    border-radius: 20px;
    box-shadow: 0 size_pxToVw(4,$rouletteGameMobW) size_pxToVw(7,$rouletteGameMobW) rgba(#fff,.3) inset,
                0 size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(7,$rouletteGameMobW) rgba(#000,.25) inset,
                0 0 size_pxToVw(45,$rouletteGameMobW) rgba(#000,.6);
    padding: 40px 15px 20px;
    position: relative;
  }
  &__title{
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    text-shadow: 0 size_pxToVw(-1,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) rgba(#000, 0.5);
    width: 200px;
    height: 41px;
    background-size:cover;
    padding-top: 3px;
    margin:0;
    position: absolute;
    top:0;
    left:50%;
    transform:translate3d(-50%,-50%,0);
  }
  &__content{
    font-size: 14px;
    > *{margin-top: 0;}
    > h3{font-size:1.25em;}
  }
}
.normal .roulette_rule{
  &_wrap{background-image:linear-gradient(180deg, #6a0082 1%, #360052 99%);}
  &__title{background-image:url("@/assets/img/roulette/normal/rouletteRuleTitle.png");}
  &__content{
    > h3{color:#ffcf00;}
    > p{color:#e6e6e6;}
  }
}
.newYear .roulette_rule{
  &_wrap{background-image:linear-gradient(180deg,#fff 0%,#ebd4ab 100%);}
  &__title{
    line-height: 41px;
    background-image:url("@/assets/img/roulette/newYear/rouletteRuleTitle.png");
    box-sizing:content-box;
    padding-top: 18px;
    margin-top: -8px;
  }
  &__content{
    > h3{color:$CNYbottomColor_1;}
    > p{color:#1b1b1b;}
  }
  
}
.xmas .roulette_rule{
  background-image: linear-gradient(180deg, #d3d9e4 0%, #1a315c 100%);
  &_wrap{
    background-image: linear-gradient(180deg, #fff 0%, #9eafce 100%);
    &:before{
      content: "";
      width:90%;
      background-image:url("@/assets/img/roulette/xmas/christmasBg.png");
      background-size:cover;
      padding-bottom:calc($christmasBg_h/$christmasBg_w)*90%;
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform:translate3d(-50%,12%,0);
    }
  }
  &__title{background-image:url("@/assets/img/roulette/xmas/rouletteRuleTitle.png");}
  &__content{
    > h3{color:$xmasBottomColor_3;}
    > p{color:$xmasDarkColor;}
  }
}
@media screen and (min-width: 568px){
  .roulette_rule{
    &_wrap{
      box-shadow: 0 6px 11px rgba(#fff,.3) inset,
                  0 -6px 11px rgba(#000,.25) inset,
                  0 0 68px rgba(#000,.7);
    }
    &__title{text-shadow: 0 -2px 5px rgba(#000, 0.5)}
  }
}
@media screen and (min-width:1024px){
  .roulette_rule{
    &_wrap{
      max-width:1000px;
      min-height:350px;
      padding:70px 30px;
      margin:0 auto;
      box-shadow: 0 4px 7px rgba(#fff,.35) inset,
                  0 -4px 7px rgba(#000,.25) inset, 
                  0 0 45px rgba(#000,.7);
    }
    &__title{
      font-size: 24px;
      line-height: 75px;
      text-shadow: 0 -2px 5px rgba(#000,.5);
      width: 366px;
      height: 75px;
      padding-top: 0;
    }
  }
  .normal .roulette_rule{
    background-image: linear-gradient(180deg, #330051 0%, #1d0124 100%);
    padding-top:45px;
  }
  .newYear .roulette_rule{
    background-image: linear-gradient(180deg,#be211b 120px, #4f0907 100%);
    padding-top:70px;
    &__title{
      line-height:75px;
      padding-top:32px;
      margin-top:-16px;
    }
  }
  .xmas .roulette_rule{
    margin-top:calc(60/$rouletteGameW)*-100%;
    position:relative;
    &_wrap{
      perspective:210vw;
      &:before{
        width:calc($christmasBg_w/$rouletteGameW)*100%;
        padding-bottom:calc($christmasBg_h/$christmasBg_w*$christmasBg_w/$rouletteGameW)*100%;
        transform-origin:0 0;
        animation:rouletteXmasTree 2s linear infinite alternate;
      }
    }
  }
}
@media screen and (min-width: 1200px){
  .xmas .roulette_rule_wrap{perspective:2230px;}
  .newYear .roulette_rule_wrap{
    &:before, &:after{
      content:"";
      position: absolute; 
    }
    &:before{
      width: 232px;
      height: 249px;
      background-image:url("@/assets/img/roulette/newYear/tree_left.png");
      left: -200px;
      bottom: 100px;
    }
    &:after{
      width: 150px;
      height: 183px;
      background-image: url("@/assets/img/roulette/newYear/tree_right.png");
      top: 100px;
      right: -120px;
    }
  }
}
@media screen and (min-width: 1440px){
  .xmas .roulette_rule{margin-top:-60px;}
}
</style>