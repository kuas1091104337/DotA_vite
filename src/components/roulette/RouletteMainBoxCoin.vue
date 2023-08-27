<script setup>
</script>

<template>
<div class="roulette_main___box__coin">
  <!-- <span class="roulette_main___box__coin_wrap roulette_main___box__coin_1~6"/> -->
  <span
    v-for="num in 6" :key="num" 
    :class="['roulette_main___box__coin_wrap roulette_main___box__coin_'+num]"
  />
</div>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
@keyframes rouletteBoxCoin{
	0%{
		opacity:.5;
		transform:scale3d(.6,.6,1);
	}
	25%{
		opacity:.8;
		transform:scale3d(.8,.8,1);
	}
	50%{
		opacity:1;
		transform:scale3d(1,1,1);
	}
	75%{
		opacity:.6;
    transform:scale3d(1.15,1.15,1);
	}
	100%{
		opacity:.1;
    transform:scale3d(1.3,1.3,1);
	}
}
@keyframes rouletteTiger-CNY{
  0%, 100% {transform:scale3d(1,1,1) rotate3d(0,0,0,0deg)}
  10%,20% {transform:scale3d(.975,.975,1) rotate3d(0,0,1,-3deg)}
  30%,50%,70%,90% {transform:scale3d(1.025,1.025,1) rotate3d(0,0,1,3deg)}
  40%,60%,80% {transform:scale3d(1.025,1.025,1) rotate3d(0,0,1,-3deg)}
}
.roulette_main___box__coin{
  width:calc($rouletteGameMobW/355)*100%;
  pointer-events:none;
  position:absolute;
  top:calc((355 - $rouletteGameMobH)/355)*50%;
  left:calc((355 - $rouletteGameMobW)/355)*50%;
  &_wrap{
    @extend %wh100pPosaT0L0;
    &:before{
      content:"";
      height: 0;
      background-size:cover;
      position: absolute;
    }
  }
  &_1{
    animation:rouletteBoxCoin 4s -0.5s linear infinite both;
    &:before{
      width:calc(128/750)*100%;
      padding-bottom:calc(94/128*128/750)*100%;
      top:49.6%;
      left:83.3%;
    }
  }
  &_2{
    animation:rouletteBoxCoin 7s -2s linear infinite both;
    &:before{
      width:calc(92/750)*100%;
      padding-bottom:calc(52/92*92/750)*100%;
      top: 30.5%;
      left: 4.5%;
    }
  }
  &_3{
    animation:rouletteBoxCoin 8s -2.5s linear infinite both;
    &:before{
      width:calc(169/750)*100%;
      padding-bottom:calc(133/169*169/750)*100%;
      top: 22%;
      left: 77.5%;
    }
  }
  &_4{
    animation:rouletteBoxCoin 6s -1.5s linear infinite both;
    &:before{
      width:calc(154/750)*100%;
      padding-bottom:calc(136/154*154/750)*100%;
      top: 72.5%;
      left: 75.5%;
    }
  }
  &_5{
    animation:rouletteBoxCoin 5s -1s linear infinite both;
    &:before{
      width:calc(303/750)*100%;
      padding-bottom:calc(236/303*303/750)*100%;
      top: 72.5%;
      left: 0;
    }
  }
  &_6{
    animation:rouletteBoxCoin 9s -3s linear infinite both;
    &:before{
      width:calc(72/750)*100%;
      padding-bottom:calc(70/72*72/750)*100%;
      top: 5%;
      left: 20%;
    }
  }
}
.roulette-popupOpen .roulette_main___box__coin_wrap{
  animation-play-state:paused
}
.normal, .xmas{
  .roulette_main___box__coin{
    height:calc($rouletteGameMobH/355)*100%;
    &_1:before{background-image:url("@/assets/img/roulette/normal/rouletteCoin1.png");}
    &_2:before{background-image:url("@/assets/img/roulette/normal/rouletteCoin2.png");}
    &_3:before{background-image:url("@/assets/img/roulette/normal/rouletteCoin3.png");}
    &_4:before{background-image:url("@/assets/img/roulette/normal/rouletteCoin4.png");}
    &_5:before{background-image:url("@/assets/img/roulette/normal/rouletteCoin5.png");}
    &_6:before{background-image:url("@/assets/img/roulette/normal/rouletteCoin6.png");}
  }
}
.newYear .roulette_main___box__coin{
  height:calc($rouletteGameNYmobH/355)*100%;
  &:before{
    content:"";
    width:calc(184/$rouletteGameMobW)*100%;
    height:0;
    background-image:url("@/assets/img/roulette/newYear/tiger.png");
    background-size:cover;
    padding-bottom:calc(119/184)*calc(184/$rouletteGameMobW)*100%;
    position:absolute;
    left:50%;
    bottom:4.5%;
    animation:rouletteTiger-CNY 2s linear infinite;
  }
  &_1:before{background-image:url("@/assets/img/roulette/newYear/rouletteCoin1.png");}
  &_2:before{background-image:url("@/assets/img/roulette/newYear/rouletteCoin2.png");}
  &_3:before{background-image:url("@/assets/img/roulette/newYear/rouletteCoin3.png");}
  &_4:before{background-image:url("@/assets/img/roulette/newYear/rouletteCoin4.png");}
  &_5:before{background-image:url("@/assets/img/roulette/newYear/rouletteCoin5.png");}
  &_6:before{background-image:url("@/assets/img/roulette/newYear/rouletteCoin6.png");}
}
@media screen and (min-width:1024px){
  .roulette_main___box__coin{
    width:150%;
    height:125%;
    top:-12.5%;
    left:-25%;
    &_1{
      animation-duration:5s;
      animation-delay:-1s;
      &:before{
        width:calc(115/900)*100%;
        padding-bottom:calc(84/115*115/900)*100%;
        top:47%;
        left:76%;
      }
    }
    &_2:before{
      width:calc(83/900)*100%;
      padding-bottom:calc(47/83*83/900)*100%;
      top:26%;
      left:15%;
    }
    &_3:before{
      width:calc(154/900)*100%;
      padding-bottom:calc(121/154*154/900)*100%;
      top:17%;
      left:73%;
    }
    &_4:before{
      width:calc(139/900)*100%;
      padding-bottom:calc(122/139*139/900)*100%;
      top:71%;
      left:68%;
    }
    &_5{
      animation-duration:4s;
      animation-delay:-0.5s;
      &:before{
        width:calc(274/900)*100%;
        padding-bottom:calc(213/274*274/900)*100%;
        top:71%;
        left:11%;
      }
    }
    &_6:before{
      width:calc(66/900)*100%;
      padding-bottom:calc(64/66*66/900)*100%;
      top:4%;
      left:24%;
    }
  }
  .normal, .newYear, .xmas{
    .roulette_main___box__coin{height:125%;}
  }
  .newYear .roulette_main___box__coin:before{
    width:calc(314/900)*100%;
    padding-bottom:calc(204/314*314/900)*100%;
    left:60.5%;
    bottom:0;
  }
}
</style>