<script setup>
const props = defineProps({
        winnerListArr:{
          type:Array,
          default:() => []
        },
        winnerRecordArr:{
          type:Array,
          default:() => []
        }
      }),
      winnerRecordShow = ref(false),
      winnerToggleFn = (val) => winnerRecordShow.value = val;
</script>

<template>
<div class="roulette_main___winner">
  <div :class="['roulette_main___winner_wrap',{'roulette_main___winner_wrap-record':winnerRecordShow}]">
    <div class="roulette_main___winner__nav">
      <p class="roulette_main___winner__nav_item" @click="winnerToggleFn(false)">中獎名單</p>
      <p class="roulette_main___winner__nav_item" @click="winnerToggleFn(true)">中獎記錄</p>
      <span class="roulette_main___winner__nav_cursor"></span>
    </div>
    <aside class="roulette_main___winner__slide">
      <ul class="roulette_main___winner__slide_list">
        <li>
          <WTextLoading v-if="!props.winnerListArr.length"/>
        </li>
        <li 
          v-for="item in props.winnerListArr" :key="item.name"
          class="roulette_main___winner__slide__item"
        >
          <p class="roulette_main___winner__slide__item_date">{{item.date}}</p>
          <p class="roulette_main___winner__slide__item_name">{{item.name}}</p>
          <p class="roulette_main___winner__slide__item_prize">{{item.prize}}</p>
        </li>
      </ul>
      <ul class="roulette_main___winner__slide_list">
        <li>
          <WTextLoading v-if="!props.winnerRecordArr.length"/>
        </li>
        <li
          v-for="item in props.winnerRecordArr" :key="item.name"
          class="roulette_main___winner__slide__item"
        >
          <p class="roulette_main___winner__slide__item_date">{{item.date}}</p>
          <p class="roulette_main___winner__slide__item_name">{{item.name}}</p>
          <p class="roulette_main___winner__slide__item_prize">{{item.prize}}</p>
        </li>
      </ul>
    </aside>
  </div>
