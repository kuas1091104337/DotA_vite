<script setup>
import yeekeeMp3 from '@/assets/img/lotteryAT/yeekee/yeekee.mp3';
import { useMinNumDigit } from '@/composables';
import dayjs from 'dayjs';
let timer = null;
const {numTimes, numTimesAdd} = useMinNumDigit(1,3),
      yeekeeMusic = ref(null),
      yeekee = reactive({
        nowData:'', glassBall:[...Array(10)], isReady:false, isLottery:false, isResult:false,
        numBall:[{color:'blue',num:''}, {color:'yellow',num:''}, {color:'red',num:''}, {color:'yellow',num:''}, {color:'blue',num:''}]
      }),
      resetLottery = () => {
        yeekee.isResult = false;
        timer = setTimeout(() => readyLottery(),2000);
      }, 
      readyLottery = () => {
        yeekee.isResult = false;
        yeekee.isReady = true;
        timer = setTimeout(() => toLottery(),4000);
      },
      toLottery = () => {
        yeekee.numBall.forEach((val,i) => yeekee.numBall[i].num = '');
        yeekee.isReady = false;
        yeekee.isLottery = true;
        yeekee.numBall.forEach((val,i) => {
          setTimeout(() => {
            const yeekeeNum = Math.round(Math.random() * 9).toString();
            yeekee.numBall[i].num = yeekeeNum;
            if(i === yeekee.numBall.length - 1) timer = setTimeout(() => resultNum(),4000);
          },i*1000);
        });
      },
      resultNum = () => {
        numTimesAdd();
        yeekee.isLottery = false;
        yeekee.isResult = true;
        timer = setTimeout(() => resetLottery(),3000);
      },
      audioPlay = () => yeekeeMusic.value.play();
onMounted(() => {
  yeekee.nowData = dayjs().format('YYYYMMDD')
  console.log(yeekeeMusic.value);
  resetLottery();
  // audioPlay();
  // nextTick(() => { yeekeeMusic.value.play() });
  // setTimeout(() => { yeekeeMusic.value.play() },5000);
});
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
<!-- <source src="@/assets/img/lotteryAT/yeekee/yeekee.mp3"/> autoPlay -->
<audio
  ref="yeekeeMusic"
  :src="yeekeeMp3"
  muted="true"
  autoPlay
/>
<!-- @canplay="getDuration" @play="play" -->
<!-- <audio ref="yeekeeMusic" loop autoPlay> <source :src="yeekeeMp3"/> </audio> -->
<div :class="['yeekee',{'yeekee-ready':yeekee.isReady},{'yeekee-lottery':yeekee.isLottery},{'yeekee-result':yeekee.isResult}]">
  <div class="yeekee_wrap">
    <div class="yeekee__table">
      <ul class="yeekee__table_wrap">
        <li
          v-for="(item, idx) in yeekee.numBall" :key="idx"
          class="yeekee__table__item"
        >
          <span :class="['yeekee__table__item_ball yeekee__table__item_ball-'+item.color, item.num ? `yeekee__table__item_ball-num${item.num}` : '']"/>
        </li>
      </ul>
    </div>
    <div class="yeekee__glass">
      <ul class="yeekee__glass_wrap">
        <li 
          v-for="(item, idx) in yeekee.numBall" :key="idx"
          :class="['yeekee__glass__box yeekee__glass__box-'+item.color, item.num ? `yeekee__glass__box-num${item.num}` : '']"
        >
          <span
            v-for="(item, idx) in yeekee.glassBall" :key="idx"
            :class="['yeekee__glass__box_ball yeekee__glass__box_ball-']+idx"
          />
        </li>
      </ul>
    </div>
    <div class="yeekee__title">
      <p class="yeekee__title_txt">
        <span class="yeekee__title__num">{{yeekee.nowData}}{{numTimes}}</span>
      </p>
    </div>
    <span class="yeekee__girl"/>
  </div>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/yeekeeVariables.scss";
