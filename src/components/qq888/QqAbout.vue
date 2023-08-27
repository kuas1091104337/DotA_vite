<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<img class="q8About_moveBg q8Unit_moveBg" src="@/assets/img/qq888/aboutMoveBg.png">
<div class="q8Unit_wrap">
  <figure class="q8About__imgBox q8Unit__imgBox">
    <img class="q8Unit__imgBox_img q8About__imgBox_backCoin" src="@/assets/img/qq888/aboutBackCoin.png">
    <div class="q8Unit__imgBox_img q8Unit__imgBox_divBg q8About__imgBox_mirror"/>
    <img class="q8Unit__imgBox_img q8About__imgBox_balls" src="@/assets/img/qq888/aboutBalls.png">
    <img class="q8Unit__imgBox_img q8About__imgBox_ship" src="@/assets/img/qq888/aboutShip.png">
    <img class="q8Unit__imgBox_img q8About__imgBox_richGod" src="@/assets/img/qq888/aboutRichGod.png">
    <div class="q8Unit__imgBox_img q8Unit__imgBox_divBg q8About__imgBox_girl"/>
    <img class="q8Unit__imgBox_img q8About__imgBox_cards" src="@/assets/img/qq888/aboutCards.png">
    <img class="q8Unit__imgBox_img q8About__imgBox_frontCoin" src="@/assets/img/qq888/aboutFrontCoin.png">
  </figure>
  <section class="q8About__contentBox q8Unit__contentBox">
    <h2 class="q8Unit__contentBox_title1">
      <em>{{t('head_02')}}</em>
    </h2>
    <h3 class="q8Unit__contentBox_title2">
      <em>{{t('about_01')}}</em>
    </h3>
    <p class="q8Unit__contentBox_text">{{t('about_02')}}</p>
    <p class="q8Unit__contentBox_text">{{t('about_03')}}</p>
    <p class="q8Unit__contentBox_text">
      <span>{{t('about_04')}}</span>
      <strong class="q8About__contentBox__strong">{{t('about_05')}}</strong>
    </p>
    <div class="q8Unit__contentBox_wrap">
      <a href="javascript:;" class="q8Unit__contentBox__btn">{{t('head_07')}}</a>
    </div>
  </section>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
$q8AboutW:671;
$q8AboutH:670;
.q8About{
  background:url("@/assets/img/qq888/aboutBg.jpg") no-repeat center top/300% auto, 
             url("@/assets/img/qq888/aboutBgAfter.jpg") repeat center bottom/300% auto;
  &_moveBg{margin-top:24.4%;}
  &__imgBox{
    padding-bottom:calc($q8AboutH/$q8AboutW)*100%;
    &_backCoin{
      width:100%;
      top:calc(57/$q8AboutH)*100%;
      left:0;
    }
    &_mirror{
      width:calc(650/$q8AboutW)*100%;
      background-image:url("@/assets/img/qq888/aboutMirror.png");
      padding-bottom:calc(650/$q8AboutW)*100%;
      margin:auto;
      top:0;
      left:0;
      right:0;
      bottom:0;
    }
    &_balls{
      width:calc(211/$q8AboutW)*100%;
      top:calc(151/$q8AboutH)*100%;
      left:calc(100/$q8AboutW)*100%;
    }
    &_ship{
      width:calc(240/$q8AboutW)*100%;
      top:calc(256/$q8AboutH)*100%;
      left:calc(61/$q8AboutW)*100%;
    }
    &_richGod{
      width:calc(254/$q8AboutW)*100%;
      top:calc(108/$q8AboutH)*100%;
      left:calc(388/$q8AboutW)*100%;
    }
    &_girl{
      width:calc(305/$q8AboutW)*100%;
      background-image:url("@/assets/img/qq888/aboutGirl.png");
      padding-bottom:calc(455/305*305/$q8AboutW)*100%;
      top:calc(56/$q8AboutH)*100%;
      left:calc(190/$q8AboutW)*100%;
    }
    &_cards{
      width:calc(167/$q8AboutW)*100%;
      top:calc(343/$q8AboutH)*100%;
      left:calc(409/$q8AboutW)*100%;
    }
    &_frontCoin{
      width:calc(366/$q8AboutW)*100%;
      top:calc(51/$q8AboutH)*100%;
      left:calc(136/$q8AboutW)*100%;
    }
  }
  &__contentBox__strong{color:#fff;}
  &-active .q8About__imgBox{
    &_backCoin{animation:leftSmallMove 10s infinite;}
    &_balls{animation:rightPigMove 10s -7s infinite alternate-reverse;}
    &_ship{animation:rightSmallMove 7s infinite;}
    &_richGod{animation:leftPigMove 9s infinite;}
    &_cards{animation:leftSmallMove 8s -2s infinite reverse;}
    &_frontCoin{animation:rightPigMove 8s linear infinite alternate;}
  }
}
@media screen and (min-width:640px){
  .q8About__imgBox{padding-bottom:calc($q8AboutH/$q8AboutW)*45%;}
}
@media screen and (min-width:1280px){
  div.q8About__imgBox{
    &_mirror{background-size:523px 523px;}
    &_girl{background-size:245px 366px;}
  }
  .q8About__imgBox{
    &_mirror{background-position:calc(50% - 330px) calc(50% + 25px);}
    &_girl{
      background-position:calc(50% - 325px) calc(50% - 17px);
      top:-80%;
    }
  }
}
@media screen and (min-width:1600px){
  div.q8About__imgBox{
    &_mirror{background-size:639px 639px;}
    &_girl{background-size:300px 448px;}
  }
  .q8About{
    &__imgBox{
      padding-bottom:calc($q8AboutH/$q8AboutW)*55%;
      &_mirror{background-position:calc(50% - 270px) calc(50% + 25px);}
      &_girl{background-position:calc(50% - 264px) calc(50% - 26px);}
    }
    &-active .q8About__imgBox{
      &_backCoin{animation-name:leftSmallMove-desk;}
      &_balls{animation-name:rightPigMove-desk;}
      &_ship{animation-name:rightSmallMove-desk;}
      &_richGod{animation-name:leftPigMove-desk;}
      &_cards{animation-name:leftSmallMove-desk;}
      &_frontCoin{animation-name:rightPigMove-desk;}
    }
  }
}
</style>