</div>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
.roulette_main___winner{
  height: 0;
  background-size:cover;
  padding-bottom:calc(550/670)*100%;
  margin:calc(100/335)*100% 0 calc(90/335)*100%;
  position: relative;
  &_wrap{
    @extend %wh100pPosaT0L0;
    display: flex;
    flex-direction: column;
    padding:size_pxToVw(15,$rouletteGameMobW);
    &-record .roulette_main___winner{
      &__nav_cursor{left:50%;}
      &__slide_list{
        &:nth-of-type(1){
          opacity:0;
          left:100%;
        }
        &:nth-of-type(2){
          opacity:1;
          left:-100%;
        }
      }
    }
    &:before, &:after {
      content:"";
      height: 0;
      background-size:cover;
      position:absolute;
      left: 50%;
    }
    &:before {
      top:0;
      transform:translate(-50%,-95.5%);
    }
    &:after {
      width:calc(366/$rouletteAwardsW)*100%;
      background-image:url("@/assets/img/roulette/normal/rouletteWinnerListBottom.png");
      padding-bottom:calc(85/366)*calc(366/335)*100%;
      bottom:0;
      transform:translate(-50%, 42%);
    }
  }
  &__nav{
    display: flex;
    background-color: rgba(#fff,.15);
    border-radius: 20px;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
    &_item{
      font-size: 16px;
      // font-weight: bold;
      line-height: 34px;
      text-align: center;
      text-shadow: 0 1px 2px rgba(#000,.6);
      flex: 1 1 0;
      cursor: pointer;
      margin: 0;
      transition:color .4s;
    }
    &_cursor{
      width: 50%;
      height: 38px;
      background-repeat: no-repeat;
      background-position: 0 0, 50% 0, 100% 0;
      background-size: 19px 100%, calc(100% - 36px) 100%, 19px 100%;
      margin: -2px 0 0 -2px;
      @extend %posaT0L0;
      z-index:-1;
      transition:left .4s;
    }
  }
  &__slide{
    display: flex;
    flex: 1 1 0;
    overflow: hidden;
    &_list{
      @extend %ulReset;
      flex: 0 0 100%;
      overflow-y: auto;
      overflow-x: hidden;
      position: relative;
      left:0;
      transition:opacity .4s, left .4s;
      &:nth-of-type(2){opacity:0}
    }
    &__item{
      font-size:14px;
      line-height:38px;
      text-shadow:0 0 2px rgba(#000,.75);
      display:flex;
      justify-content:space-between;
      padding:0 2%;
      &:nth-of-type(even){background-color:rgba(#fff,.075)}
      &_date, &_name, &_prize{margin:0}
      &_date{width:26%;}
      &_name{
        text-align: center;
        width:42%;
      }
      &_prize{
        color:#ffdb00;
        width:32%;
        text-align:right;
      }
    }
  }
}
.normal, .xmas{
  .roulette_main___winner_wrap:before{
    width:calc(275/335)*100%;
    padding-bottom:calc(116/275*275/335)*100%;
  }
}
.newYear, .xmas{
  .roulette_main___winner{
    background-image:url("@/assets/img/roulette/xmas/rouletteWinnerList_m.png");
    &_wrap-record .roulette_main___winner__nav_item{
      &:nth-of-type(1){color:#ffd6d6;}
      &:nth-of-type(2){color:#fff;}
    }
    &__nav{
      &_item{
        color:#ffd6d6;
        &:nth-of-type(1){color:#fff;}
      }
      &_cursor{
        background-image: url("@/assets/img/roulette/xmas/rouletteWinnerBtn_lm.png"),
                          url("@/assets/img/roulette/xmas/rouletteWinnerBtn_cm.png"),
                          url("@/assets/img/roulette/xmas/rouletteWinnerBtn_rm.png");
      }
    }
  }
}
.normal .roulette_main___winner{
  background-image:url("@/assets/img/roulette/normal/rouletteWinnerList_m.png");
  margin:calc(100/335)*100% 0 calc(90/335)*100%;
  &_wrap{
    &-record .roulette_main___winner__nav_item{
      &:nth-of-type(1){color:#c98dff;}
      &:nth-of-type(2){color:#fff;}
    }
    &:before{background-image:url("@/assets/img/roulette/normal/rouletteWinnerListTop.png");}
  }
  &__nav{
    &_item{
      color:#c98dff;
      &:nth-of-type(1){color:#fff;}
    }
    &_cursor{
      background-image: url("@/assets/img/roulette/normal/rouletteWinnerBtn_lm.png"),
                        url("@/assets/img/roulette/normal/rouletteWinnerBtn_cm.png"),
                        url("@/assets/img/roulette/normal/rouletteWinnerBtn_rm.png");
    }
  }
}
.newYear .roulette_main___winner{
  margin:calc(110/335)*100% 0 calc(100/335)*100%;
  &_wrap:before{
    width:calc(198/335)*100%;
    background-image:url("@/assets/img/roulette/newYear/rouletteWinnerListTop.png");
    padding-bottom:calc(100/198*198/335)*100%;
  }
}
.xmas .roulette_main___winner{
  margin:calc(120/335)*100% 0 calc(160/335)*100%;
  &_wrap:before{background-image:url("@/assets/img/roulette/xmas/rouletteWinnerListTop.png");}
}
@media screen and (min-width: 568px){
  .roulette_main___winner{
    &_wrap{padding:23px}
    &__slide__item{font-size:16px;}
  }
}
@media screen and (min-width:1024px){
  .roulette_main___winner{
    width:calc($rouletteAwardsW/$rouletteGameW)*100%;
    padding-bottom:calc(600/$rouletteAwardsW*$rouletteAwardsW/$rouletteGameW)*100%;
    z-index:1;
    &_wrap{
      padding:calc(15/$rouletteAwardsW)*100%;
      &:after {
        padding-bottom:calc(85/366*366/$rouletteAwardsW)*100%;
        transform:translate(-50%,40%);
      }
    }
    &__nav{
      margin-bottom:calc(15/265)*100%;
      &_item{
        font-size:size_pxToVw(18,$rouletteGameW);
        line-height:size_pxToVw(34,$rouletteGameW);
      }
      &_cursor{
        width:calc(140/265)*100%;
        height:0;
        background-size:cover;
        padding-bottom:calc(38/140*140/265)*100%;
      }
    }
    &__slide__item{
      font-size: 14px;
      line-height: 22px;
      flex-wrap:wrap;
      padding:4px 8px;
      &_date, &_prize{width:50%;}
      &_name, &_prize{text-align:left;}
      &_name{
        width:100%;
        order:-1;
      }
    }
  }
  .normal, .newYear, .xmas{
    .roulette_main___winner{margin:0;}
  }
  .normal, .xmas{
    .roulette_main___winner_wrap:before{
      width:calc(328/$rouletteAwardsW)*100%;
      padding-bottom:calc(138/328*328/$rouletteAwardsW)*100%;
    }
  }
  .newYear, .xmas{
    .roulette_main___winner{
      background-image:url("@/assets/img/roulette/xmas/rouletteWinnerList_d.png");
      &__nav_cursor{background-image:url("@/assets/img/roulette/xmas/rouletteWinnerBtn.png");}
    }
  }
  .normal .roulette_main___winner{
    background-image:url("@/assets/img/roulette/normal/rouletteWinnerList_d.png");
    &__nav_cursor{background-image:url("@/assets/img/roulette/normal/rouletteWinnerBtn.png");}
  }
  .newYear .roulette_main___winner_wrap:before {
    width:calc(257/$rouletteAwardsW)*100%;
    padding-bottom:calc(130/257*257/$rouletteAwardsW)*100%;
  }
}
@media screen and (min-width: 1440px){
  .roulette_main___winner__nav_item{
    font-size:18px;
    line-height:34px;
  }
}
</style>