.yeekee{
  font-family: Tahoma, Verdana, Helvetica, 'Microsoft JhengHei', 'PingFangTC', sans-serif;
  max-width:$yeekeeGameW + px;
  min-width:280px;
  height:0;
  background-image:url("@/assets/img/lotteryAT/yeekee/yeekeeBg.jpg");
  background-size:cover;
  padding-bottom:calc($yeekeeGameH/$yeekeeGameW)*100%;
  overflow:hidden;
  margin:0 auto;
  perspective:200vw;
  animation:ATshow .4s;
  &:before, &:after, &_wrap:after{animation-play-state: paused}
  &:before, &:after {
    content:"";
    height: 100%;
    position: absolute;
  }
  &:before{
    width: 100%;
    background-image: url("@/assets/img/lotteryAT/yeekee/yeekeeDeco.png");
    background-size: 200% 100%;
    top: -3%;
    left: 0;
    animation:yeekeeDecoShake 20s linear infinite alternate;
  }
  &:after{
    width:calc(1250/$yeekeeGameW)*100%;
    background-image: url("@/assets/img/lotteryAT/yeekee/yeekeeDecoFront.png");
    background-size:cover;
    top: 0;
    left: calc((1250 - $yeekeeGameW)/$yeekeeGameW)*-50%;
    animation:yeekeeDecoShake 10s linear infinite alternate-reverse;
  }
  &_wrap{
    @extend %wh100pPosaT0L0;
    padding-top:calc(225/$yeekeeGameH)*calc($yeekeeGameH/$yeekeeGameW)*100%;
    &:after{
      content:"";
      background-image: url("@/assets/img/lotteryAT/yeekee/yeekeeDeco.png");
      background-position: 100% 0;
      background-size: 200% 100%;
      @extend %wh100pPosaT0L0;
      animation:yeekeeDecoShake 10s linear infinite alternate;
    }
  }
  &__table_wrap, &__glass_wrap{@extend %ulReset;}
  &__table__item, &__glass__box{
    &_ball:after{
      content:"";
      color: #333;
      @extend %disFlexJustifyAlignCenter;
      background-color:#fffde6;
      border-radius: 50%;
      position: absolute;
    }
  }
  &__table{
    width:calc($yeekeeTableW/$yeekeeGameW)*100%;
    height:0;
    background-image:url("@/assets/img/lotteryAT/yeekee/yeekeeTableGlassBack.png");
    background-size:calc(($yeekeeTableW + $yeekeeGlassW)/$yeekeeTableW)*100% calc($yeekeeGlassH/$yeekeeTableH)*100%;
    padding-bottom:calc($yeekeeTableH/$yeekeeTableW)*calc($yeekeeTableW/$yeekeeGameW)*100%;
    position:absolute;
    left:50%;
    bottom:0;
    transform: translate(-50%);
    &_wrap{
      width:100%;
      display:flex;
      justify-content:center;
      position:absolute;
      top:calc(32/$yeekeeTableH)*100%;
      left:0;
    }
    &__item, &__item:before{
      background-image:url("@/assets/img/lotteryAT/yeekee/yeekeeNumBox.png");
      background-size:200% 100%;
    }
    &__item{
      width:calc($yeekeeNumWH/$yeekeeTableW)*100%;
      height: 0;
      padding-bottom:calc($yeekeeNumWH/$yeekeeTableW)*100%;
      position: relative;
      + .yeekee__table__item{margin-left:.5%;}
      &:before, &:after{
        content:"";
        @extend %wh100pPosaT0L0;
        opacity: 0;
        transition: opacity .4s;
      }
      &:before{background-position: 100% 0}
      &:after{
        background-size:3900% 100%; // background-position: 100/38+% 0;
        background-image:url("@/assets/img/lotteryAT/yeekee/yeekeeNumBoxBright.png");
        background-position:100% 0;
      }
      &_ball{
        width:calc($yeekeeTableBallWH/$yeekeeNumWH)*100%;
        height: 0;
        background-image:url("@/assets/img/lotteryAT/yeekee/yeekeePigBall.png");
        background-size:calc(($yeekeeTableBallWH*3 + 20)/$yeekeeTableBallWH)*100% 100%;
        border-radius: 50%;
        box-shadow:0 0 0 0 rgba(#000,.5);
        opacity:0;
        padding-bottom:calc($yeekeeTableBallWH/$yeekeeNumWH)*100%;
        position:absolute;
        top:calc(($yeekeeNumWH - $yeekeeTableBallWH)/2 / $yeekeeNumWH)*100%;
        left:calc(($yeekeeNumWH - $yeekeeTableBallWH)/2 / $yeekeeNumWH)*100%;
        transform:rotate3d(0,0,1,180deg) scale3d(.5,.5,1);
        transition:opacity 0.4s, box-shadow 0.4s, transform 0.4s cubic-bezier(.5,-0.5,.5,1.5);
        // &-blue{}
        &-yellow{background-position:100% 0;}
        &-red{background-position:50% 0;}
        @for $i from 0 through 9 {
          &-num#{$i}:after{content:'#{$i}'}
        }
        &:after{
          font-size:size_pxToVw(38,$yeekeeGameW);
          font-weight:bold;
          width: 48%;
          height: 48%;
          top: 26%;
          left: 26%;
        }
      }
    }
  }  
  &__glass{
    width:calc($yeekeeGlassW/$yeekeeGameW)*100%;
    height:0;
    background-image:url("@/assets/img/lotteryAT/yeekee/yeekeeTableGlassBack.png");
    background-size:calc(($yeekeeTableW + $yeekeeGlassW)/$yeekeeGlassW)*100% 100%;
    background-position:100% 0;
    padding-bottom:calc($yeekeeGlassH/$yeekeeGlassW)*calc($yeekeeGlassW/$yeekeeGameW)*100%;
    margin:0 auto;
    position:relative;
    &:after {
      content:"";
      background-image:url("@/assets/img/lotteryAT/yeekee/yeekeeGirlGlassFront.png");
      background-size:calc(($yeekeeGirlW + $yeekeeGlassW)/$yeekeeGlassW)*100% calc($yeekeeGirlH/$yeekeeGlassH)*100%;
      background-position: 100% 100%;
      @extend %wh100pPosaT0L0;
    }
    &_wrap{
      width:100%;
      height:calc(213/$yeekeeGlassH)*100%;
      display:flex;
      justify-content:center;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    &__box{
      width:calc($yeekeeGlassBoxW/$yeekeeGlassW)*100%;
      position:relative;
      &:nth-of-type(1){margin-right:6.2%}
      &:nth-of-type(5){margin-left:5.9%}
      &-blue > .yeekee__glass__box_ball{
        background-position:0 0;
        &-0{transform:translate3d(-35%,272%,0)}
        &-1{transform:translate3d(-97%,209%,0) rotate3d(0,0,1,-10deg)}
        &-2{transform:translate3d(-30%,144%,0) rotate3d(0,0,1,-20deg)}
        &-3{transform:translate3d(109%,203%,0) rotate3d(0,0,1,-25deg)}
        &-4{transform:translate3d(62%,150%,0) rotate3d(0,0,1,15deg)}
        &-5{transform:translate3d(-41%,213%,0) rotate3d(0,0,1,10deg)}
        &-6{transform:translate3d(31%,212%,0) rotate3d(0,0,1,-35deg)}
        &-7{transform:translate3d(131%,265%,0) rotate3d(0,0,1,-30deg)}
        &-8{transform:translate3d(56%,272%,0) rotate3d(0,0,1,25deg)}
        &-9{transform:translate3d(-100%,268%,0) rotate3d(0,0,1,-35deg)}
      }
      &-yellow > .yeekee__glass__box_ball{
        background-position:100% 0;
        &-0{transform:translate3d(125%,268%,0)}
        &-1{transform:translate3d(112%,212%,0) rotate3d(0,0,1,15deg)}
        &-2{transform:translate3d(-112%,190%,0) rotate3d(0,0,1,15deg)}
        &-3{transform:translate3d(50%,164%,0) rotate3d(0,0,1,-30deg)}
        &-4{transform:translate3d(-26%,268%,0) rotate3d(0,0,1,-15deg)}
        &-5{transform:translate3d(-72%,238%,0) rotate3d(0,0,1,-30deg)}
        &-6{transform:translate3d(-120%,272%,0) rotate3d(0,0,1,10deg)}
        &-7{transform:translate3d(-27%,172%,0) rotate3d(0,0,1,10deg)}
        &-8{transform:translate3d(16%,218%,0) rotate3d(0,0,1,-20deg)}
        &-9{transform:translate3d(54%,272%,0) rotate3d(0,0,1,25deg)}
      }
      &-red{
        margin:0 3.4%;
        > .yeekee__glass__box_ball{
          background-position: 50% 0;
          &-0{transform:translate3d(-72%,164%,0)}
          &-1{transform:translate3d(-28%,202%,0)}
          &-2{transform:translate3d(-136%,268%,0) rotate3d(0,0,1,-10deg)}
          &-3{transform:translate3d(100%,200%,0) rotate3d(0,0,1,-30deg)}
          &-4{transform:translate3d(-104%,218%,0) rotate3d(0,0,1,30deg)}
          &-5{transform:translate3d(36%,216%,0) rotate3d(0,0,1,35deg)}
          &-6{transform:translate3d(-54%,262%,0) rotate3d(0,0,1,-5deg)}
          &-7{transform:translate3d(134%,258%,0) rotate3d(0,0,1,15deg)}
          &-8{transform:translate3d(74%,264%,0) rotate3d(0,0,1,-25deg)}
          &-9{transform:translate3d(12%,278%,0) rotate3d(0,0,1,25deg)}
        }
      }
      &_ball{
        width:calc($yeekeeGlassBallWH/$yeekeeGlassBoxW)*100%;
        height:0;
        background-image:url("@/assets/img/lotteryAT/yeekee/yeekeeBall.png");
        background-size:calc(($yeekeeGlassBallWH * 3 + 20)/$yeekeeGlassBallWH)*100% 100%;
        border-radius:50%;
        box-shadow:0 1px 1px rgba(#000,.3), 
                   0 -1px 1px rgba(#000,.3) inset;
        padding-bottom:calc($yeekeeGlassBallWH/$yeekeeGlassBoxW)*100%;
        position:absolute;
        top:calc(($yeekeeGlassBoxH - $yeekeeGlassBallWH)/2 / $yeekeeGlassBoxH) * 100%;
        left:calc(($yeekeeGlassBoxW - $yeekeeGlassBallWH)/2 / $yeekeeGlassBoxW) * 100%;
        transition: box-shadow 0.4s;
        // 開獎球的移動範圍 top:2% ~ 84%; left:1.5% ~ 73%;
        &:after{
          font-size:12px;
          width:140%;
          height:140%;
          top:-20%;
          left:-20%;
          transform:scale3d(.36,.36,1);
        }
        @for $i from 0 through 9 {
          &-#{$i}:after{content:'#{$i}'}
        }
      }
    }
  }
  &__title{
    width: calc($yeekeeTitleW/$yeekeeGameW)*100%;
    height: 0;
    background-image: url("@/assets/img/lotteryAT/yeekee/yeekeeTitle.png");
    background-size: 300% 100%;
    background-position: 0 0;
    padding-bottom:calc($yeekeeTitleH/$yeekeeTitleW)*calc($yeekeeTitleW/$yeekeeGameW)*100%;
    position: absolute;
    top: 0;
    left:calc(($yeekeeGameW - $yeekeeTitleW)/$yeekeeGameW)*50%;
    &:before, &:after{
      content:"";
      @extend %wh100pPosaT0L0;
      background-image: url("@/assets/img/lotteryAT/yeekee/yeekeeTitle.png");
      background-size: 300% 100%;
    }
    &:before{
      background-position: 50% 0%;
      opacity: 0;
    }
    &:after{background-position: 100% 0}
    &_txt{
      color: #fff;
      font-size: size_pxToVw(30,$yeekeeGameW);
      text-align: center;
      text-shadow:0 0 size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7), 
                  0 size_pxToVw(1,$yeekeeGameW) size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7), 
                  size_pxToVw(1,$yeekeeGameW) 0 size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7),
                  0 size_pxToVw(-1,$yeekeeGameW) size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7), 
                  size_pxToVw(-1,$yeekeeGameW) 0 size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7), 
                  size_pxToVw(1,$yeekeeGameW) size_pxToVw(1,$yeekeeGameW) size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7),
                  size_pxToVw(-1,$yeekeeGameW) size_pxToVw(1,$yeekeeGameW) size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7), 
                  size_pxToVw(1,$yeekeeGameW) size_pxToVw(-1,$yeekeeGameW) size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7), 
                  size_pxToVw(-1,$yeekeeGameW) size_pxToVw(-1,$yeekeeGameW) size_pxToVw(2,$yeekeeGameW) rgba(#ec80ff,.7),
                  0 0 size_pxToVw(12,$yeekeeGameW) #fff;
      width: 41.5%;
      height: 19%;
      display: flex;
      margin:0;
      position: absolute;
      left: 28.5%;
      bottom: 4%;
    }
    &__num{margin:auto}
  }
  &__girl{
    width: calc($yeekeeGirlW/$yeekeeGameW)*100%;
    height: 0;
    background-image: url("@/assets/img/lotteryAT/yeekee/yeekeeGirlGlassFront.png");
    background-size: calc(($yeekeeGirlW + $yeekeeGlassW)/$yeekeeGirlW)*100% 100%;
    padding-bottom: calc($yeekeeGirlH/$yeekeeGirlW)*calc($yeekeeGirlW/$yeekeeGameW)*100%;
    position: absolute;
    left: -8.6%;
    bottom: 0;
    z-index: 1;
    transition: transform 0.7s cubic-bezier(.5,-0.5,.5,1.5);
  }
  &-ready, &-lottery, &-result{
    &:before, &:after, > .YeeKeeVedio_wrap:after{animation-play-state:running}
    .yeekee__table__item{
      &:before, &:after{opacity:1}
    }
  }
  &-ready, &-lottery{
    .yeekee__glass__box{
      &-blue > .yeekee__glass__box_ball{ // $yeekeeGlassBallsMoveTime 移動完1圈,號碼白點轉8圈 
        animation:yeekeeBlueBallsMove $yeekeeGlassBallsMoveTime cubic-bezier(.2,-0.2,.75,1.25) infinite;
      }
      &-yellow > .yeekee__glass__box_ball{ // $yeekeeGlassBallsMoveTime 移動完1圈,號碼白點轉8圈 
        animation:yeekeeYellowBallsMove $yeekeeGlassBallsMoveTime cubic-bezier(.2,-0.2,.75,1.25) infinite;
      }
      &-red > .yeekee__glass__box_ball{ // $yeekeeGlassBallsMoveTime 移動完1圈,號碼白點轉8圈 
        animation:yeekeeRedBallsMove $yeekeeGlassBallsMoveTime cubic-bezier(.2,-0.2,.75,1.25) infinite;
        //因為有10顆在循環所以除以10做延遲(1/-10)，一開始乘0.8 ~ 1.2是為了做球移動的隨機感，這樣移動起來才不會看起來很制式
        &-1{animation-delay:calc(0.8 * 1 * $yeekeeGlassBallsMoveTime / -10)}
        &-2{animation-delay:calc(0.9 * 2 * $yeekeeGlassBallsMoveTime / -10)}
        &-3{animation-delay:calc(1 * 3 * $yeekeeGlassBallsMoveTime / -10)}
        &-4{animation-delay:calc(1.1 * 4 * $yeekeeGlassBallsMoveTime / -10)}
        &-5{animation-delay:calc(1.2 * 5 * $yeekeeGlassBallsMoveTime / -10)}
        &-6{animation-delay:calc(1.1 * 6 * $yeekeeGlassBallsMoveTime / -10)}
        &-7{animation-delay:calc(1 * 7 * $yeekeeGlassBallsMoveTime / -10)}
        &-8{animation-delay:calc(0.9 * 8 * $yeekeeGlassBallsMoveTime / -10)}
        &-9{animation-delay:calc(0.8 * 9 * $yeekeeGlassBallsMoveTime / -10)}
      }
      &:nth-of-type(1), &:nth-of-type(4) {
        > .yeekee__glass__box_ball{
          //因為有10顆在循環所以除以10做延遲(1/-10)，一開始乘0.8 ~ 1.2是為了做球移動的隨機感，這樣移動起來才不會看起來很制式
          &-1{animation-delay:calc(0.8 * 1 * $yeekeeGlassBallsMoveTime / -10)}
          &-2{animation-delay:calc(0.9 * 2 * $yeekeeGlassBallsMoveTime / -10)}
          &-3{animation-delay:calc(1 * 3 * $yeekeeGlassBallsMoveTime / -10)}
          &-4{animation-delay:calc(1.1 * 4 * $yeekeeGlassBallsMoveTime / -10)}
          &-5{animation-delay:calc(1.2 * 5 * $yeekeeGlassBallsMoveTime / -10)}
          &-6{animation-delay:calc(1.1 * 6 * $yeekeeGlassBallsMoveTime / -10)}
          &-7{animation-delay:calc(1 * 7 * $yeekeeGlassBallsMoveTime / -10)}
          &-8{animation-delay:calc(0.9 * 8 * $yeekeeGlassBallsMoveTime / -10)}
          &-9{animation-delay:calc(0.8 * 9 * $yeekeeGlassBallsMoveTime / -10)}
        }
      }
      &:nth-of-type(2), &:nth-of-type(5) {
        > .yeekee__glass__box_ball{
          //因為有10顆在循環所以除以10做延遲(1/-10)，一開始乘0.8 ~ 1.2是為了做球移動的隨機感，這樣移動起來才不會看起來很制式
          &-1{animation-delay:calc(1 * 1 * $yeekeeGlassBallsMoveTime / -10)}
          &-2{animation-delay:calc(1.1 * 2 * $yeekeeGlassBallsMoveTime / -10)}
          &-3{animation-delay:calc(1.2 * 3 * $yeekeeGlassBallsMoveTime / -10)}
          &-4{animation-delay:calc(0.8 * 4 * $yeekeeGlassBallsMoveTime / -10)}
          &-5{animation-delay:calc(0.9 * 5 * $yeekeeGlassBallsMoveTime / -10)}
          &-6{animation-delay:calc(1 * 6 * $yeekeeGlassBallsMoveTime / -10)}
          &-7{animation-delay:calc(1.1 * 7 * $yeekeeGlassBallsMoveTime / -10)}
          &-8{animation-delay:calc(1.2 * 8 * $yeekeeGlassBallsMoveTime / -10)}
          &-9{animation-delay:calc(0.8 * 9 * $yeekeeGlassBallsMoveTime / -10)}
        }
      }
      &_ball{
        box-shadow: 0 0 1px rgba(#000,.35) inset;
        &_1, &_4, &_7{animation-direction: reverse}
        &_5, &_8{animation-direction: alternate}
        &_2, &_9{animation-direction: alternate-reverse}
        &:after{animation:yeekeeGlassBallDotsMove-Mob calc($yeekeeGlassBallsMoveTime/4) infinite}
      }
    }
  }
  &-lottery, &-result{
    .yeekee{
      &__table__item{
        &:before, &:after{animation:yeekeeShiny 1s steps(1) infinite}
        &_ball-num{
          &0, &1, &2, &3, &4, &5, &6, &7, &8, &9{
            opacity: 1;
            box-shadow: 0 size_pxToVw(4,$yeekeeGameW) size_pxToVw(7,$yeekeeGameW) size_pxToVw(1,$yeekeeGameW) rgba(#000,.5), 
                        0 size_pxToVw(-1,$yeekeeGameW) size_pxToVw(3,$yeekeeGameW) size_pxToVw(1,$yeekeeGameW) rgba(#000,.6) inset;
            transform:rotate3d(0,0,0,180deg) scale3d(1,1,1);
          }
        }
      }
      &__glass__box-num{
        &0 > .yeekee__glass__box_ball-0, &1 > .yeekee__glass__box_ball-1,
        &2 > .yeekee__glass__box_ball-2, &3 > .yeekee__glass__box_ball-3,
        &4 > .yeekee__glass__box_ball-4, &5 > .yeekee__glass__box_ball-5,
        &6 > .yeekee__glass__box_ball-6, &7 > .yeekee__glass__box_ball-7,
        &8 > .yeekee__glass__box_ball-8, &9 > .yeekee__glass__box_ball-9{
          box-shadow:0 0 0 rgba(#000,.5);
          transform:translate3d(0,0,0);
          &:after{animation-name:none}
        }
      }
      &__title:before{animation:yeekeeShiny 1s steps(1) infinite}
      &__girl{
        transform:translate(-100%);
        transition:transform 0.3s
      }
    }
  }
  &-ready .yeekee{
    &__table__item{
      &:before{animation:yeekeeSlowFlash 4s infinite alternate}
      &:after{
        opacity:1;
        animation:yeekeeTableItemDotsBright 4s steps(39) infinite alternate;
      }
    }
    &__title:before{animation:yeekeeSlowFlash 1s infinite alternate;}
  }
  &-lottery .yeekee__glass__box.yeekee__glass__box-num{
    &0 > .yeekee__glass__box_ball-0, &1 > .yeekee__glass__box_ball-1,
    &2 > .yeekee__glass__box_ball-2, &3 > .yeekee__glass__box_ball-3,
    &4 > .yeekee__glass__box_ball-4, &5 > .yeekee__glass__box_ball-5,
    &6 > .yeekee__glass__box_ball-6, &7 > .yeekee__glass__box_ball-7,
    &8 > .yeekee__glass__box_ball-8, &9 > .yeekee__glass__box_ball-9{
      animation:yeekeeGlassBallLottery $yeekeeGlassBallDropTime both;
    }
    // .yeekee__glass__box{
    //   &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4), &:nth-of-type(5){
    //     &.yeekee__glass__box-num0 ~ 9 > .yeekee__glass__box_ball-0 ~ 9{}
    //   }
    // }
  }
  &-result .yeekee__glass__box{
    &-blue > .yeekee__glass__box_ball{
      &-0{animation:yeekeeBlueBallNum0Result $yeekeeGlassBallDropTime ease-out}
      &-1{animation:yeekeeBlueBallNum1Result ($yeekeeGlassBallDropTime*.3) ease-out}
      &-2{animation:yeekeeBlueBallNum2Result ($yeekeeGlassBallDropTime*.7) ease-out}
      &-3{animation:yeekeeBlueBallNum3Result ($yeekeeGlassBallDropTime*.2) ease-out}
      &-4{animation:yeekeeBlueBallNum4Result ($yeekeeGlassBallDropTime*.5) ease-out}
      &-5{animation:yeekeeBlueBallNum5Result ($yeekeeGlassBallDropTime*.2) ease-out}
      &-6{animation:yeekeeBlueBallNum6Result $yeekeeGlassBallDropTime ease-out}
      &-7{animation:yeekeeBlueBallNum7Result $yeekeeGlassBallDropTime ease-out}
      &-8{animation:yeekeeBlueBallNum8Result ($yeekeeGlassBallDropTime*.8) ease-out}
      &-9{animation:yeekeeBlueBallNum9Result ($yeekeeGlassBallDropTime*.4) ease-out}
    }
    &-yellow > .yeekee__glass__box_ball{
      &-0{animation:yeekeeYellowBallNum0Result ($yeekeeGlassBallDropTime*.3) ease-out}
      &-1{animation:yeekeeYellowBallNum1Result $yeekeeGlassBallDropTime ease-out}
      &-2{animation:yeekeeYellowBallNum2Result $yeekeeGlassBallDropTime ease-out}
      &-3{animation:yeekeeYellowBallNum3Result ($yeekeeGlassBallDropTime*.3) ease-out}
      &-4{animation:yeekeeYellowBallNum4Result ($yeekeeGlassBallDropTime*.5) ease-out}
      &-5{animation:yeekeeYellowBallNum5Result ($yeekeeGlassBallDropTime*.5) ease-out}
      &-6{animation:yeekeeYellowBallNum6Result ($yeekeeGlassBallDropTime*.4) ease-out}
      &-7{animation:yeekeeYellowBallNum7Result ($yeekeeGlassBallDropTime*.5) ease-out}
      &-8{animation:yeekeeYellowBallNum8Result ($yeekeeGlassBallDropTime*.5) ease-out}
      &-9{animation:yeekeeYellowBallNum9Result ($yeekeeGlassBallDropTime*.5) ease-out}
    }
    &-red > .yeekee__glass__box_ball{
      &-0{animation:yeekeeRedBallNum0Result $yeekeeGlassBallDropTime ease-out}
      &-1{animation:yeekeeRedBallNum1Result ($yeekeeGlassBallDropTime*.4) ease-out}
      &-2{animation:yeekeeRedBallNum2Result ($yeekeeGlassBallDropTime*.4) ease-out}
      &-3{animation:yeekeeRedBallNum3Result ($yeekeeGlassBallDropTime*.6) ease-out}
      &-4{animation:yeekeeRedBallNum4Result $yeekeeGlassBallDropTime ease-out}
      &-5{animation:yeekeeRedBallNum5Result ($yeekeeGlassBallDropTime*.2) ease-out}
      &-6{animation:yeekeeRedBallNum6Result ($yeekeeGlassBallDropTime*.6) ease-out}
      &-7{animation:yeekeeRedBallNum7Result ($yeekeeGlassBallDropTime*.8) ease-out}
      &-8{animation:yeekeeRedBallNum8Result ($yeekeeGlassBallDropTime*.3) ease-out}
      &-9{animation:yeekeeRedBallNum9Result ($yeekeeGlassBallDropTime*.4) ease-out}
    }
    &-num0 > .yeekee__glass__box_ball-0, &-num1 > .yeekee__glass__box_ball-1,
    &-num2 > .yeekee__glass__box_ball-2, &-num3 > .yeekee__glass__box_ball-3,
    &-num4 > .yeekee__glass__box_ball-4, &-num5 > .yeekee__glass__box_ball-5,
    &-num6 > .yeekee__glass__box_ball-6, &-num7 > .yeekee__glass__box_ball-7,
    &-num8 > .yeekee__glass__box_ball-8, &-num9 > .yeekee__glass__box_ball-9{
      top:-15%;
      animation-name:none;
    }
  }
}
@media screen and (min-width: 568px) {
  .yeekee{
    &__glass__box_ball{
      box-shadow: 0 1px 2px rgba(#000,.5),
                  0 -1px 2px rgba(#000,.5) inset;
      &:after{
        font-size:size_pxToVw(34,$yeekeeGameW);
        font-weight: bold;
      }
    }
    &-ready, &-lottery{
      .yeekee__glass__box_ball{box-shadow:0 0 2px rgba(#000,.5) inset}
    }
  }
}
@media screen and (min-width: 1000px) {
  .yeekee{
    &__glass__box, &__table__item{
      &_ball:after{font-family:Helvetica, sans-serif}
    }
  }
}
// ===== 桌機版型區 =====
@media screen and (min-width: 1200px) {
  .yeekee{
    padding-bottom:$yeekeeGameH + px;
    perspective:$yeekeeGameW*2px;
    &__table__item_ball:after{font-size:36px}
    &__glass__box_ball:after{
      font-size:12px;
      width:50%;
      height:50%;
      top:25%;
      left:25%;
      transform:scale3d(1,1,1);
    }
    &__title_txt{
      font-size: 30px;
      text-shadow:0 0 2px rgba(#ec80ff,.7),
                  0 1px 2px rgba(#ec80ff,.7),
                  1px 0 2px rgba(#ec80ff,.7),
                  0 -1px 2px rgba(#ec80ff,.7),
                  -1px 0 2px rgba(#ec80ff,.7),
                  1px 1px 2px rgba(#ec80ff,.7),
                  -1px 1px 2px rgba(#ec80ff,.7),
                  1px -1px 2px rgba(#ec80ff,.7),
                  -1px -1px 2px rgba(#ec80ff,.7),
                  0 0 12px #fff;
    }
    &-ready, &-lottery{
      .yeekee__glass__box_ball:after{
        animation:yeekeeGlassBallDotsMove-Desk calc($yeekeeGlassBallsMoveTime/4) infinite
      }
    }
    &-lottery, &-result{
      .yeekee__table__item_ball-num{
        &0, &1, &2, &3, &4, &5, &6, &7, &8, &9{
          box-shadow: 0 4px 7px 1px rgba(#000,.5), 
                      0 -1px 3px 1px rgba(#000,.6) inset;
        }
      }
    }
  }
}
</style>