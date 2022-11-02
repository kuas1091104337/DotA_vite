<script setup>
import { useGetWindowScrollVal } from '@/composables';
// import { useI18n } from "vue-i18n";
const { windowScrollMiddle } = useGetWindowScrollVal(),
      // {t} = useI18n(),
      emit = defineEmits(['DAthoughtsEle']),
      DAbox = ref(null),
      DAboxOffsetTop = ref(0),
      DAboxOffsetBottom = ref(0),
      getDomOffset = () => {
        const et = DAbox.value.offsetTop,
              eh = DAbox.value.offsetHeight;
        DAboxOffsetTop.value = et;
        DAboxOffsetBottom.value = et + eh;
        emit('DAthoughtsEle', DAboxOffsetTop, DAboxOffsetBottom);
      };
onUpdated(() => getDomOffset());
window.addEventListener('resize',getDomOffset);
</script>

<template>
<div ref="DAbox" :class="['DAthoughts DAbox',{active:DAboxOffsetTop < windowScrollMiddle && DAboxOffsetBottom >= windowScrollMiddle}]">
  <div class="DAthoughts_bg">
    <img class="DAthoughts_bg_img DAthoughts_bg_desk" src="@/assets/img/index/feelingsDesk.jpg" alt="desk face bg">
    <img class="DAthoughts_bg_img DAthoughts_bg_phone" src="@/assets/img/index/feelingsPhone.jpg" alt="phone face bg">
  </div>
  <div class="DAthoughts_wrap">
    <div class="DAbox_wrap">
      <!-- {{t('')}}  -->
      <h2 class="DAthoughts__title DAbox__title">設計就是</h2>
      <p class="DAthoughts__txt">結合工程師的邏輯分析和藝術家的浪漫，就算拿到在空洞的文案或沒有內容的商品，都能與對方溝通，了解對方的想法。在參考相關資料後，運用邏輯分析找出其本質上的優點，最後靠想像力與美學把優點無限放大，就像把「如花」包裝成「像志玲姐姐」那樣。</p>
      <p class="DAthoughts__txt">因此驅使我表達出這一致性心理的真實感受，並非在於文字夠不夠華美，而是透過文字構築一個畫面和精確的視覺，能夠感動人心。</p>
    </div>
  </div>
</div>
</template>

<style lang="scss">
  .DAthoughts{
    height:calc(100vh - ($DAheadH + $DAborderW));
    overflow: hidden;
    position:relative;
    clip:rect(0,100vw,100vh,0);
    &:before{
      content:"";
      width: 100%;
      height: 100%;
      background-image:url("@/assets/img/index/HFbg.jpg");
      position:fixed;
      top:0;
      left:0;
      z-index:-1;
      transform:translate3d(0,0,0);
    }
    &_bg{
      width:100%;
			height:100%;
      opacity: 0;
      overflow: hidden;
      position:fixed;
			top:0;
			left:0;
			z-index:-1;
      transform:scale3d(.8,.8,1);
      transition: opacity .5s, transform .5s;
      .active &{
        opacity: 1;
        transform:scale3d(1,1,1);
        transition: opacity 1s, transform 1s;
      }
      &_img{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate3d(-50%,-50%,0);
      }
      &_phone{height: 100%;}
      &_desk{
        height:0;
        opacity:0;
      }
      &:after{
        content:"";
        width: 100%;
        height: 100%;
        background-image:radial-gradient(ellipse at center,
                           rgba(#000,0) 65%,
                           rgba(#000,.4) 100%
                         );
        box-shadow:0 0 10px 2px rgba(#000,.5) inset;
        position:absolute;
        top:0;
        left:0;
      }
    }
    &_wrap{
      height: 100%;
      display: flex;
      align-items: center;
      padding:35px 15px;
      // backdrop-filter:blur(6px);
      // transition: backdrop-filter .6s;
      // .active &{backdrop-filter:blur(0px);}
    }
    &__title{
      color:$BGcolor;
      text-shadow:0 1px 0 #fff,
                  1px 0 0 #fff,
                  0 -1px 0 #fff,
                  -1px 0 0 #fff,
                  1px 1px 0 #fff, 
                  -1px 1px 0 #fff,
                  1px -1px 0 #fff,
                  -1px -1px 0 #fff,
                  0 2px 0 #fff, 
                  2px 0 0 #fff, 
                  0 -2px 0 #fff, 
                  -2px 0 0 #fff, 
                  1px 2px 0 #fff, 
                  -1px 2px 0 #fff, 
                  1px -2px 0 #fff, 
                  -1px -2px 0 #fff, 
                  2px 1px 0 #fff, 
                  -2px 1px 0 #fff, 
                  2px -1px 0 #fff, 
                  -2px -1px 0 #fff,
                  2px 2px 0 #fff, 
                  -2px 2px 0 #fff, 
                  2px -2px 0 #fff, 
                  -2px -2px 0 #fff,
                  2px 2px 8px rgba(#000,.3),
                  -2px 2px 8px rgba(#000,.3);
    }
    &__txt{
      color:#fff;
      line-height: 1.8;
      text-align: justify;
      text-indent: 1rem;
      text-shadow:0 0 1px rgba(#000,.2),
                  0 1px 1px rgba(#000,.2), 
                  1px 0 1px rgba(#000,.2), 
                  0 -1px 1px rgba(#000,.2), 
                  -1px 0 1px rgba(#000,.2), 
                  1px 1px 1px rgba(#000,.2), 
                  -1px 1px 1px rgba(#000,.2), 
                  1px -1px 1px rgba(#000,.2), 
                  -1px -1px 1px rgba(#000,.2);
      margin-bottom: 2.5rem;
    }
  }
  @media screen and (min-width: 420px) {
    .DAthoughts_bg_phone{
      width: 100%;
      height:auto;
    }
  }
  // 平板拿直的時候 portrait
  @media screen and (min-width: 600px) and (max-width: 1024px) and (orientation:portrait){
    .DAthoughts{height:85vh;}
  }
  // 手機、平板拿橫的時候
  @media screen and (max-width: 1024px) and (orientation:landscape){
    .DAthoughts{
      height: auto;
      &_bg{
        &_phone{
          height:0;
          opacity:0;
        }
        &_desk{
          width:auto;
          height:100%;
          opacity:1;
        }
        &:after{
          background-image:radial-gradient(ellipse at center,
                            rgba(#000,0) 50%,
                            rgba(#000,.4) 100%
                           );
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .DAthoughts{
      height:calc(100vh - ($DAheadH + $DAborderW));
      &_bg{
        &_phone{
          height:0;
          opacity:0;
        }
        &_desk{
          width:auto;
          height:100%;
          opacity:1;
        }
        &:after{
          background-image:radial-gradient(ellipse at center,
                            rgba(#000,0) 50%,
                            rgba(#000,.4) 100%
                           );
        }
      }
      &__txt{padding:0 50px;}
    }
	}
</style>