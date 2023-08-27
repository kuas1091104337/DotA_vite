<script setup>
const props = defineProps({
  lotteryNum:{
    type:[String, Number],
    default:''
  },
  rouletteAwardArr:{
    type:Array,
    default:() => []
  },
  popupHideFn:{
    type:Function,
    default:() => {}
  },
});
</script>

<template>
<div class="roulette_popup" @click="props.popupHideFn">
  <div class="roulette_popup_wrap" @click.stop="">
    <section class="roulette_popup__box" v-if="props.lotteryNum.toString()">
      <p class="roulette_popup___title">恭喜轉到</p>
      <h3 class="roulette_popup___name">{{props.rouletteAwardArr[props.lotteryNum].name}}</h3>
      <img class="roulette_popup___img" :src="props.rouletteAwardArr[props.lotteryNum].src">
      <div class="roulette_popup___close" @click="props.popupHideFn">
        <span class="roulette_popup___close_cross"/>
      </div>
    </section>
  </div>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
.roulette_popup{
  @extend %wh100pPosfT0L0;
  max-width:568px;
  z-index:-1;
  &:before{
    content:"";
    @extend %wh100pPosaT0L0;
    background-color:rgba(#000,0);
    backdrop-filter: blur(0px);
    transition:background-color .4s, backdrop-filter .4s;
  }
  &_wrap{
    width: 100%;
    height: 0;
    padding-bottom:calc(630/776)*100%;
    background-size: cover;
    @extend %posaT50pL50p;
    transform:translate3d(-50%,-50%,0) scale3d(.5,.5,1);
    opacity:0;
    transition:opacity .4s .2s, transform .4s .2s;
  }
  &__box{
    color: #fff;
    @extend %disFlexJustifyAlignCenter;
    flex-direction: column;
    @extend %wh100pPosaT0L0;
    &:before, &:after {
      content: "";
      width:calc(800/776)*100%;
      height:calc(510/630)*100%;
      background-size: cover;
      pointer-events: none;
      position: absolute;
      top: 10%;
      left: 2%;
    }
    &:before{transform-origin: 45% 50%;}
    &:after{transform-origin: 50% 50%;}
  }
  &___title{
    font-size:size_pxToVw(14,$rouletteGameMobW);
    text-shadow:0 0 size_pxToVw(6,$rouletteGameMobW) rgba(#000,.3),
                0 0 size_pxToVw(12,$rouletteGameMobW) rgba(#000,.3),
                0 1px size_pxToVw(12,$rouletteGameMobW) rgba(#000,.3);
    padding:size_pxToVw(8,$rouletteGameMobW) 0;
    margin:0;
  }
  &___name{
    font-size:size_pxToVw(20,$rouletteGameMobW);
    font-weight: bold;
    text-shadow:0 0 size_pxToVw(18,$rouletteGameMobW) rgba(#000,.6),
                0 0 size_pxToVw(36,$rouletteGameMobW) rgba(#000,.6),
                0 1px size_pxToVw(36,$rouletteGameMobW) rgba(#000,.6);
    padding-bottom:size_pxToVw(8,$rouletteGameMobW);
    margin:0;
  }
  &___img{
    width:size_pxToVw(140,$rouletteGameMobW);
    margin-bottom:size_pxToVw(5,$rouletteGameMobW);
    position:relative;
    z-index:1;
  }
  &___close{
    width: 50px;
    height: 50px;
    padding: 6px;
    position: absolute;
    top: -7px;
    right: 8%;
    z-index:1;
    &_cross{
      height: 100%;
      display: block;
      background-color: rgba(#fff,.8);
      cursor: pointer;
      border-radius: 50%;
      &:before, &:after{
        content:"";
        width:24px;
        height:2px;
        background-color:#000;
        border-radius:2px;
        @extend %maPosaT0L0R0B0;
      }
      &:before{transform:rotate(45deg);}
      &:after{transform:rotate(-45deg);}
    }
  }
}
.roulette-popupOpen{
  > .roulette_popup{
    z-index:2;
    &:before {
      background-color:rgba(#000,.75);
      backdrop-filter:blur(6px);
    }
  }
  .roulette_popup{
    &_wrap{
      opacity:1;
      transform:translate3d(-50%,-50%,0) scale3d(1,1,1);
    }
    &__box{
      &:before{animation:rouletteDecoShake 25s linear infinite alternate}
      &:after{animation:rouletteDecoShake 25s infinite alternate-reverse}
    }
  }
}
.normal, .newYear, .xmas{
  .roulette_popup__box:after{background-image:url("@/assets/img/roulette/normal/roulettePopupRed.png");}
}
.newYear, .xmas{
  .roulette_popup{
    &_wrap{background-image:url("@/assets/img/roulette/xmas/roulettePopupBox.png");}
    &__box:before{background-image:url("@/assets/img/roulette/xmas/roulettePopupBlue.png");}
  }
}
.normal .roulette_popup{
  &_wrap{background-image:url("@/assets/img/roulette/normal/roulettePopupBox.png");}
  &__box:before{background-image:url("@/assets/img/roulette/normal/roulettePopupBlue.png");}
}
@media screen and (min-width: 568px){
  .roulette_popup{
    left:50%;
    transform:translate3d(-50%,0,0);
    &___title{
      font-size:21px;
      text-shadow:0 0 9px rgba(#000,.3),
                  0 0 18px rgba(#000,.3),
                  0 1px 18px rgba(#000,.3);
      padding:12px 0;
    }
    &___name{
      font-size: 30px;
      text-shadow: 0 0 27px rgba(#000,.6), 0 0 54px rgba(#000,.6), 0 1px 54px rgba(#000,.6);
      padding-bottom: 12px;
    }
    &___img{
      width:212px; // 227px;
      margin-bottom:8px;
    }
    &___close{top:10%;}
  }
}
@media screen and (min-width:1024px){
  .roulette_popup{
    max-width:1920px;
    &_wrap{
      width:calc(776/630)*72vh;
      max-width:776px;
      height:72vh;
      max-height:630px;
      padding-bottom:0;
    }
    &___title{
      font-size:size_pxToVw(26,$rouletteGameW);
      text-shadow:0 0 size_pxToVw(12,$rouletteGameW) rgba(#000,.6), 
                  0 0 size_pxToVw(24,$rouletteGameW) rgba(#000,.6), 
                  0 1px size_pxToVw(24,$rouletteGameW) rgba(#000,.6);
      padding:size_pxToVw(16,$rouletteGameW) 0;
    }
    &___name{
      font-size:size_pxToVw(38,$rouletteGameW);
      text-shadow:0 0 size_pxToVw(18,$rouletteGameW) rgba(#000,.6), 
                  0 0 size_pxToVw(36,$rouletteGameW) rgba(#000,.6), 
                  0 1px size_pxToVw(36,$rouletteGameW) rgba(#000,.6);
      padding-bottom:size_pxToVw(16,$rouletteGameW);
    }
    &___close{top:8%}
  }
}
@media screen and (min-width: 1200px){
  .roulette_popup___img{width:size_pxToVw(230,$rouletteGameW)}
}
@media screen and (min-width: 1440px){
  .roulette_popup{
    &___title{
      font-size: 26px;
      text-shadow:0 0 12px rgba(#000,.6),
                  0 0 24px rgba(#000,.6),
                  0 1px 24px rgba(#000,.6);
      padding: 16px 0;
    }
    &___name{
      font-size: 38px;
      text-shadow:0 0 18px rgba(#000,.6),
                  0 0 36px rgba(#000,.6),
                  0 1px 36px rgba(#000,.6);
      padding-bottom: 16px;
    }
    &___img{width:230px}
  }
}
</style>