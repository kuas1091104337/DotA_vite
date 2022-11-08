<script setup>
import axios from 'axios';
import { reactive } from 'vue';
let videoImgtime = 200
const data = reactive({
        plan:[], first:[], second:[], third:[], fourth:[]
      }),
      videoPlay = () => {
        const idx = ref(0),
              isPlay = ref(false),
              time = ref(null),
              idxChange = (val,leng) => {
                idx.value += val;
                idx.value = (idx.value + leng) % leng;
              };
        return {
          num: () => idx.value,
          timer: () => time.value,
          play: () => isPlay.value,
          next: (leng) => idxChange(1,leng),
          prev: (leng) => idxChange(-1,leng),
          change: (leng) => {
            isPlay.value = !isPlay.value;
            if(isPlay.value){
              clearInterval(time.value);
              time.value = setInterval(() => idxChange(1,leng),250);
            }
            if(!isPlay.value) clearInterval(time.value);
          }
        }
      },
      planImg = videoPlay(),
      video1 = videoPlay(),
      video2 = videoPlay(),
      video3 = videoPlay(),
      video4 = videoPlay(),
      planImg_Next = (leng) => planImg.next(leng),
      planImg_Prev = (leng) => planImg.prev(leng),
      video1_Next = (leng) => video1.next(leng),
      video1_Prev = (leng) => video1.prev(leng),
      video1_Play = (leng) => video1.change(leng),
      video2_Next = (leng) => video2.next(leng),
      video2_Prev = (leng) => video2.prev(leng),
      video2_Play = (leng) => video2.change(leng),
      video3_Next = (leng) => video3.next(leng),
      video3_Prev = (leng) => video3.prev(leng),
      video3_Play = (leng) => video3.change(leng),
      video4_Next = (leng) => video4.next(leng),
      video4_Prev = (leng) => video4.prev(leng),
      video4_Play = (leng) => video4.change(leng);
onMounted(() => {
  // Secret delete link // link https://designer.mocky.io/manage/delete/fe4a945c-5050-4efb-9cfa-2d18836904fd/kuas1091104337
  axios.get('https://run.mocky.io/v3/fe4a945c-5050-4efb-9cfa-2d18836904fd')
  // Secret delete link // https://designer.mocky.io/manage/delete/4526b533-ece6-43d1-b538-f526557e37e6/kuas1091104337
  // axios.get('https://run.mocky.io/v3/4526b533-ece6-43d1-b538-f526557e37e6')
  .then((res) => {
    data.plan = res.data.plan.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.plan.title} ${idx}`}
    });
    data.first = res.data.first.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.first.title} ${idx}`}
    });
    data.second = res.data.second.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.second.title} ${idx}`}
    });
    data.third = res.data.third.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.third.title} ${idx}`}
    });
    data.fourth = res.data.fourth.imgArr.map((el,idx) => {
      return {src:el, alt:`${res.data.fourth.title} ${idx}`}
    });
    console.log(data);
  }).catch((error) => {
    console.log(error.response.data);
  });
});
</script>

<template>
<Head/>
<div class="DAwrap DAvideo">
  <div class="DAwrap_box DAvideo_wrap">
    <h2 class="DAvideo_wrap_title">BS 7Poker 宣傳影片企劃</h2>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.plan" 
          :key="item.src"
          :src="item.src" 
          :alt="item.alt"
          v-show="planImg.num() === idx"
        >
      </div>
      <ul class="DAvideo__box_ctrl">
        <li class="DAvideo__box_ctrl_prev" @click="planImg_Prev(data.plan.length)"></li>
        <li class="DAvideo__box_ctrl_num">{{planImg.num()+1}}</li>
        <li class="DAvideo__box_ctrl_next" @click="planImg_Next(data.plan.length)"></li>
      </ul>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker 完稿版 宣傳影片</h3>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.fourth" 
          :key="item.src"
          :src="item.src" 
          :alt="item.alt" 
          v-show="video4.num() === idx"
        >
      </div>
      <div 
        class="DAvideo__box_play" 
        v-if="!video4.timer()" 
        @click="video4_Play(data.fourth.length)"
      >
      </div>
      <ul :class="['DAvideo__box_ctrl',{play:video4.play()}]">
        <li class="DAvideo__box_ctrl_prev" @click="video4_Prev(data.fourth.length)"></li>
        <li class="DAvideo__box_ctrl_switch" @click="video4_Play(data.fourth.length)"></li>
        <li class="DAvideo__box_ctrl_next" @click="video4_Next(data.fourth.length)"></li>
      </ul>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker 第三版 宣傳影片</h3>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.third" 
          :key="item.src" 
          :src="item.src" 
          :alt="item.alt" 
          v-show="video3.num() === idx"
        >
      </div>
      <div 
        class="DAvideo__box_play" 
        v-if="!video3.timer()" 
        @click="video3_Play(data.third.length)"
      >
      </div>
      <ul :class="['DAvideo__box_ctrl',{play:video3.play()}]">
        <li class="DAvideo__box_ctrl_prev" @click="video3_Prev(data.third.length)"></li>
        <li class="DAvideo__box_ctrl_switch" @click="video3_Play(data.third.length)"></li>
        <li class="DAvideo__box_ctrl_next" @click="video3_Next(data.third.length)"></li>
      </ul>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker 第二版 宣傳影片</h3>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.second" 
          :key="item.src" 
          :src="item.src" 
          :alt="item.alt"
          v-show="video2.num() === idx"
        >
      </div>
      <div 
        class="DAvideo__box_play" 
        v-if="!video2.timer()" 
        @click="video2_Play(data.second.length)"
      >
      </div>
      <ul :class="['DAvideo__box_ctrl',{play:video2.play()}]">
        <li class="DAvideo__box_ctrl_prev" @click="video2_Prev(data.second.length)"></li>
        <li class="DAvideo__box_ctrl_switch" @click="video2_Play(data.second.length)"></li>
        <li class="DAvideo__box_ctrl_next" @click="video2_Next(data.second.length)"></li>
      </ul>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker 第一版 宣傳影片</h3>
    <div class="DAvideo__box">
      <div class="DAvideo__box_wrap">
        <img 
          class="DAvideo__box_wrap_img"
          v-for="(item, idx) in data.first" 
          :key="item.src" 
          :src="item.src" 
          :alt="item.alt"
          v-show="video1.num() === idx"
        >
      </div>
      <div 
        class="DAvideo__box_play"
        v-if="!video1.timer()"
        @click="video1_Play(data.first.length)"
      >
      </div>
      <ul :class="['DAvideo__box_ctrl',{play:video1.play()}]">
        <li class="DAvideo__box_ctrl_prev" @click="video1_Prev(data.first.length)"></li>
        <li class="DAvideo__box_ctrl_switch" @click="video1_Play(data.first.length)"></li>
        <li class="DAvideo__box_ctrl_next" @click="video1_Next(data.first.length)"></li>
      </ul>
    </div>
    <h3 class="DAvideo_wrap_title">BS 7Poker YouTube版</h3>
    <div class="DAvideo_wrap_video">
      <iframe class="DAvideo_wrap_video_iframe" width="560" height="315" src="https://www.youtube.com/embed/8vAXeBS1yLA?hd=1&amp;loop=1&amp;playlist=8vAXeBS1yLA" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>
