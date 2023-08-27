<script setup>
const props = defineProps({
  awardsPrizeImgArr:{
    type:Array,
    default:() => []
  }
});
</script>

<template>
<ul class="roulette_main___awards">
  <li v-if="!props.awardsPrizeImgArr.length">
    <Wbox3dLoading/>
  </li>
  <li 
    v-for="item in props.awardsPrizeImgArr" :key="item.name"
    class="roulette_main___awards_item"
  >
    <div :class="['roulette_main___awards__wrap roulette_main___awards__wrap-'+item.awards]">
      <span class="roulette_main___awards___medals"/>
      <div class="roulette_main___awards___prize">
        <img class="roulette_main___awards___prize_img" :src="item.src">
      </div>
      <p class="roulette_main___awards___name">{{item.name}}</p>
    </div>
  </li>
</ul>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
@keyframes rouletteSpecialAward-mob{
  0%{box-shadow:0 0 0 0 $pink, 0 0 0 $pink, 0 0 1px $pink inset}
  100%{
    box-shadow: 0 0 size_pxToVw(38,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) $pink, 
                0 0 size_pxToVw(16,$rouletteGameMobW) $pink, 
                0 0 1px $pink inset;
  }
}
@keyframes rouletteSpecialAward-mobPigSize{
  0%{box-shadow:0 0 0 0 $pink, 0 0 0 $pink, 0 0 1px $pink inset}
  100%{box-shadow: 0 0 58px 6px $pink, 0 0 24px $pink, 0 0 1px $pink inset}
}
@keyframes rouletteSpecialAward-desk{
  0% {box-shadow: 0 0 0 $pink, 0 0 1px $pink inset}
  100% {box-shadow: 0 0 40px $pink, 0 0 1px $pink inset}
}
// CNY xmas
@keyframes rouletteSpecialAward-mob-red{
  0%{box-shadow:0 0 0 0 $redSpecialColor, 0 0 0 $redSpecialColor, 0 0 1px $redSpecialColor inset}
  100%{
    box-shadow: 0 0 size_pxToVw(38,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) $redSpecialColor, 
                0 0 size_pxToVw(16,$rouletteGameMobW) $redSpecialColor,
                0 0 1px $redSpecialColor inset;
  }
}
@keyframes rouletteSpecialAward-mobPigSize-red{
  0%{box-shadow:0 0 0 0 $redSpecialColor, 0 0 0 $redSpecialColor, 0 0 1px $redSpecialColor inset}
  100%{box-shadow:0 0 58px 6px $redSpecialColor, 0 0 24px $redSpecialColor, 0 0 1px $redSpecialColor inset}
}
@keyframes rouletteSpecialAward-desk-red{
  0%{box-shadow:0 0 0 $redSpecialColor, 0 0 1px $redSpecialColor inset}
  100%{box-shadow:0 0 40px $redSpecialColor, 0 0 1px $redSpecialColor inset}
}
.roulette_main___awards{
  @extend %ulReset;
  padding: 0 15px;
  position: relative;
  z-index:1;
  &_item{
    height: 0;
    padding-bottom:calc($rouletteAwardsItemMobH/$rouletteAwardsW)*100%;
    position: relative;
    + .roulette_main___awards_item{margin-top:calc(25/$rouletteAwardsW)*100%;}
  }
  &__wrap{
    @extend %wh100pPosaT0L0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size:100% 100%;
    border-radius:40px;
    padding: 0 calc(14/$rouletteAwardsW)*100% 0 calc(8/$rouletteAwardsW)*100%;
    &-0{
      animation-duration:.6s;
      animation-iteration-count:infinite;
      animation-direction:alternate;
      > .roulette_main___awards___medals{
        width:calc(32/273)*100%;
        height:100%;
        background-image:url("@/assets/img/roulette/normal/rouletteAwardsMedal0.png");
        background-size:cover;
        margin-top:1.8%;
      }
      > .roulette_main___awards___prize{width:calc(80/273)*100%;}
    }
    &-1 > .roulette_main___awards___medals{color: #be5a18}
    &-2 > .roulette_main___awards___medals{
      color: #6f6f80;
      background-position: 33.3333% 0;
    }
    &-3 > .roulette_main___awards___medals{
      color: #7c5552;
      background-position: 66.6666% 0;
    } 
    &-4, &-5, &-6, &-7, &-8, &-9{
      > .roulette_main___awards___medals{
        color: #674170;
        background-position: 100% 0;
      }
    }
    @for $i from 1 through 9 {
      &-#{$i} > .roulette_main___awards___medals:before{content: "#{$i}"}
    }
  }
  &___medals{
    font-size:size_pxToVw(14,$rouletteGameMobW);
    font-weight:bold;
    width:calc(28/273)*100%;
    height:calc(28/$rouletteAwardsItemMobH)*100%;
    background-image:url("@/assets/img/roulette/normal/rouletteAwardsMedals.png");
    background-size:400% 100%;
    @extend %disFlexJustifyAlignCenter;
  }
  &___prize{
    width:calc(55/273)*100%;
    &_img{width:100%}
  }
  &___name{
    font-size:size_pxToVw(16,$rouletteGameMobW);
    text-align: center;
    width:48%;
    margin:0;
  }
}
.roulette-popupOpen .roulette_main___awards__wrap-0{animation-play-state:paused;}
.newYear, .xmas{
  .roulette_main___awards__wrap{
    background-image:url("@/assets/img/roulette/xmas/rouletteAwardsItem_m.png");
    &-0{animation-name:rouletteSpecialAward-mob-red;}
  }
}
.normal .roulette_main___awards__wrap{
  background-image:url("@/assets/img/roulette/normal/rouletteAwardsItem_m.png");
  &-0{animation-name:rouletteSpecialAward-mob;}
}
.newYear .roulette_main___awards__wrap{
  box-shadow:-1px 1px 1px rgba(#000,.1), 0 0 size_pxToVw(8,$rouletteGameMobW) rgba(#000,.2);
}
@media screen and (min-width: 568px){
  .roulette_main___awards{
    &__wrap-0{animation-name:rouletteSpecialAward-mobPigSize;}
    &___medals{font-size: 21px;}
    &___name{
      font-size: 24px;
      text-shadow: 0 1px 5px rgba(#000,.8);
    }
  }
  .newYear .roulette_main___awards__wrap{box-shadow:-1px 1px 1px rgba(#000,.1), 0 0 12px rgba(#000,.2);}
}
@media screen and (min-width:1024px){
  .roulette_main___awards{
    width:calc($rouletteAwardsW/$rouletteGameW)*100%;
    padding: 0;
    &_item{
      padding-bottom:calc($rouletteAwardsItemH/$rouletteAwardsW)*100%;
      + .roulette_main___awards_item{margin-top:8.6%}
    }
    &__wrap{
      background-image: url("@/assets/img/roulette/normal/rouletteAwardsItem_d.png");
      padding:0 3.39%;
      &-0{
        animation-name:rouletteSpecialAward-desk;
        > .roulette_main___awards{
          &___medals{
            width: 18.91%;
            margin-top: 2.8%;
          }
          &___prize{width:38%;}
        }
      }
    }
    &___medals{
      font-size:size_pxToVw(20,$rouletteGameW);
      width: 16%;
      height: 68.75%;
    }
    &___prize{width: 32.73%;}
    &___name{
      font-size:size_pxToVw(20,$rouletteGameW);
      text-shadow: 0 1px 3px rgba(#000,.8);
      width: 40%;
    }
  }
  .newYear, .xmas{
    .roulette_main___awards__wrap{
      background-image:url("@/assets/img/roulette/xmas/rouletteAwardsItem_d.png");
      &-0{animation-name:rouletteSpecialAward-desk-red;}
    }
  }
  .normal .roulette_main___awards__wrap{
    background-image:url("@/assets/img/roulette/normal/rouletteAwardsItem_d.png");
    &-0{animation-name:rouletteSpecialAward-desk;}
  }
  .newYear .roulette_main___awards{z-index:2;}
}
@media screen and (min-width: 1440px){
  .roulette_main___awards{
    &___medals, &___name{font-size: 20px;}
  }
}
</style>