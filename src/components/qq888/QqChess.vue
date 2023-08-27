<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n();
</script>

<template>
<img class="q8Chess_moveBg q8Unit_moveBg" src="@/assets/img/qq888/chessMoveBg.png">
<div class="q8Unit_wrap">
  <figure class="q8Chess__imgBox q8Unit__imgBox">
    <div class="q8Unit__imgBox_img q8Unit__imgBox_divBg q8Chess__imgBox_stage"/>
    <img class="q8Unit__imgBox_img q8Chess__imgBox_girl" src="@/assets/img/qq888/chessGirl.png" alt="q8Chess girl">
    <img class="q8Unit__imgBox_img q8Chess__imgBox_cow" src="@/assets/img/qq888/chessCow.png" alt="q8Chess cow">
    <img class="q8Unit__imgBox_img q8Chess__imgBox_cardMan" src="@/assets/img/qq888/chessCardMan.png" alt="q8Chess card man">
    <img class="q8Unit__imgBox_img q8Chess__imgBox_prime" src="@/assets/img/qq888/chessPrime.png" alt="q8Chess prime">
  </figure>
  <section class="q8Chess__contentBox q8Unit__contentBox">
    <h2 class="q8Unit__contentBox_title1">
      <em>{{t('chess_01')}}</em>
    </h2>
    <h3 class="q8Unit__contentBox_title2">
      <em>{{t('chess_02')}}</em>
    </h3>
    <p class="q8Unit__contentBox_text">{{t('chess_03')}}</p>
    <p class="q8Unit__contentBox_text">{{t('chess_04')}}</p>
    <ul class="q8Unit__contentBox_list">
      <li class="q8Unit__contentBox__item">
        <span>{{t('chess_05')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('chess_06')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('chess_07')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('chess_08')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('chess_09')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('chess_10')}}</span>
      </li>
      <li class="q8Unit__contentBox__item">
        <span>{{t('chess_11')}}</span>
        <span class="q8Unit__contentBox__item_text">{{t('chess_12')}}</span>
      </li>
    </ul>
    <div class="q8Unit__contentBox_wrap">
      <a href="javascript:;" class="q8Unit__contentBox__btn">{{t('chess_13')}}</a>
    </div>
  </section>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/qq888Variables.scss";
$q8ChessW:641;
$q8ChessH:638;
.q8Chess{
  &_moveBg{margin-top:29.2%;}
  &__imgBox{
    padding-bottom:calc($q8ChessH/$q8ChessW)*100%;
    &_stage{
      width:calc(592/$q8ChessW)*100%;
      background-image: url("@/assets/img/qq888/chessImgBg.png");
      padding-bottom:calc(592/$q8ChessW)*100%;
      top:calc(26/$q8ChessH)*100%;
      left:calc(43/$q8ChessW)*100%;
    }
    &_girl{
      width:calc(514/$q8ChessW)*100%;
      top:0;
      left:calc(44/$q8ChessW)*100%;
    }
    &_cow{
      width:calc(211/$q8ChessW)*100%;
      top:calc(259/$q8ChessH)*100%;
      left:calc(381/$q8ChessW)*100%;
    }
    &_cardMan{
      width:calc(252/$q8ChessW)*100%;
      top:calc(275/$q8ChessH)*100%;
      left:calc(11/$q8ChessW)*100%;
    }
    &_prime{
      width:100%;
      top:calc(49/$q8ChessH)*100%;
      left:0;
    }
  }
  &-active .q8Chess__imgBox{
    &_girl{animation:rightLeftMove 12s -2s infinite alternate both;}
    &_cow{animation:leftPigMove 10s 1.6s infinite alternate both;}
    &_cardMan{animation:rightPigMove 8s infinite both;}
    &_prime{animation:rightSmallMove 7s infinite;}
  }
}
@media screen and (min-width:640px){
  .q8Chess__imgBox{padding-bottom:calc($q8ChessH/$q8ChessW)*45%;}
}
@media screen and (min-width:1280px){
  div.q8Chess__imgBox_stage{background-size:499px 499px;}
  .q8Chess__imgBox_stage{
    background-position:calc(50% + 344px) calc(50% + 35px);
    top:-80%;
  }
}
@media screen and (min-width:1600px){
  div.q8Chess__imgBox_stage{background-size:610px 610px;}
  .q8Chess{
    &__imgBox{
      padding-bottom:calc($q8ChessH/$q8ChessW)*55%;
      &_stage{background-position:calc(50% + 288px) calc(50% + 35px);}
    }
    &-active .q8Chess__imgBox{
      &_girl{animation-name:rightLeftMove-desk;}
      &_cow{animation-name:leftPigMove-desk;}
      &_cardMan{animation-name:rightPigMove-desk;}
      &_prime{animation-name:rightSmallMove-desk;}
    }
  }
}
</style>