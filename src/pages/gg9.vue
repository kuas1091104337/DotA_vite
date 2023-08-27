<script setup>
import {useDotAContextMenu, useGetWindowScrollVal} from '@/composables';
import {debounce} from '@/lib/debounce.js'
import {atanRightAngle} from '@/lib/atanRightAngle.js'
const DArightMenuVal = reactive({W:0,H:0}),
      {isDArightMenuShow, windowPos, DArightMenuHide, DArightMenuShow} = useDotAContextMenu(DArightMenuVal),
      {windowScrollMiddle} = useGetWindowScrollVal(),
      gg9Main = ref(null), gg9Game = ref(null), gg9GunAngle = ref('rotate3d(0,0,1,0deg)'),
      gg9 = reactive({
        controlArea:[...Array(25)], mainIsOut:true, mainOffsetW:0, mainOffsetT:0, mainOffsetB:0, gameOffsetT:0, gameOffsetB:0
      }),
      DArightMenuEleFn = (w,h) => {
        DArightMenuVal.W = w.value;
        DArightMenuVal.H = h.value;
      },
      getGg9DomOffset = () => {
        gg9.mainOffsetW = gg9Main.value.offsetWidth;
        gg9.mainOffsetT = gg9Main.value.offsetTop;
        gg9.mainOffsetB = gg9Main.value.offsetTop + gg9Main.value.offsetHeight;
        gg9.gameOffsetT = gg9Game.value.offsetTop;
        gg9.gameOffsetB = gg9Game.value.offsetTop + gg9Game.value.offsetHeight;
      },
      waterGunIn = () => gg9.mainIsOut = false,
      waterGunOut = () => {
        gg9GunAngle.value = `rotate3d(0,0,1,0deg)`;
        gg9.mainIsOut = true;
      },
      waterGunAngle = (e) => {
        const angle = atanRightAngle(e.pageX, e.pageY, gg9.mainOffsetW, gg9.mainOffsetT, gg9.mainOffsetB);
        gg9GunAngle.value = `rotate3d(0,0,1,${angle}deg)`;
      };
onMounted(() => {
  getGg9DomOffset();
  window.addEventListener('resize',debounce(getGg9DomOffset,400));
});
onUnmounted(() => {
  window.removeEventListener('resize',debounce(getGg9DomOffset,400));
});
</script>

<template>
<div class="gg9" @click="DArightMenuHide" @contextmenu.prevent="DArightMenuShow">
  <SlotHead>Dot A 捕魚</SlotHead>
  <main
    :class="['gg9_main',{stop:gg9.mainOffsetB <= windowScrollMiddle}]"
    ref="gg9Main"
  >
    <h2 class="gg9_main_title">GG9 Underworld</h2>
    <h3 class="gg9_main_txt">Fish GG9 Underworld</h3>
    <p class="gg9_main_btn"><a href="javascript:;" class="gg9_main_btn_link">play</a></p>
    <span
      v-for="(item,idx) in gg9.controlArea" :key="idx"
      :class="['gg9_main_controlArea gg9_main_controlArea-'+(idx+1)]"
    />
    <img class="gg9_main_logo" src="@/assets/img/gg9/fishGameLogo.webp" alt="gg9 logo">
    <div class="gg9_main_gun">
      <img class="gg9_main_gun_base" src="@/assets/img/gg9/waterGunBase.webp" alt="water gun base">
      <img :class="['gg9_main_gun_barrel',{'gg9_main_gun_barrel-out':gg9.mainIsOut}]" src="@/assets/img/gg9/waterGun.webp" alt="water gun">
    </div>
    <div class="gg9_main_box" @mousemove="waterGunAngle" @mouseenter="waterGunIn" @mouseleave="waterGunOut">
      <span class="gg9_main__wrap gg9_main__wrap-1">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-2"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-1"/>
      </span>
      <span class="gg9_main__wrap gg9_main__wrap-2">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-3"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-4"/>
      </span>
      <span class="gg9_main__wrap gg9_main__wrap-3">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-6"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-5"/>
      </span>
      <span class="gg9_main__wrap gg9_main__wrap-4">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-7"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-8"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-9"/>
      </span>
      <span class="gg9_main__wrap gg9_main__wrap-5">
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-11"/>
        <span class="gg9_main__wrap_fish gg9_main__wrap_fish-10"/>
      </span>
      <span class="gg9_main__fish gg9_main__fish-12"/>
      <span class="gg9_main__fish gg9_main__fish-13"/>
      <span class="gg9_main__fish gg9_main__fish-14"/>
      <span class="gg9_main__fish gg9_main__fish-15"/>
      <span class="gg9_main__fish gg9_main__fish-16"/>
    </div>
  </main>
  <div 
    :class="['gg9_game',{active:gg9.gameOffsetT < windowScrollMiddle && gg9.gameOffsetB >= windowScrollMiddle}]"
    ref="gg9Game"
  >
    <div class="gg9_game_wrap">
      <span class="gg9_game__fish gg9_game__fish-1"/>
      <span class="gg9_game__fish gg9_game__fish-2"/>
      <div class="gg9_game__box">
        <article class="gg9_game__box_wrap">
          <h3 class="gg9_game__box__title">Fish Game Introduction</h3>
          <p class="gg9_game__box__txt">The fish game based on Unity, so it will have high quality and lively performance, fish game supports 4 players play the game at the same time, player can use "Cannon" to hit the fish then earn high reward, player will have a great entertainment and visual enjoyments at the same time.</p>
          <div class="gg9_game__box__fish">
            <img class="gg9_game__box__fish_img" src="@/assets/img/gg9/fishGameFish2.webp">
          </div>
        </article>
      </div>
    </div>
  </div>
  <SlotFooter>Copyright © Dot A & GG9 Reserved</SlotFooter>
  <DArightMenu 
    :class="{active:isDArightMenuShow}"
    :style="{top:windowPos.top+'px',left:windowPos.left+'px'}"
    @DArightMenuEle="DArightMenuEleFn"
  />