<Foot class="DAfoot-normal"/>

</template>

<style lang="scss">
.DAvideo{
  &_wrap{
    &_title{
      color: $BGcolor;
      font-size: 21px;
      text-align: center;
      text-shadow: 1px 1px 0 $dBGcolor;
      margin: 1.2rem 0;
      transform: skew(-6deg);
    }
    &_video{
      max-width: 800px;
      height: 0;
      padding-bottom: calc(315/560)*100%;
      margin: 0 auto 36px;
      position: relative;
      &_iframe{
        width: 100%;
        height: 100%;
        position:absolute;
        top:0;
        left:0;
      }
    }
  }
  &__box{
    position:relative;
    margin-bottom: 36px;
    &_wrap{
      &_img{
        vertical-align: top;
        width: 100%;
      }
    }
    &_play{
      width: 100%;
      height: 100%;
      position:absolute;
      top:0;
      left:0;
      &:before, &:after{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate3d(-50%,-50%,0);
      }
      &:before{
        content:"";
        width: 68px;
        height: 48px;
        border-radius: 10px;
        background-color: $youtubeRed;
      }
      &:after{
        @extend %beforeAfterTriangleBaseSet;
        border-width: 10px 0 10px 18px;
        border-color: transparent transparent transparent #fff;
      }
      + .DAvideo__box_ctrl{
        transform: perspective(1000px) rotate3d(1,0,0,90deg);
      }
    }
    &_ctrl{
      @extend %ul-reset;
      width: 100%;
      height: 46px;
      display: flex;
      justify-content:center;
      background-image:linear-gradient(180deg, rgba(#000,0) 0%, rgba(#000,.15) 20%, rgba(#000,.55) 100%);
      position:absolute;
      left:0;
      bottom:0;
      transition:transform .6s;
      transform-origin:50% 100%;
      &.play{
        > .DAvideo__box_ctrl{
          &_switch:after{
            border-color: #fff;
            border-width: 12px 3px;
            box-shadow: 14px 0 0 #fff;
            margin-right: 14px;
          }
          &_prev, &_next{opacity: .5;}
        }
      }
      &_switch, &_prev, &_next, &_num{
        text-align: center;
        width: 54px;
      }
      &_switch, &_next, &_num{margin-left: 20px;}
      &_prev, &_next{
        padding-top: 15px;
        transition:opacity .4s;
        &:before, &:after{display: inline-block;}
      }
      &_prev:before, &_next:after{
        content:"";
        width: 3px;
        height: 16px;
        background-color:#fff;
      }
      &_prev:after, &_next:before{
        @extend %beforeAfterTriangleBaseSet;
      }
      &_prev:after{
        border-width: 8px 14px 8px 0;
        border-color: transparent #fff transparent transparent;
      }
      &_next:before{
        border-width: 8px 0 8px 14px;
        border-color: transparent transparent transparent #fff;
      }
      &_num{
        color:#fff;
        font-size: 18px;
        font-weight: 300;
        line-height: 46px;
        text-shadow: 0 1px 3px rgba(#000,.75);
      }
      &_switch{
        padding-top: 11px;
        &:after{
          @extend %beforeAfterTriangleBaseSet;
          display: inline-block;
          border-width: 12px 0 12px 20px;
          border-color: transparent transparent transparent rgba(#fff,0.5);
          transition: border-color .4s,border-width .4s,box-shadow .4s,margin-right .4s;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .DAvideo{
    &_wrap_title{font-size: 18px;}
    &_wrap_video, &__box{margin-bottom: 32px;}
  }
}
@media screen and (max-width: 375px) {
  .DAvideo{
    &_wrap_title{font-size: 24px;}
    &_wrap_video, &__box{margin-bottom: 40px;}
  }
}
@media screen and (min-width: 640px) {
  .DAvideo{
    padding: 50px;
    &_wrap{
      padding: 30px 50px;
      &_title{font-size: 24px;}
    }
  }
}
@media screen and (min-width: 768px) {
  .DAvideo_wrap{
    max-width: 900px;
    margin:0 auto;
    &_title{font-size: 32px;}
  }
}
</style>