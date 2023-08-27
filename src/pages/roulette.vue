<script setup>
import axios from 'axios';
import { arrayRandomShuffle } from '@/lib/fisherYatesShuffle.js'
const roulette = reactive({
        className:'normal', drawTimes:16, selectPR:'', lotteryNum:'', ruleText:'',
        toSort:false, isLottery:false, popupShow:false,
        PR:[], prizeName:[], rouletteAward:[], winnerList:[], winnerRecord:[]
      }), 
      popupHideFn = () => roulette.popupShow = false,
      lotteryAT = () => {
        roulette.drawTimes--;
        setTimeout(() => { // 0.8s 後彈出popup
          roulette.popupShow = true;
          roulette.isLottery = false;
        },800);
      },
      rotateRouletteFn = () => {
        if(roulette.isLottery) return false;
        if(roulette.drawTimes < 1){
          alert('開獎次數歸零!');
          return false;
        }
        roulette.lotteryNum = '';
        roulette.isLottery = true;
        setTimeout(() => { // 開獎後假設花1.5s，拿到API開獎號碼
          roulette.lotteryNum = Math.round(Math.random() * (roulette.rouletteAward.length - 1)); // 0 ~ 8
          setTimeout(lotteryAT,1200); // 拿到API開獎號碼後，開獎動畫花1.2s
        },1500);
      };
watch(() => roulette.toSort,(newVal) => {
  roulette.lotteryNum = '';
  const newArr = roulette.PR.filter(val => val.title === roulette.selectPR);
  if(newVal){
    roulette.rouletteAward = newArr[0].rouletteAward;
  }else{
    roulette.rouletteAward = arrayRandomShuffle(newArr[0].rouletteAward);
  }
})
watch(() => roulette.selectPR,(newVal) => {
  roulette.lotteryNum = '';
  const newArr = roulette.PR.filter(val => val.title === newVal);
  roulette.prizeName = newArr[0].rouletteAward.filter(val => val.awards !== '');
  if(roulette.toSort){
    roulette.rouletteAward = newArr[0].rouletteAward;
  }else{
    roulette.rouletteAward = arrayRandomShuffle(newArr[0].rouletteAward);
  }
});
onMounted(() => {
  // Secret delete link // https://designer.mocky.io/manage/delete/80684193-f878-481e-9628-abfc2d9e0a22/kuas1091104337
  axios.get('https://run.mocky.io/v3/80684193-f878-481e-9628-abfc2d9e0a22')
  .then((res) => {
    roulette.PR = res.data.probability;
    roulette.winnerList = res.data.winnerList;
    roulette.winnerRecord = res.data.winnerRecord; 
    roulette.selectPR = roulette.PR[0].title;
    roulette.ruleText = res.data.ruleContent;
    console.log(res.data);
  }).catch((error) => {
    console.log(error.response.data);
  });
});
</script>