</div>
</template>

<style lang="scss" src="@/assets/scss/brand.scss"></style>
<style lang="scss">
@import"@/assets/scss/gg9Variables.scss";
.gg9{
  width:100%;
  min-width:$gg9MinW+px;
  max-width:$gg9MaxW+px;
  background-color:#1e1e1e;
  margin:0 auto;
  .brand{
    &Head__logo__txt{font-size: 20px;}
    &Foot{
      font-size: 14px;
      background-color:#1e1e1e;
      &__item_link{
        color:#fff;
        &:hover{
          color:#1e1e1e;
          background-color:#fff;
        }
      }
      &_copy{color:#fff}
    }
  }
  &_main{
    height:0;
    background-image:url("@/assets/img/gg9/gg9Main.webp");
    background-position: center;
    background-size:cover;
    box-shadow:0 0 size_pxToVw(50,$gg9MobW) size_pxToVw(5,$gg9MobW) rgba(#000,.8) inset;
    padding-bottom:calc($gg9MobH/$gg9MobW)*100%;
    position: relative;
    z-index:1;
    &_title, &_txt{
      @extend %textIndentOut;
      margin:0;
    }
    &_btn{
      width:calc($gg9BtnMobW/$gg9MobW)*100%;
      height:calc($gg9BtnMobH/$gg9MobH)*100%;
      border-radius: calc($gg9BtnMobH/2)+px;
      margin: 0;
      position:absolute;
      top:75%;
      left:50%;
      z-index:2;
      transform:translate3d(-50%,-50%,0);
      &:after{
        content:"";
        width:calc($btnLightWH/$gg9BtnW)*100%;
        height:100%;
        background-image:url("@/assets/img/btnLight.png");
        background-size:cover;
        position:absolute;
        top:-26%;
        left:-4%;
        animation:brandBtnStar 4s linear infinite both;
      }
      &_link{
        @extend %textIndentOut;
        width: 100%;
        height: 100%;
        background-image:url("@/assets/img/gg9/playBtn.webp");
        background-size:cover;
        border-radius:40px;
        overflow: hidden;
        position: relative;
        &:after{
          content:"";
          width:70%;
          height:97.8%;
          background-image:linear-gradient(90deg, rgba(255,214,26,0) 0%, rgba(255,214,26,0.35) 30%, rgba(255,214,26,.7) 45%, rgba(255,214,26,.7) 55%, rgba(255,214,26,0.35) 70%, rgba(255,214,26,0) 100%);
          position:absolute;
          top:0;
          left:-85%;
          transform:skew(-32deg);
          animation:brandBtnFlash 4s linear infinite both;
        }
      }
      &:hover ~ .gg9_main{
        &_controlArea{
          background-color:rgba(#000,.7);
          z-index:1;
          transition:background-color .4s;
          @for $i from 2 through 25{
            &-#{$i}{transition-delay:($i - 1) * 0.03s}
          }
        }
        &_logo{
          z-index:2;
          transform:translate3d(-50%,-50%,0) scale3d(1,1,1);
        }
      }
    }
    &_controlArea, &_logo, &_gun{position:absolute;}
    &_controlArea{
      width:calc(100%/$ctrlAreaWamount);
      height:calc(100%/$ctrlAreaHamount);
      background-color:rgba(#000,0);
      transition:background-color .2s;
      // background-image:radial-gradient(5px circle at 50% 50%, red 1px, blue 3px, transparent 0%);
      @for $i from 1 through $ctrlAreaHamount{
        &-#{$i}{top:0}
      }
      @for $i from $ctrlAreaHamount+1 through $ctrlAreaHamount*2{
        &-#{$i}{top:calc(100%/$ctrlAreaHamount)}
      }
      @for $i from $ctrlAreaHamount*2+1 through $ctrlAreaHamount*3{
        &-#{$i}{top:calc(100%/$ctrlAreaHamount)*2}
      }
      @for $i from $ctrlAreaHamount*3+1 through $ctrlAreaHamount*4{
        &-#{$i}{top:calc(100%/$ctrlAreaHamount)*3}
      }
      @for $i from $ctrlAreaHamount*4+1 through $ctrlAreaHamount*5{
        &-#{$i}{top:calc(100%/$ctrlAreaHamount)*4}
      }
      &-1, &-6, &-11, &-16, &-21{left:0;}
      &-2, &-7, &-12, &-17, &-22{left:calc(100%/$ctrlAreaWamount);}
      &-3, &-8, &-13, &-18, &-23{left:calc(100%/$ctrlAreaWamount)*2;}
      &-4, &-9, &-14, &-19, &-24{left:calc(100%/$ctrlAreaWamount)*3;}
      &-5, &-10, &-15, &-20, &-25{left:calc(100%/$ctrlAreaWamount)*4;}
      // &-1:hover ~ .gg9_main_gun:after{transform:rotate3d(0,0,1,-43deg);}
    }
    &_logo{
      width:calc($gg9LogoMobWH/$gg9MobW)*100%;
      top:50%;
      left:50%;
      transform:translate3d(-50%,-50%,0) scale3d(.95,.95,1);
      transition:transform 1s cubic-bezier(.5,-.5,.5,1.5);
    }
    &_box{
      @extend %wh100pPosaT0L0;
      overflow: hidden;
      perspective:250vw;
    }
    &__wrap, &__fish{
      position: absolute;
      transform-style:preserve-3d;
    }
    &__wrap{
      height:0;
      .stop &{animation-play-state:paused;}
      &-2, &-4{
        animation:fishOtherRun 10s cubic-bezier(.5,-0.5,.5,1.5) infinite both;
      }
      &-2{
        width:calc($gg9WrapFishMob2W/$gg9MobW)*100%;
        padding-bottom:calc($gg9WrapFishMob2H/$gg9WrapFishMob2W)*calc($gg9WrapFishMob2W/$gg9MobW)*100%;
        top: 9.3%;
        left:27.75%;
        animation-delay:-3s;
      }
      &-4{
        width:calc($gg9WrapFishMob4W/$gg9MobW)*100%;
        padding-bottom:calc($gg9WrapFishMob4H/$gg9WrapFishMob4W)*calc($gg9WrapFishMob4W/$gg9MobW)*100%;
        top: 8.7%;
        right: -10.15%;
        animation-delay:-6s;
        &:hover{animation-play-state: paused}
      }
      &_fish{
        position: absolute;
        &:before, &:after{
          content:"";
          .stop &{animation-play-state:paused;}
        }
        &:before{
          width:100%;
          height:100%;
          display: block;
          background-size:cover;
        }
        &:after{
          @extend %wh100pPosaT0L0;
          transform:translate3d(0,0,5px)
        }
        &-3, &-7{top:0}
        &-3, &-8{left:0}
        &-4, &-7{right:0}
        &-4, &-9{bottom:0}
        &-3, &-4{
          &:before{
            background-image:url("@/assets/img/gg9/fish3Shadow.webp");
            animation:fishShadow .8s infinite alternate both;
          }
          &:after{
            background-image:url("@/assets/img/gg9/fish3.webp");
            background-size:calc($gg9Fish3_4ImgAllW/$gg9Fish3W)*100% 100%;
            animation:fish3Swim 1.61s steps(23) infinite;
            // 23張輪播，1張0.07秒，23 * 0.07 = 1.61 
          }
        }
        &-3{
          width:calc($gg9Fish3W/$gg9WrapFish2W)*100%;
          height:calc($gg9Fish3H/$gg9WrapFish2H)*100%;
          &:before{animation-delay: -0.4s}
        }
        &-4{
          width:calc($gg9Fish4W/$gg9WrapFish2W)*100%;
          height:calc($gg9Fish4H/$gg9WrapFish2H)*100%;
          &:after{animation-delay: -0.77s}
        }
        &-7{
          width:calc($gg9Fish7W/$gg9WrapFish4W)*100%;
          height:calc($gg9Fish7H/$gg9WrapFish4H)*100%;
          &:before{
            background-image:url("@/assets/img/gg9/fish7Shadow.webp");
            animation:fishShadow 1s infinite alternate both;
          }
          &:after{
            background-image:url("@/assets/img/gg9/fish7.webp");
            background-size:calc($gg9Fish7ImgAllW/$gg9Fish7W)*100% 100%;
            animation:fish7Swim 1.96s steps(28) infinite;
            // 28張輪播，1張0.07秒，28 * 0.07 = 1.96
          }
        }
        &-8{
          width:calc($gg9Fish8W/$gg9WrapFish4W)*100%;
          height:calc($gg9Fish8H/$gg9WrapFish4H)*100%;
          top: 46%;
          &:hover{
            &:before{
              opacity:0;
              animation-name:none;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish8Hover.webp");
              background-size:calc($gg9Fish8HoverImgAllW/$gg9Fish8W)*100% 100%;
              animation:fish8HoverSwim 1.4s steps(14) infinite;
              //14張輪播，1張0.1秒，14 * 0.1 = 0.98
            }
          }
          &:before{
            background-image:url("@/assets/img/gg9/fish8Shadow.webp");
            transition:opacity .4s;
            animation:fishShadow .6s infinite alternate both;
          }
          &:after{
            background-image:url("@/assets/img/gg9/fish8Hover.webp");
            background-image:url("@/assets/img/gg9/fish8.webp");
            background-size:calc($gg9Fish8ImgAllW/$gg9Fish8W)*100% 100%;
            animation:fish8Swim .77s steps(11) infinite;
            // 11張輪播，1張0.07秒，11 * 0.07 = .77
          }
        }
        &-9{
          width:calc($gg9Fish9W/$gg9WrapFish4W)*100%;
          height:calc($gg9Fish9H/$gg9WrapFish4H)*100%;
          left: 50%;
          &:before{
            background-image:url("@/assets/img/gg9/fish9Shadow.webp");
            animation:fishShadow .6s -0.3s infinite alternate both;
          }
          &:after{
            background-image:url("@/assets/img/gg9/fish9.webp");
            background-size:calc($gg9Fish9ImgAllW/$gg9Fish9W)*100% 100%;
            animation:fish9Swim .91s steps(13) infinite;
            // 13張輪播，1張0.07秒，13 * 0.07 = .91
          }
        }
      }
    }
    &__fish{
      .stop &{animation-play-state:paused;}
      &:before, &:after{
        content:"";
        .stop &{animation-play-state:paused;}
      }
      &:before{
        width:100%;
        height:100%;
        display: block;
        background-size:cover;
      }
      &:after{@extend %wh100pPosaT0L0}
      &-13, &-14, &-15, &-16{
        &:hover{animation-play-state: paused}
      }
      &-12{
        width:calc($gg9FishMob12W/$gg9MobW)*100%;
        height:calc($gg9FishMob12H/$gg9MobH)*100%;
        bottom:2%;
        right:8%;
        animation:fishOtherRun 10s -4s cubic-bezier(.5,-0.5,.5,1.5) infinite both;
        &:before{
          background-image:url("@/assets/img/gg9/fish12Shadow.webp");
          animation:fishShadow 1s infinite alternate both;
        }
        &:after{
          background-image:url("@/assets/img/gg9/fish12.webp");
          background-size:calc($gg9Fish12ImgAllW/$gg9Fish12W)*100% 100%;
          animation:fish12Swim 1.69s steps(26) infinite;
          // 26張輪播，1張0.07秒，26 * 0.07 = 1.82
        }
      }
      &-13{
        width:calc($gg9FishMob13W/$gg9MobW)*100%;
        height:calc($gg9FishMob13H/$gg9MobH)*100%;
        bottom:2%;
        left:2%;
        animation:fish13RunMob 14s infinite cubic-bezier(.5,-0.5,.5,1.5) both;
        &:before{
          background-image:url("@/assets/img/gg9/fish6_13Shadow.webp");
          animation:fishShadow .6s infinite alternate both;
        }
        &:after{
          background-image:url("@/assets/img/gg9/fish6_13.webp");
          background-size:calc($gg9Fish6_13ImgAllW/$gg9Fish13W)*100% 100%;
          animation:fish6_13Swim 1.12s steps(16) infinite;
          //16張輪播，1張0.07秒，16 * 0.07 = 1.12
        }
      }
      &-14{
        width:calc($gg9FishMob14W/$gg9MobW)*100%;
        height:calc($gg9FishMob14H/$gg9MobH)*100%;
        left:1.5%;
        bottom:14.85%;
        animation:fish14RunMob 12s infinite cubic-bezier(.5,-0.5,.5,1.5) both;
        &:before{
          background-image:url("@/assets/img/gg9/fish14Shadow.webp");
          animation:fishShadow .6s infinite alternate both;
        }
        &:after{
          background-image:url("@/assets/img/gg9/fish14.webp");
          background-size:calc($gg9Fish14ImgAllW/$gg9Fish14W)*100% 100%;
          animation:fish14Swim 1.61s steps(23) infinite;
          // 23張輪播，1張0.07秒，23 * 0.07 = 1.61
        }
      }
      &-15{
        width:calc($gg9FishMob15W/$gg9MobW)*100%;
        height:calc($gg9FishMob15AllH/$gg9MobH)*100%;
        top:3%;
        left:-18.5%;
        animation:fish15RunMob 14s infinite cubic-bezier(.5,-.5,.5,1.5) both;
        &:before{
          background-image:url("@/assets/img/gg9/fish15Shadow.webp");
          animation:fishShadow 0.8s infinite alternate both;
        }
        &:after{
          height:calc($gg9Fish15H/$gg9Fish15AllH)*100%;
          background-image:url("@/assets/img/gg9/fish15.webp");
          background-size:calc($gg9Fish15ImgAllW/$gg9Fish15W)*100% 100%;
          animation:fish15Swim 1.125s steps(15) infinite;
          //15張輪播，1張0.07秒，15 * 0.07 = 1.05
        }
      }
      &-16{
        width:calc($gg9FishMob16W/$gg9MobW)*100%;
        height:calc($gg9FishMob16AllH/$gg9MobH)*100%;
        top:56.8%;
        right:-5%;
        animation:fish16RunMob 12.5s infinite cubic-bezier(.5,-.5,.5,1.5) both;
        &:hover{
          &:before{
            animation-duration: .2s;
            animation-delay: -0.1s;
          }
          &:after{
            background-image:url("@/assets/img/gg9/fish16Hover.webp");
            background-size:calc($gg9Fish16HoverImgAllW/$gg9Fish16W)*100% 100%;
            animation:fish16HoverSwim .49s steps(7) infinite;
            //7張輪播，1張0.07秒，7 * 0.07 = 0.49
          }
        }
        &:before{
          background-image:url("@/assets/img/gg9/fish16Shadow.webp");
          animation:fishShadow .4s infinite alternate-reverse both;
        }
        &:after{
          height:calc($gg9Fish16H/$gg9Fish16AllH)*100%;
          background-image:url("@/assets/img/gg9/fish16Hover.webp");
          background-image:url("@/assets/img/gg9/fish16.webp");
          background-size:calc($gg9Fish16ImgAllW/$gg9Fish16W)*100% 100%;
          animation:fish16Swim 0.7s steps(10) infinite;
          //10張輪播，1張0.07秒，10 * 0.1 = 0.7
        }
      }
    }
    &_gun{
      width:calc($gg9GunMobW/$gg9MobW)*100%;
      height:calc($gg9GunMobH/$gg9MobH)*100%;
      left:50%;
      bottom:0;
      transform:translate3d(-50%,0,0);
      &_base, &_barrel{width: 100%;}
      &_barrel{
        @extend %posaT0L0;
        transform-origin:50% 77%;
        transform:v-bind(gg9GunAngle); // transform:rotate3d(0,0,1,0deg);
        &-out{transition:transform .4s;}
      }
    }
  }
  &_game{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom:calc($gg9MobH/$gg9MobW)*100%;
    position: relative;
    &_wrap{@extend %wh100pPosaT0L0}
    &__fish-1, &__box{
      height: 50%;
      background-image:url("@/assets/img/gg9/fishGameBg.webp");
      background-size:cover;
    }
    &__fish-1{
      display: block;
      background-position-x: 12%;
    }
    &__box{
      background-position-x: 92.5%;
      padding: 15px;
      position: relative;
      &_wrap{
        color:#333;
        text-shadow:1px 1px 0 #fff,
                    1px 1px 3px rgba(#fff,.75);
        background-color:rgba(#fff,.75);
        height: 100%;
        overflow: auto;
        padding:10px 15px;
      }
      &__title{
        font-size:size_pxToVw(28,$gg9MobW);
        font-weight: normal;
        margin:0; 
      }
      &__txt{
        font-size:16px;
        font-weight:300;
        line-height:1.8;
        margin:.5em 0;
      }
      &:after, &__fish{
        position: absolute;
        transform-style:preserve-3d;
      }
      &:after{
        content:"";
        width:calc($gg9GameFishMob1W/$gg9MobW)*100vw;
        padding-bottom:calc($gg9GameFishMob1H/$gg9GameFishMob1W)*calc($gg9GameFishMob1W/$gg9MobW)*100vw;
        background-image:url("@/assets/img/gg9/fish17.webp");
        background-size:calc($gg9Fish17ImgAllW/$gg9Fish17W)*100% 100%;
        left:78%;
        bottom:0%;
        .active &{
          animation:fishOtherRunMob 10s cubic-bezier(.5,-0.5,.5,1.5) infinite both,
                    fish17Swim 1s steps(10) infinite; //10張輪播，1張0.1秒，10 * 0.1 = 1
        }
      }
      &__fish{
        width:calc($gg9GameFishMob2W/$gg9MobW)*100vw;
        padding-bottom:calc($gg9GameFishMob2H/$gg9GameFishMob2W)*calc($gg9GameFishMob2W/$gg9MobW)*100vw;
        top:-38%;
        right:50.5%;
        z-index:1;
        .active &{
          animation:fishOtherRunMob 10s -4s cubic-bezier(.5,-0.5,.5,1.5) infinite both;
        }
        &:before, &:after{
          content:"";
          background-size:cover;
          position: absolute;
        }
        &:before{
          width:calc($gg9Fish9W/$gg9GameFish2W)*100%;
          height:calc($gg9Fish9H/$gg9GameFish2H)*100%;
          background-image:url("@/assets/img/gg9/fish9.webp");
          background-size:calc($gg9Fish9ImgAllW/$gg9Fish9W)*100% 100%;
          top: 0;
          left: 19%;
          .active &{
            animation:fish9Swim .91s steps(13) infinite;
            // 13張輪播，1張0.07秒，13 * 0.07 = .91
          }
        }
        &:after{
          // width:calc($gg9Fish5W/$gg9GameFish2W)*100%; // height:calc($gg9Fish5H/$gg9GameFish2H)*100%;
          width:calc(148/$gg9GameFish2W)*100%;
          height:calc(162/$gg9GameFish2H)*100%;
          background-image:url("@/assets/img/gg9/fish5.webp");
          background-size:calc($gg9Fish5ImgAllW/$gg9Fish5W)*100% 100%;
          right:2%;
          bottom:2.5%;
          transform: rotate3d(0,1,0,180deg);
          .active &{
            animation:fish5Swim 1.4s steps(20) infinite;
            // 20張輪播，1張0.07秒，20 * 0.07 = 1.4
          }
        }
        &_img{
          width: 100%;
          @extend %posaT0L0;
          .active &{
            animation:fishBubble 5s linear infinite;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .gg9_game__box__txt{font-size:14px}
}
// ===== 桌機版型區 =====
@media screen and (min-width: 1024px) {
  .gg9{
    .brandHead{
      &__logo__txt{
        font-size: 24px;
        line-height: 34px;
      }
      &__box{
        &__input:focus{
          // focus時input佔位符顯示時
          &:placeholder-shown{color:$gg9HeadLogin;}
        }
        &_btn{
          &-login{background-color:$gg9HeadLogin;}
          &-signup{background-color:$gg9HeadSignup;}
        }
      }
    }
    &_main{
      box-shadow:0 0 size_pxToVw(50,$gg9W) size_pxToVw(5,$gg9W) rgba(#000,.8) inset;
      padding-bottom:calc($gg9H/$gg9W)*100%;
      &_btn{
        width:calc($gg9BtnW/$gg9W)*100%;
        height:calc($gg9BtnH/$gg9H)*100%;
        border-radius: calc($gg9BtnH/2)+px;
      }
      &_logo{
        width:calc($gg9LogoW/$gg9W)*100%;
        top:47%;
      }
      &_box{perspective:150vw}
      &__wrap{
        &-1, &-3, &-5{
          animation:fishOtherRun 10s cubic-bezier(.5,-0.5,.5,1.5) infinite both;
        }
        &-1{
          width:calc($gg9WrapFish1W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish1H/$gg9WrapFish1W)*calc($gg9WrapFish1W/$gg9W)*100%;
          top:13.5%;
          left:9.5%;
        }
        &-2{
          width:calc($gg9WrapFish2W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish2H/$gg9WrapFish2W)*calc($gg9WrapFish2W/$gg9W)*100%;
          top: 11.5%;
          left: 33.5%;
        }
        &-3{
          width:calc($gg9WrapFish3W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish3H/$gg9WrapFish3W)*calc($gg9WrapFish3W/$gg9W)*100%;
          top:14%;
          right:26%;
          animation-delay:-1s;
        }
        &-4{
          width:calc($gg9WrapFish4W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish4H/$gg9WrapFish4W)*calc($gg9WrapFish4W/$gg9W)*100%;
          top: 17%;
          right: 7%;
        }
        &-5{
          width:calc($gg9WrapFish5W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish5H/$gg9WrapFish5W)*calc($gg9WrapFish5W/$gg9W)*100%;
          bottom: 7%;
          right: 10%;
          animation-delay:-2s;
        }
        &_fish{
          &-1, &-6, &-10{top:0}
          &-1, &-5, &-11{left:0}
          &-2, &-6, &-10{right:0}
          &-5, &-11{bottom:0}
          &-1{
            width:calc($gg9Fish1W/$gg9WrapFish1W)*100%;
            height:calc($gg9Fish1H/$gg9WrapFish1H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish1Shadow.webp");
              animation:fishShadow .8s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish1.webp");
              background-size:calc($gg9Fish1ImgAllW/$gg9Fish1W)*100% 100%;
              animation:fish1Swim 1.4s steps(20) infinite;
              // 20張輪播，1張0.07秒，20 * 0.07 = 1.4
            }
          }
          &-2{
            width:calc($gg9Fish2W/$gg9WrapFish1W)*100%;
            height:calc($gg9Fish2H/$gg9WrapFish1H)*100%;
            bottom: 10.25%;
            &:before{
              background-image:url("@/assets/img/gg9/fish2Shadow.webp");
              animation:fishShadow .5s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish2.webp");
              background-size:calc($gg9Fish2ImgAllW/$gg9Fish2W)*100% 100%;
              animation:fish2Swim .63s steps(9) infinite;
              // 9張輪播，1張0.07秒，9 * 0.07 = .63
            }
          }
          &-5{
            width:calc($gg9Fish5W/$gg9WrapFish3W)*100%;
            height:calc($gg9Fish5H/$gg9WrapFish3H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish5Shadow.webp");
              animation:fishShadow 1s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish5.webp");
              background-size:calc($gg9Fish5ImgAllW/$gg9Fish5W)*100% 100%;
              animation:fish5Swim 1.4s steps(20) infinite;
              // 20張輪播，1張0.07秒，20 * 0.07 = 1.4
            }
          }
          &-6{
            width:calc($gg9Fish6W/$gg9WrapFish3W)*100%;
            height:calc($gg9Fish6H/$gg9WrapFish3H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish6_13Shadow.webp");
              animation:fishShadow .6s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish6_13.webp");
              background-size:calc($gg9Fish6_13ImgAllW/$gg9Fish13W)*100% 100%;
              animation:fish6_13Swim 1.12s steps(16) infinite;
              //16張輪播，1張0.07秒，16 * 0.07 = 1.12
            }
          }
          &-10{
            width:calc($gg9Fish10W/$gg9WrapFish5W)*100%;
            height:calc($gg9Fish10H/$gg9WrapFish5H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish10Shadow.webp");
              animation:fishShadow 1s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish10.webp");
              background-size:calc($gg9Fish10ImgAllW/$gg9Fish10W)*100% 100%;
              animation:fish10Swim 1.05s steps(15) infinite;
              // 15張輪播，1張0.07秒，15 * 0.07 = 1.05
            }
          }
          &-11{
            width:calc($gg9Fish11W/$gg9WrapFish5W)*100%;
            height:calc($gg9Fish11H/$gg9WrapFish5H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish11Shadow.webp");
              animation:fishShadow .6s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish11.webp");
              background-size:calc($gg9Fish11ImgAllW/$gg9Fish11W)*100% 100%;
              animation:fish11Swim .98s steps(14) infinite;
              // 14張輪播，1張0.07秒，14 * 0.07 = .98
            }
          }
        }
      }
      &__fish{
        &-12{
          width:calc($gg9Fish12W/$gg9W)*100%;
          height:calc($gg9Fish12H/$gg9H)*100%;
          bottom:10.5%;
          right:31.5%;
        }
        &-13{
          width:calc($gg9Fish13W/$gg9W)*100%;
          height:calc($gg9Fish13H/$gg9H)*100%;
          bottom: 12%;
          left: 35.5%;
          animation-name:fish13Run;
        }
        &-14{
          width:calc($gg9Fish14W/$gg9W)*100%;
          height:calc($gg9Fish14H/$gg9H)*100%;
          left:11.85%;
          bottom:9.8%;
          animation-name:fish14Run;
        }
        &-15{
          width:calc($gg9Fish15W/$gg9W)*100%;
          height:calc($gg9Fish15AllH/$gg9H)*100%;
          top:18%;//15%
          left:13.5%;//18%
          animation-name:fish15Run;
        }
        &-16{
          width:calc($gg9Fish16W/$gg9W)*100%;
          height:calc($gg9Fish16AllH/$gg9H)*100%;
          top:35.5%;//40%
          right:25%;//23%
          animation-name:fish16Run;
        }
      }
      &_gun{
        width:calc($gg9GunW/$gg9W)*100%;
        height:calc($gg9GunH/$gg9H)*100%;
      }
    }
    &_game{
      background-image:url("@/assets/img/gg9/fishGameBg.webp");
      background-size:cover;
      padding-bottom:calc($gg9GameH/$gg9W)*100%;
      &_wrap{
        display:flex;
        perspective:150vw;
      }
      &__fish{
        height:0;
        position: absolute;
        background-size: cover;
        transform-style:preserve-3d;
        &-1{
          width:calc($gg9Fish18W/$gg9W)*100%;
          background-image:url("@/assets/img/gg9/fish18.webp");
          background-position-x:0;
          background-size:calc($gg9Fish18ImgAllW/$gg9Fish18W)*100% 100%;
          padding-bottom:calc($gg9Fish18H/$gg9Fish18W)*calc($gg9Fish18W/$gg9W)*100%;
          opacity:0;
          top: 5.5%;
          left: 3.5%;
          transition:opacity .4s;
          &:hover{
            opacity:1;
            animation:fishOtherRun 10s cubic-bezier(.5,-0.5,.5,1.5) infinite both,
                      fish18Swim 1.82s steps(21) infinite;
            // 21張輪播，1張0.07秒，21 * 0.07 = 1.47
          }
        }
        &-2{
          width:32%;
          height:80%;
          overflow: hidden;
          right:-7.65%;
          bottom:0;
          z-index:1;
          transform:skew(-31.65deg);
          &:hover:after{
            opacity:1;
            animation:fish19Run 5s linear infinite alternate both,
                      fish19Swim 1.82s steps(26) infinite;
            // 26張輪播，1張0.07秒，26 * 0.07 = 1.82
          }
          &:after{
            content:"";
            width:calc($gg9Fish19W/$gg9W)*100vw;
            height:calc($gg9Fish19H/$gg9W)*100vw;
            background-image:url("@/assets/img/gg9/fish19.png");
            background-size:calc($gg9Fish19ImgAllW/$gg9Fish19W)*100% 100%;
            opacity:0;
            position:absolute;
            top:2%;
            right:30%;
            transform:skew(31.65deg) translate3d(-10%,0,0);//25%
            transition:opacity .4s;
          }
        }
      }
      &__box{
        height: auto;
        padding: 0;
        margin:7% 25% 0 50%;
        background-image:none;
        &_wrap{
          text-shadow:1px 1px 0 #fff,
                      0 0 6px #fff,
                      0 0 12px #fff;
          background-color:transparent;
          padding: 0;
        }
        &__title{
          font-size:size_pxToVw(40,$gg9W);
          font-weight: bold;
        }
        &__txt{font-size:14px}
        &:after, &__fish{
          position: absolute;
          transform-style:preserve-3d;
        }
        &:after{
          width:calc($gg9GameFish1W/$gg9W)*100vw;
          padding-bottom:calc($gg9GameFish1H/$gg9GameFish1W)*calc($gg9GameFish1W/$gg9W)*100vw;
          left:-35%;
          bottom:10%;
          .active &{animation-name:fishOtherRun, fish17Swim}
        }
        &__fish{
          width:calc($gg9GameFish2W/$gg9W)*100vw;
          padding-bottom:calc($gg9GameFish2H/$gg9GameFish2W)*calc($gg9GameFish2W/$gg9W)*100vw;
          top:-20%;
          right:-45%;
          .active &{animation-name:fishOtherRun}
        }
      }
    }
  }
}
// 手機、平板拿橫的時候 Landscape
@media screen and (min-width: 640px) and (max-width: 1023px) and (orientation:landscape){
  .gg9{
    &_main{
      box-shadow:0 0 size_pxToVw(50,$gg9W) size_pxToVw(5,$gg9W) rgba(#000,.8) inset;
      padding-bottom:calc($gg9H/$gg9W)*100%;
      &_btn{
        width:calc($gg9BtnW/$gg9W)*100%;
        height:calc($gg9BtnH/$gg9H)*100%;
        border-radius: calc($gg9BtnH/2)+px;
      }
      &_logo{
        width:calc($gg9LogoW/$gg9W)*100%;
        top:47%;
      }
      &_box{perspective:150vw}
      &__wrap{
        &-1, &-3, &-5{
          animation:fishOtherRun 10s cubic-bezier(.5,-0.5,.5,1.5) infinite both;
        }
        &-1{
          width:calc($gg9WrapFish1W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish1H/$gg9WrapFish1W)*calc($gg9WrapFish1W/$gg9W)*100%;
          top:13.5%;
          left:9.5%;
        }
        &-2{
          width:calc($gg9WrapFish2W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish2H/$gg9WrapFish2W)*calc($gg9WrapFish2W/$gg9W)*100%;
          top: 11.5%;
          left: 33.5%;
        }
        &-3{
          width:calc($gg9WrapFish3W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish3H/$gg9WrapFish3W)*calc($gg9WrapFish3W/$gg9W)*100%;
          top:14%;
          right:26%;
          animation-delay:-1s;
        }
        &-4{
          width:calc($gg9WrapFish4W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish4H/$gg9WrapFish4W)*calc($gg9WrapFish4W/$gg9W)*100%;
          top: 17%;
          right: 7%;
        }
        &-5{
          width:calc($gg9WrapFish5W/$gg9W)*100%;
          padding-bottom:calc($gg9WrapFish5H/$gg9WrapFish5W)*calc($gg9WrapFish5W/$gg9W)*100%;
          bottom: 7%;
          right: 10%;
          animation-delay:-2s;
        }
        &_fish{
          &-1, &-6, &-10{top:0}
          &-1, &-5, &-11{left:0}
          &-2, &-6, &-10{right:0}
          &-5, &-11{bottom:0}
          &-1{
            width:calc($gg9Fish1W/$gg9WrapFish1W)*100%;
            height:calc($gg9Fish1H/$gg9WrapFish1H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish1Shadow.webp");
              animation:fishShadow .8s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish1.webp");
              background-size:calc($gg9Fish1ImgAllW/$gg9Fish1W)*100% 100%;
              animation:fish1Swim 1.4s steps(20) infinite;
              // 20張輪播，1張0.07秒，20 * 0.07 = 1.4
            }
          }
          &-2{
            width:calc($gg9Fish2W/$gg9WrapFish1W)*100%;
            height:calc($gg9Fish2H/$gg9WrapFish1H)*100%;
            bottom: 10.25%;
            &:before{
              background-image:url("@/assets/img/gg9/fish2Shadow.webp");
              animation:fishShadow .5s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish2.webp");
              background-size:calc($gg9Fish2ImgAllW/$gg9Fish2W)*100% 100%;
              animation:fish2Swim .63s steps(9) infinite;
              // 9張輪播，1張0.07秒，9 * 0.07 = .63
            }
          }
          &-5{
            width:calc($gg9Fish5W/$gg9WrapFish3W)*100%;
            height:calc($gg9Fish5H/$gg9WrapFish3H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish5Shadow.webp");
              animation:fishShadow 1s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish5.webp");
              background-size:calc($gg9Fish5ImgAllW/$gg9Fish5W)*100% 100%;
              animation:fish5Swim 1.4s steps(20) infinite;
              // 20張輪播，1張0.07秒，20 * 0.07 = 1.4
            }
          }
          &-6{
            width:calc($gg9Fish6W/$gg9WrapFish3W)*100%;
            height:calc($gg9Fish6H/$gg9WrapFish3H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish6_13Shadow.webp");
              animation:fishShadow .6s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish6_13.webp");
              background-size:calc($gg9Fish6_13ImgAllW/$gg9Fish13W)*100% 100%;
              animation:fish6_13Swim 1.12s steps(16) infinite;
              //16張輪播，1張0.07秒，16 * 0.07 = 1.12
            }
          }
          &-10{
            width:calc($gg9Fish10W/$gg9WrapFish5W)*100%;
            height:calc($gg9Fish10H/$gg9WrapFish5H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish10Shadow.webp");
              animation:fishShadow 1s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish10.webp");
              background-size:calc($gg9Fish10ImgAllW/$gg9Fish10W)*100% 100%;
              animation:fish10Swim 1.05s steps(15) infinite;
              // 15張輪播，1張0.07秒，15 * 0.07 = 1.05
            }
          }
          &-11{
            width:calc($gg9Fish11W/$gg9WrapFish5W)*100%;
            height:calc($gg9Fish11H/$gg9WrapFish5H)*100%;
            &:before{
              background-image:url("@/assets/img/gg9/fish11Shadow.webp");
              animation:fishShadow .6s infinite alternate both;
            }
            &:after{
              background-image:url("@/assets/img/gg9/fish11.webp");
              background-size:calc($gg9Fish11ImgAllW/$gg9Fish11W)*100% 100%;
              animation:fish11Swim .98s steps(14) infinite;
              // 14張輪播，1張0.07秒，14 * 0.07 = .98
            }
          }
        }
      }
      &__fish{
        &-12{
          width:calc($gg9Fish12W/$gg9W)*100%;
          height:calc($gg9Fish12H/$gg9H)*100%;
          bottom:10.5%;
          right:31.5%;
        }
        &-13{
          width:calc($gg9Fish13W/$gg9W)*100%;
          height:calc($gg9Fish13H/$gg9H)*100%;
          bottom: 12%;
          left: 35.5%;
          animation-name:fish13Run;
        }
        &-14{
          width:calc($gg9Fish14W/$gg9W)*100%;
          height:calc($gg9Fish14H/$gg9H)*100%;
          left:11.85%;
          bottom:9.8%;
          animation-name:fish14Run;
        }
        &-15{
          width:calc($gg9Fish15W/$gg9W)*100%;
          height:calc($gg9Fish15AllH/$gg9H)*100%;
          top:18%;//15%
          left:13.5%;//18%
          animation-name:fish15Run;
        }
        &-16{
          width:calc($gg9Fish16W/$gg9W)*100%;
          height:calc($gg9Fish16AllH/$gg9H)*100%;
          top:35.5%;//40%
          right:25%;//23%
          animation-name:fish16Run;
        }
      }
      &_gun{
        width:calc($gg9GunW/$gg9W)*100%;
        height:calc($gg9GunH/$gg9H)*100%;
      }
    }
    &_game{
      background-image:url("@/assets/img/gg9/fishGameBg.webp");
      background-size:cover;
      padding-bottom:calc($gg9GameH/$gg9W)*100%;
      &_wrap{
        display:flex;
        perspective:150vw;
      }
      &__fish{
        height:0;
        position: absolute;
        background-size: cover;
        transform-style:preserve-3d;
        &-1{
          width:calc($gg9Fish18W/$gg9W)*100%;
          background-image:url("@/assets/img/gg9/fish18.webp");
          background-position-x:0;
          background-size:calc($gg9Fish18ImgAllW/$gg9Fish18W)*100% 100%;
          padding-bottom:calc($gg9Fish18H/$gg9Fish18W)*calc($gg9Fish18W/$gg9W)*100%;
          opacity:0;
          top: 5.5%;
          left: 3.5%;
          transition:opacity .4s;
          &:hover{
            opacity:1;
            animation:fishOtherRun 10s cubic-bezier(.5,-0.5,.5,1.5) infinite both,
                      fish18Swim 1.82s steps(21) infinite;
            // 21張輪播，1張0.07秒，21 * 0.07 = 1.47
          }
        }
        &-2{
          width:32%;
          height:80%;
          overflow: hidden;
          right:-7.65%;
          bottom:0;
          z-index:1;
          transform:skew(-31.65deg);
          &:hover:after{
            opacity:1;
            animation:fish19Run 5s linear infinite alternate both,
                      fish19Swim 1.82s steps(26) infinite;
            // 26張輪播，1張0.07秒，26 * 0.07 = 1.82
          }
          &:after{
            content:"";
            width:calc($gg9Fish19W/$gg9W)*100vw;
            height:calc($gg9Fish19H/$gg9W)*100vw;
            background-image:url("@/assets/img/gg9/fish19.png");
            background-size:calc($gg9Fish19ImgAllW/$gg9Fish19W)*100% 100%;
            opacity:0;
            position:absolute;
            top:2%;
            right:30%;
            transform:skew(31.65deg) translate3d(-10%,0,0);//25%
            transition:opacity .4s;
          }
        }
      }
      &__box{
        height: auto;
        background-color:rgba(#fff,.75);
        margin: 15px 22.5% 15px 36.5%;
        background-image:none;
        &_wrap{
          background-color:transparent;
          padding: 0;
        }
        &__title{
          font-weight: bold;
          font-size:size_pxToVw(52,$gg9W);
        }
        &__txt{font-size:14px}
        &:after, &__fish{
          position: absolute;
          transform-style:preserve-3d;
        }
        &:after{
          width:calc($gg9GameFish1W/$gg9W)*100vw;
          padding-bottom:calc($gg9GameFish1H/$gg9GameFish1W)*calc($gg9GameFish1W/$gg9W)*100vw;
          background-size:calc($gg9Fish17ImgAllW/$gg9Fish17W)*100% 100%;
          left:-25%;
          bottom:5%;
          .active &{animation-name:fishOtherRun, fish17Swim}
        }
        &__fish{
          width:calc($gg9GameFish2W/$gg9W)*100vw;
          padding-bottom:calc($gg9GameFish2H/$gg9GameFish2W)*calc($gg9GameFish2W/$gg9W)*100vw;
          top:0;
          right:-35%;
          .active &{animation-name:fishOtherRun}
        }
      }
    }
  }
}
@media screen and (min-width: 1024px){
  .gg9_game__box__txt{font-size:16px;}
}
</style>