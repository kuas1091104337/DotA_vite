<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<img class="q8Lottery_moveBg q8Unit_moveBg" src="@/assets/img/qq888/lotteryMoveBg.png">
<div class="q8Unit_wrap">
  <figure class="q8Lottery__imgBox q8Unit__imgBox">
    <div class="q8Unit__imgBox_img q8Unit__imgBox_divBg q8Lottery__imgBox_backplane"/>
    <img class="q8Unit__imgBox_img q8Lottery__imgBox_lotterys" src="@/assets/img/qq888/lotteryLotterys.png" alt="q8Lottery lotterys">
    <img class="q8Unit__imgBox_img q8Lottery__imgBox_car" src="@/assets/img/qq888/lotteryCar.png" alt="q8Lottery car">
    <img class="q8Unit__imgBox_img q8Lottery__imgBox_ball" src="@/assets/img/qq888/lotteryBall.png" alt="q8Lottery ball">
  </figure>
  <section class="q8Lottery__contentBox q8Unit__contentBox">
    <h2 class="q8Unit__contentBox_title1">
      <em>{{t('head_04')}}</em>
    </h2>
    <h3 class="q8Unit__contentBox_title2">
      <em>{{t('lottery_01')}}</em>
    </h3>
    <p class="q8Unit__contentBox_text">{{t('lottery_02')}}</p>
    <p class="q8Unit__contentBox_text">{{t('lottery_03')}}</p>
    <ul class="q8Unit__contentBox_list">
      <li class="q8Unit__contentBox__item">
        <span>{{t('lottery_04')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('lottery_05')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('lottery_06')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('lottery_07')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('lottery_08')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('lottery_09')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('lottery_10')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('lottery_11')}}</span>
      </li>
    </ul>
    <div class="q8Unit__contentBox_wrap">
      <a href="javascript:;" class="q8Unit__contentBox__btn">{{t('lottery_12')}}</a>
    </div>
  </section>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
$q8LotteryW:636;
$q8LotteryH:535;
.q8Lottery{
  background: url("@/assets/img/qq888/lotteryBg.jpg") no-repeat center bottom/300% auto,
              url("@/assets/img/qq888/lotteryBgBefore.jpg") repeat center top/300% auto;
  &_moveBg{margin-top:18.6%;}
  &__imgBox{
    padding-bottom:calc($q8LotteryH/$q8LotteryW)*100%;
    &_backplane{
      width:calc(533/$q8LotteryW)*100%;
      background-image:url("@/assets/img/qq888/lotteryImgBg.png");
      padding-bottom:calc(535/533*533/$q8LotteryW)*100%;
      top:0;
      left:0;
    }
    &_lotterys{
      width:calc(517/$q8LotteryW)*100%;
      top:calc(35/$q8LotteryH)*100%;
      left:calc(4/$q8LotteryW)*100%;
    }
    &_car{
      width:calc(594/$q8LotteryW)*100%;
      top:calc(252/$q8LotteryH)*100%;
      left:calc(42/$q8LotteryW)*100%;
    }
    &_ball{
      width:calc(92/$q8LotteryW)*100%;
      top:calc(394/$q8LotteryH)*100%;
      left:calc(60/$q8LotteryW)*100%;
    }
  }
  &-active .q8Lottery__imgBox{
    &_lotterys{animation:leftSmallMove 9s 1s infinite;}
    &_car{animation:rightLeftMove 12s -2s infinite alternate both;}
    &_ball{animation:leftPigMove 8s infinite;}
  }
}
@media screen and (min-width:640px){
  .q8Lottery__imgBox{padding-bottom:calc($q8LotteryH/$q8LotteryW)*45%;}
}
@media screen and (min-width:1280px){
  div.q8Lottery__imgBox_backplane{background-size:453px 454px;}
  .q8Lottery__imgBox_backplane{
    background-position:calc(50% - 374px) calc(50% + 30px);
    top:-80%;
  }
}
@media screen and (min-width:1600px){
  div.q8Lottery__imgBox_backplane{background-size:553px 555px;}
  .q8Lottery{
    &__imgBox{
      padding-bottom:calc($q8LotteryH/$q8LotteryW)*55%;
      &_backplane{background-position:calc(50% - 324px) calc(50% + 30px);}
    }
    &-active .q8Lottery__imgBox{
      &_lotterys{animation-name:leftSmallMove-desk;}
      &_car{animation-name:rightLeftMove-desk;}
      &_ball{animation-name:leftPigMove-desk;}
    }
  }
}
</style>