<template>
<div :class="['roulette',roulette.className,{'roulette-popupOpen':roulette.popupShow}]">
  <div class="roulette_main">
    <div class="roulette_main_wrap">
      <ul class="roulette_main__nav">
        <li class="roulette_main__nav_item">
          <RouterLink to="/" class="roulette_main__nav__link">
            <span class="roulette_main__nav___icon"><SvgIcon name="icon-dota" color="#fff"/></span>
            <span class="roulette_main__nav___txt">Dot A</span>
          </RouterLink>
        </li> 
        <li class="roulette_main__nav_item">
          <select 
            v-model="roulette.className"
            class="roulette_main__nav__select"
          >
            <option value="normal">普通版</option>
            <option value="newYear">新年版</option>
            <option value="xmas">聖誕節版</option>
          </select>
        </li>
        <li class="roulette_main__nav_item">
          <select 
            v-model="roulette.selectPR"
            class="roulette_main__nav__select"
          >
            <option 
              v-for="item in roulette.PR" 
              :key="item.title"
              :value="item.title"
            >
              {{item.title}}
            </option>
          </select>
        </li>
        <li class="roulette_main__nav_item">
          <select 
            v-model="roulette.toSort"
            class="roulette_main__nav__select"
          >
            <option :value="false">亂數排序</option>
            <option :value="true">小到大排序</option>
          </select>
        </li>
      </ul>
      <div class="roulette_main__content">
        <RouletteMainAwards :awardsPrizeImgArr="roulette.prizeName"/>
        <div class="roulette_main___box">
          <div :class="[
            'roulette_main___box_wrap',
            roulette.lotteryNum !== '' ? 'roulette_main___box_wrap-P'+roulette.rouletteAward.length+'-N'+roulette.lotteryNum : '',
            {'roulette_main___box_wrap-rotate':roulette.isLottery}
          ]">
            <RouletteMainBoxPart :rouletteAwardArr="roulette.rouletteAward"/>
            <RouletteMainBoxCoin/>
            <Wbox3dLoading class="posCenter"  v-if="!roulette.rouletteAward.length"/>
            <div v-if="roulette.rouletteAward.length" class="roulette_main___box__btn" @click="rotateRouletteFn">
              <span class="roulette_main___box__btn_logo"><SvgIcon name="icon-dota" color="#ed1c24"/></span>
            </div>
            <RouletteMainBoxTimes :drawTimesNum="roulette.drawTimes"/>
          </div>
        </div>
        <RouletteMainWinner :winnerListArr="roulette.winnerList" :winnerRecordArr="roulette.winnerRecord"/>
      </div>
    </div>
  </div>
  <RouletteRule :rouletteRule="roulette.ruleText"/>
  <RoulettePopup :popupHideFn="popupHideFn" :lotteryNum="roulette.lotteryNum" :rouletteAwardArr="roulette.rouletteAward"/>
</div>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
@keyframes rouletteDecoShake{
  0%{transform:rotate3d(0,0,1,5deg)}
  33.33%{transform:rotate3d(0,0,1,-7.5deg)}
  66.66%{transform:rotate3d(0,0,1,11.25deg)}
  100%{transform:rotate3d(0,0,1,-16.875deg)}
}
@keyframes rouletteNeonLight{
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
}
@keyframes rouletteBtnShadow-mob{
  0%{
    box-shadow: 0 0 size_pxToVw(10,$rouletteGameMobW) rgba(#000,.3),
                0 size_pxToVw(2,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) 1px rgba(#000,.35), 
                -1px -1px 0 rgba(#000,.2) inset, -1px 0 1px rgba(#000,.2) inset, 1px 1px 0 rgba(#fff,.8) inset;
  }
  100%{
    box-shadow: 0 0 size_pxToVw(30,$rouletteGameMobW) rgba(#000,.7),
                0 size_pxToVw(2,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) 1px rgba(#000,.35),
                -1px -1px 0 rgba(#000,.2) inset, -1px 0 1px rgba(#000,.2) inset, 1px 1px 0 rgba(#fff,.8) inset;
  }
}
@keyframes rouletteBtnShadow-mobPigSize{
  0%{
    box-shadow: 0 0 15px rgba(#000,.3), 0 3px 5px 1px rgba(#000,.35), 
                -1px -1px 0 rgba(#000,.2) inset, -1px 0 1px rgba(#000,.2) inset, 1px 1px 0 rgba(#fff,.8) inset;
  }
  100%{
    box-shadow: 0 0 45px rgba(#000,.9), 0 3px 5px 1px rgba(#000,.35),
                -1px -1px 0 rgba(#000,.2) inset, -1px 0 1px rgba(#000,.2) inset, 1px 1px 0 rgba(#fff,.8) inset;
  }
}
@keyframes rouletteBtnShadow-desktop {
  0% {
    box-shadow: 0 0 16px rgba(#000,.3), 0 2px 3px 1px rgba(#000,.35),
                -1px 0 1px rgba(#000,.5) inset, 1px 1px 1px #fff inset;
  }
  100% {
    box-shadow: 0 0 48px rgba(#000,.9), 0 2px 3px 1px rgba(#000,.35),
                -1px 0 1px rgba(#000,.5) inset, 1px 1px 1px #fff inset;
  }
}
@keyframes rouletteBtnLight{
  0%{transform:translate3d(0%,0,0) rotate3d(0,0,1,45deg);}
  100%{transform:translate3d(530%,0,0) rotate3d(0,0,1,45deg);}
}
.roulette{
  color:#fff;
  font-family:Arial, Helvetica, "Microsoft YaHei", "Microsoft JhengHei", "PingFangTC", sans-serif;
  width:100%;
  min-width:$mobileMinWidth;
  max-width:568px;
  flex-shrink:0;
  overflow-x:hidden;
  padding-bottom:44px;
  margin:0 auto;
  &_main{
    &:before, &:after {@extend %wh100pPosaT0L0;}
    &__nav{
      @extend %ulReset;
      width: 100%;
      max-width: 568px;
      height: 44px;
      display: flex;
      box-shadow: 0 0 size_pxToVw(22,$rouletteGameMobW) rgba(#fff,.25);
      position: fixed;
      left: 0;
      bottom: 0;
      z-index:2;
      &_item{
        display: flex;
        flex-grow:1;
      }
      &__link, &__select{margin:auto;}
      &__link{
        display:flex;
        align-items:center;
      }
      &___icon{
        width: 23px;
        height: 21px;
        margin-right:5px;
      }
      &___txt, &__select{font-size: 14px}
      &___txt{
        color:#fff;
        line-height:2;
        transform:skew(-6deg);
      }
      &__select{
        color:#fff;
        background-color:rgba(#fff,.2);
        border:none;
        outline:none;
        padding:5px 5px 5px 0;
      }
    }
    &__content{
      display: flex;
      flex-direction:column;
      padding-left:20px;
      padding-right:20px;
      position: relative;
    }
    &___box{
      @extend %w100pH0PosaT0L0;
      background-size:cover;
      &:before, &:after{
        content: "";
        @extend %wh100pPosaT0L0;
        background-size:cover;
      }
      &:before{animation:rouletteDecoShake 25s linear infinite alternate;}
      &:after{animation:rouletteDecoShake 25s infinite alternate-reverse;}
      &_wrap{
        width:calc(355/$rouletteGameMobW)*100%;
        padding: 5.5%;
        position: absolute;
        left:calc(10/$rouletteGameMobW)*100%;
        z-index:1;
        &:before, &:after{content:"";}
        &:before{
          background-size:cover;
          @extend %wh100pPosaT0L0;
        }
      }
      &__btn{
        width:calc(66/355)*100%;
        height:calc(66/355)*100%;
        display:flex;
        background-size: 200% 100%;
        background-position: 100% 0;
        cursor: pointer;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 size_pxToVw(28,$rouletteGameMobW) rgba(#000,.75),
                    0 size_pxToVw(2,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) 1px rgba(#000,.35),
                    -1px -1px 0 rgba(#000,.2) inset, -1px 0 1px #fef7da inset,
                    1px 1px 0 rgba(#fff,.8) inset;
        @extend %maPosaT0L0R0B0;
        z-index:1;
        animation:rouletteBtnShadow-mob .5s infinite alternate both;
        &:after{
          content: "";
          width:36%;
          height:180%;
          background-image:linear-gradient(
            90deg, rgba(#fff,0) 0%, rgba(#fff,.8) 60%, rgba(#fff,.4) 0%, rgba(#fff,0) 100%
          );
          position: absolute;
          top:-40%;
          left:-60%;
          transform: translate3d(0,0,0) rotate3d(0,0,1,45deg);
          animation: rouletteBtnLight 2.5s infinite both;
        }
        &_logo{
          width:calc(30/66)*100%;
          height:calc(28/66)*100%;
          box-sizing:content-box;
          padding-bottom:18%;
          margin:auto;
        }
      }
    }
  }
  + .DAfoot-normal{
    box-shadow:0 0 0 152px rgba(#000,.6) inset;
    padding-bottom:44px;
  }
}
// 動畫區
%ATpaused{animation-play-state:paused}
.roulette{
  &-popupOpen .roulette_main___box{
    &:before, &:after, &_wrap:after, &__btn, &__btn:after{
      @extend %ATpaused;
    }
  }
  &_main___box_wrap-rotate{
    > .roulette_main___box{
      &__btn, &__btn:after{animation-name:none;}
      &__btn{
        background-position:0 0;
        pointer-events:none;
      }
    }
    .roulette_main___box__btn_logo{
      filter:grayscale(1);
      transition:filter .4s;
    }
  }
}
// 變版區
.normal, .xmas{
  .roulette_main{
    &__nav{background-color:#190023;}
    &__content{padding-top:calc($rouletteGameMobH/$rouletteGameMobW)*100%;}
    &___box{
      padding-bottom:calc($rouletteGameMobH/$rouletteGameMobW)*100%;
      &_wrap{
        height:calc(355/$rouletteGameMobH)*100%;
        top:calc(38/$rouletteGameMobH)*100%;
        &:after {
          @extend %wh100pPosaT0L0;
          background-size:200% 100%;
          animation: rouletteNeonLight 1s steps(1) infinite;
        }
      }
      &__btn{background-image:url("@/assets/img/roulette/normal/rouletteBtn.png");}
    }
  }
}
.normal{
  &.roulette{background-color:#190023;}
  .roulette_main{
    &__nav{background-color:#190023;}
    &__content{background-image:linear-gradient(180deg, #360056 40%, #1d0124 100%);}
    &___box{
      background-image:url("@/assets/img/roulette/normal/rouletteMain_m.jpg");
      &:before{background-image:url("@/assets/img/roulette/normal/rouletteBalloon_m.png");}
      &:after{background-image:url("@/assets/img/roulette/normal/rouletteBall_m.png");}
      &_wrap{
        &:before{background-image:url("@/assets/img/roulette/normal/rouletteFrame.png");}
        &:after{background-image:url("@/assets/img/roulette/normal/rouletteNeonLight.png");}
      }
    }
  }
}
.newYear{
  &.roulette{background-image:linear-gradient(180deg,#be211b calc($rouletteGameNYmobH/$rouletteGameMobW)*100vw, #4f0907 100%);}
  .roulette{
    background-color:$CNYdarkColor;
    &_main{
      &__nav{background-color:$CNYdarkColor;}
      &__content{padding-top:calc($rouletteGameNYmobH/$rouletteGameMobW)*100%;}
      &___box{
        background-image: linear-gradient(180deg, rgba(#be211b,0) 55%, #be211b 80%),
                          url("@/assets/img/roulette/newYear/rouletteMain_m.jpg");
        padding-bottom:calc($rouletteGameNYmobH/$rouletteGameMobW)*100%;
        &:before{background-image:url("@/assets/img/roulette/newYear/rouletteBalloon_m.png");}
        &:after{background-image:url("@/assets/img/roulette/newYear/rouletteBall_m.png");}
        &_wrap{
          height:calc(355/$rouletteGameNYmobH)*100%;
          top:calc(42/$rouletteGameNYmobH)*100%;
          &:before{background-image:url("@/assets/img/roulette/newYear/rouletteFrame.png");}
          &:after{
            width:calc(434/$rouletteGameMobW)*100%;
            height:0;
            background-image:url("@/assets/img/roulette/newYear/newyearBg.png");
            background-size:cover;
            padding-bottom:calc(180/434*434/$rouletteGameMobW)*100%;
            position:absolute;
            left:50%;
            bottom:-12.5%;
            z-index:-2;
            transform:translate3d(-50%,0 ,0);
            animation-name:none;
          }
        }
        &__btn{background-image: url("@/assets/img/roulette/newYear/rouletteBtn.png");}
      }
    }
  }
}
.xmas{
  &.roulette{background-color:$xmasDarkColor;}
  .roulette_main{
    &__nav{background-color:$xmasDarkColor;}
    &__content{
      background-image: linear-gradient(180deg, rgba(#d3d9e4,0) calc(100% - 150px), #d3d9e4 100%),
                        url("@/assets/img/roulette/xmas/rouletteMainBg_m.jpg");
      background-size:contain;
    }
    &___box{
      background-image:url("@/assets/img/roulette/xmas/rouletteMain_m.jpg");
      &:before{background-image:url("@/assets/img/roulette/xmas/rouletteBalloon_m.png");}
      &:after{background-image:url("@/assets/img/roulette/xmas/rouletteBall_m.png");}
      &_wrap{
        &:before{background-image:url("@/assets/img/roulette/xmas/rouletteFrame.png");}
        &:after{background-image:url("@/assets/img/roulette/xmas/rouletteNeonLight.png");}
      }
    }
  }
}
@media screen and (min-width: 568px){
  .roulette{
    box-shadow:230px 0 0 #190023, -230px 0 0 #190023;
    &_main{
      &__nav{
        box-shadow:0 -10px 20px -10px rgba(#fff,.3);
        left:50%;
        transform:translate3d(-50%,0,0);
      }
      &___box__btn{
        box-shadow: 0 0 42px rgba(#000,.75),
                    0 3px 5px 1px rgba(#000,.35),
                    -1px -1px 0 rgba(#000,.2) inset, -1px 0 1px #fef7da inset,
                    1px 1px 0 rgba(#fff,.8) inset;
        animation-name:rouletteBtnShadow-mobPigSize;
      }
    }
  }
  .normal.roulette{box-shadow:230px 0 0 #190023, -230px 0 0 #190023;}
  .xmas.roulette{box-shadow:230px 0 0 $xmasDarkColor, -230px 0 0 $xmasDarkColor;}
  .newYear.roulette{ // ($rouletteGameNYmobH / $rouletteGameMobW) * 568px = 742.18666px
    background-image:linear-gradient(180deg,#be211b 743px, #4f0907 100%);
    box-shadow:230px 0 0 $CNYdarkColor, -230px 0 0 $CNYdarkColor;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px){
  .roulette{overflow-x:initial}
}
@media screen and (min-width:1024px){
  .roulette{
    width:100%;
    max-width:1920px;
    box-shadow:none;
    padding-bottom:0;
    &_main{
      max-width:$rouletteGameW + px;
      height:0;
      background-size:cover;
      margin:0 auto;
      position: relative;
      &:before, &:after {
        content: "";
        background-size:cover;
      }
      &:before{animation: rouletteDecoShake 25s linear infinite alternate;}
      &:after{animation: rouletteDecoShake 25s infinite alternate-reverse;}
      &_wrap{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
      }
      &__nav{
        height:60px;
        justify-content:center;
        box-shadow: none;
        padding:14px 0;
        position: relative;
        &_item{
          flex-grow:0;
          position: relative;
          + .roulette_main__nav_item{margin-left: 18px;}
          &:after{
            content:"";
            width:0;
            height: 5px;
            background-color:#ffdb00;
            border-radius: 5px;
            position:absolute;
            right:0;
            bottom:-5px;
            transition:width .4s;
          }
          &:hover:after{
            width: 100%;
            left:0;
          }
        }
        &___icon{
          width: 26px;
          height: 24px;
          margin-right: 6px;
        }
        &___txt, &__select{
          font-size: 16px;
          text-shadow: 0 0 2px rgba(#000,.5);
        }
        &__select{
          height: 32px;
          background-color:rgba(#000,.3);
        }
      }
      &__content{
        flex-direction: row;
        align-items:center;
        justify-content: space-evenly;
        > .roulette_main___box{padding-bottom:calc(600/$rouletteGameW)*100%;}
      }
      &___box{
        width:calc(600/$rouletteGameW)*100%;
        position:relative;
        &:before, &:after{
          height: 0;
          animation-name: none;
        }
        &_wrap{
          width:100%;
          left:0;
        }
        &__btn{
          width:calc(110/600)*100%;
          height:calc(110/600)*100%;
          box-shadow: 0 0 46px rgba(#000,.75),
                      0 2px 3px 1px rgba(#000,.35), 
                      -1px 0 1px rgba(#000,.5) inset,
                      1px 1px 1px #fff inset;
          animation-name:rouletteBtnShadow-desktop;
        }
      }
    }
    &-popupOpen .roulette_main{
      &:before, &:after{
        animation-play-state:paused;
      }
    }
    + .DAfoot-normal{padding-bottom:0;}
  }
  .normal, .newYear, .xmas{
    .roulette_main{
      &__nav{background-color:transparent;}
      &__content{padding:0;}
      &___box{
        background-image:none;
        &:before, &:after{background-image:none;}
        &_wrap{
          height:100%;
          top:0;
        }
      }
    }
  }
  .normal, .xmas{
    .roulette_main__nav{margin-bottom:calc(50/$rouletteGameW)*100%;}
  }
  .normal, .newYear{
    .roulette_main{padding-bottom:calc($rouletteGameH/$rouletteGameW)*100%;}
  }
  .normal .roulette_main{
    background-image:url("@/assets/img/roulette/normal/rouletteMain_d.jpg");
    &:after{background-image:url("@/assets/img/roulette/normal/rouletteBalloon_d.png");}
    &:before{background-image:url("@/assets/img/roulette/normal/rouletteBall_d.png");}
    &__content{background-image:none;}
  }
  .newYear .roulette_main{
    background-image: linear-gradient(180deg,rgba(#be211b,0) calc(($rouletteGameH - 360)/$rouletteGameH)*100%, #be211b 90.5%),
                      url("@/assets/img/roulette/newYear/rouletteMain_d.jpg");
    &:after{background-image:url("@/assets/img/roulette/newYear/rouletteBalloon_d.png");}
    &:before{background-image:url("@/assets/img/roulette/newYear/rouletteBall_d.png");}
    &__nav{margin-bottom:calc(70/$rouletteGameW)*100%;}
    &___box_wrap:after{
      width:calc(868/600)*100%;
      padding-bottom:calc(360/868*868/600)*100%;
    }
  }
  .xmas .roulette_main{
    //                                           (515 / 985) * 100%   [1 - (515 / 985) * 0.3] * 100%
    background-image: linear-gradient(180deg,rgba(#d3d9e4,0) 52.3%, #d3d9e4 85.5%),
                      url("@/assets/img/roulette/xmas/rouletteMain_d.jpg");
    padding-bottom:calc($rouletteGameXmasDeskH/$rouletteGameW)*100%;
    &:after{background-image:url("@/assets/img/roulette/xmas/rouletteBalloon_d.png");}
    &:before{background-image:url("@/assets/img/roulette/xmas/rouletteBall_d.png");}
    &__content{background-image:none;}
  }
}
@media screen and (min-width: 1200px){
  .xmas .roulette_main__nav{margin-bottom:6%;}
}
@media screen and (min-width: 1440px){
  .roulette_main{
    &_wrap{
      &:before, &:after{
        content:"";
        width: 100%;
        height: 100%;
        background-size:cover;
        box-shadow: 0 0 1px rgba(#000,.1);
        position: absolute;
        top: 0;
        transform:rotate3d(0,1,0,180deg);
      }
      &:before{left:-100%}
      &:after{left:100%}
    }
    &__content > .roulette_main___box{padding-bottom:600px;}
  }
  .normal, .newYear{
    .roulette_main{padding-bottom:$rouletteGameH + px;}
  }
  .normal .roulette_main{
    &_wrap{
      &:before, &:after{
        background-image:url("@/assets/img/roulette/normal/rouletteMain_d.jpg");
      }
    }
    &__nav{margin-bottom:50px;}
  }
  .xmas .roulette_main{
    padding-bottom:$rouletteGameXmasDeskH + px;
    &_wrap{
      &:before, &:after{
        //                                           (515 / 985) * 100%   [1 - (515 / 985) * 0.3] * 100%
        background-image: linear-gradient(180deg,rgba(#d3d9e4,0) 52.3%, #d3d9e4 85.5%),
                          url("@/assets/img/roulette/xmas/rouletteMain_d.jpg");
      }
    }
    &__nav{margin-bottom:86px;}
  }
  .newYear .roulette_main{
    &_wrap{
      &:before, &:after{
        background-image: linear-gradient(180deg,rgba(#be211b,0) calc(($rouletteGameH - 360)/$rouletteGameH)*100%, #be211b 90.5%),
                          url("@/assets/img/roulette/newYear/rouletteMain_d.jpg");
      }
    }
    &__nav{margin-bottom:70px;}
  }
}
</style>