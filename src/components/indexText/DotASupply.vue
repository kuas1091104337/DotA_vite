<script setup>
import { useGetWindowScrollVal } from '@/composables';
import { useI18n } from "vue-i18n";
const { windowScrollMiddle } = useGetWindowScrollVal(),
      { t } = useI18n(),
      props = defineProps({
        indexData:{
          type:Object,
          default:() => ({})
        }
      }),
      emit = defineEmits(['DAskillsEle']),
      Pcolor = '#F28587',
      DAbox = ref(null),
      DAboxOffsetTop = ref(0),
      DAboxOffsetBottom = ref(0),
      Thoughts = ref(null),
      ThoughtsOffsetTop = ref(0),
      ThoughtsOffsetBottom = ref(0),
      supply = reactive({data:{}}),
      ThoughtsActive = computed(() => ThoughtsOffsetTop.value < windowScrollMiddle.value && ThoughtsOffsetBottom.value >= windowScrollMiddle.value),
      getDomOffset = () => {
        const et = DAbox.value.offsetTop,
              eh = DAbox.value.offsetHeight,
              tt = Thoughts.value.offsetTop,
              th = Thoughts.value.offsetHeight;
        DAboxOffsetTop.value = et;
        DAboxOffsetBottom.value = et + eh;
        ThoughtsOffsetTop.value = tt;
        ThoughtsOffsetBottom.value = tt + th;
        emit('DAskillsEle', et, et+eh);
        // console.log(et, et+eh, tt, tt + th);
        console.log(ThoughtsOffsetTop.value, ThoughtsOffsetBottom.value);
      };
onUpdated(() => {
  supply.data = props.indexData.supply;
  getDomOffset();
  console.log(ThoughtsOffsetTop.value);
  console.log(ThoughtsOffsetBottom.value);
});
window.addEventListener('resize',getDomOffset);
window.addEventListener('scroll',() => {
  console.log(ThoughtsActive.value);
  console.log(windowScrollMiddle.value);
  // console.log(ThoughtsOffsetTop < windowScrollMiddle);
});
</script>

<template>
<div ref="DAbox" class="DAskills DAbox">
  <div class="DAbox_wrap">
    <h2 class="DAbox__title">{{t('DAskillTitle')}}</h2>
    <ul class="DAskills__list">
      <li class="DAskills___item">
        <i class="DAskills___item_icon">
          <SvgIcon 
            name="icon-code" 
            className="svg-DAskills-shadow" 
            :color="Pcolor"
          />
        </i>
        <h3 class="DAskills___item_title">{{t('DAskillList1')}}</h3>
        <TextLoading v-if="!Object.keys(supply.data).length"/>
        <p 
          v-for="item in supply.data.develoer" 
          :key="item" 
          class="DAskills___item_txt"
        >
          {{item}}
        </p>
      </li>
      <li class="DAskills___item">
        <i class="DAskills___item_icon">
          <SvgIcon 
            name="icon-user" 
            className="svg-DAskills-shadow" 
            :color="Pcolor"
          />
        </i>
        <h3 class="DAskills___item_title">{{t('DAskillList2')}}</h3>
        <TextLoading v-if="!Object.keys(supply.data).length"/>
        <p 
          v-for="item in supply.data.interact" 
          :key="item" 
          class="DAskills___item_txt"
        >
         {{item}}
        </p>
      </li>
      <li class="DAskills___item">
        <i class="DAskills___item_icon">
          <SvgIcon 
            name="icon-search" 
            className="svg-DAskills-shadow" 
            :color="Pcolor"
          />
        </i>
        <h3 class="DAskills___item_title">SEO</h3>
        <TextLoading v-if="!Object.keys(supply.data).length"/>
        <p 
          v-for="item in supply.data.seo" 
          :key="item" 
          class="DAskills___item_txt"
        >
          {{item}}
        </p>
      </li> 
      <li class="DAskills___item">
        <i class="DAskills___item_icon">
          <SvgIcon 
            name="icon-window" 
            className="svg-DAskills-shadow" 
            :color="Pcolor"
          />
        </i>
        <h3 class="DAskills___item_title">UI / UX</h3>
        <TextLoading v-if="!Object.keys(supply.data).length"/>
        <p 
          v-for="item in supply.data.uiux" 
          :key="item" 
          class="DAskills___item_txt"
        >
          {{item}}
        </p>
        <p class="DAskills___item_note">{{t('DAskillTxt4')}}</p>
      </li>
    </ul>
  </div>
<!-- :class="['ChenYuHong DAbox',{active:DAboxOffsetTop < windowScrollMiddle && DAboxOffsetBottom > windowScrollMiddle}]" -->
  <!-- <div 
    ref="Thoughts" 
    :class="['DAthoughts',{active:ThoughtsOffsetTop < windowScrollMiddle && ThoughtsOffsetBottom > windowScrollMiddle}]"
  > -->
  <div ref="Thoughts" :class="['DAthoughts',{active:true}]">
    <div class="DAthoughts_wrap">
      <div class="DAthoughts__bg">
        <img class="DAthoughts__bg_img DAthoughts__bg_desk" src="@/assets/img/index/feelingsDesk.jpg" alt="desk face bg">
        <img class="DAthoughts__bg_img DAthoughts__bg_phone" src="@/assets/img/index/feelingsPhone.jpg" alt="phone face bg">
      </div>
    </div>
    <div class="DAthoughts__content">
      <p class="DAthoughts__content_txt">
        {{ThoughtsOffsetTop}}
        <!-- {{DAbox}} -->
        {{ThoughtsOffsetBottom}}
        {{t('DAtxt1')}}
        <span class="DAthoughts__content_txt_boint">{{t('DAtxtPoint1')}}</span>
        {{t('DAtxt2')}}
        <span class="DAthoughts__content_txt_boint">{{t('DAtxtPoint2')}}</span>
        {{t('DAtxt3')}}
        <span class="DAthoughts__content_txt_boint">{{t('DAtxtPoint3')}}</span>
        {{t('DAtxt4')}}
      </p>
    </div>
  </div>
</div>
</template>

<style lang="scss">
  .DAskills{
    > .DAbox_wrap{padding:15px 0}
    &__list{@extend %ul-reset}
    &___item{
      text-align:center;
      padding:15px 0;
      &_icon{
        width: 80px;
        height: 80px;
        display: block;
        margin:0 auto;
      }
      &_title{
        color:$Pcolor;
				font-size:36px;
				text-shadow:1px 1px 0 $dPcolor;
				transform:skew(-6deg);
      }
      &_txt{color:$dGrayColor;}
      &_note{
        color:$Pcolor;
        font-size: 14px;
        opacity: .8;
      }
    }
  }
  .DAthoughts{
    position: relative;
    &_wrap{
      position:absolute;
      top:0;
      left:0;
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
    }
    &__bg{
      width:100%;
			height:100%;
      // opacity: 0;
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
      &_phone{
        height: 100%;
      }
      &_desk{height:0;}
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
    &__content{
      padding: 135px 20px;
      &_txt{
        color:#fff;
        font-size: 30px;
        text-shadow:0 0 6px rgba(#000,.3),
                    0 0 4px rgba(#000,.3), 
                    0 0 2px rgba(#000,.3);
        &_boint{color: $BGcolor}
      }
    }
  }
  @media screen and (min-width: 640px) {
    .DAskills{
      &__list{
        display: flex;
        flex-wrap: wrap;
      }
      &___item{flex-basis: 50%}
    }
    .DAthoughts__content_txt{text-align:center;}
  }
  // 平板拿直的時候 portrait
  @media screen and (min-width: 600px) and (max-width: 1024px) and (orientation:portrait){
    .DAthoughts__bg_phone{
      width: 100%;
      height: auto;
    }
    .DAthoughts__content{padding: 200px 20px;}
  }
  // 手機、平板拿橫的時候
  @media screen and (max-width: 1024px) and (orientation:landscape){
    .DAthoughts{
      height: auto;
      &__bg{
        &_phone{
          height:0;
          opacity:0;
        }
        &_desk{
          width:auto;
          height:100%;
          opacity:1;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .DAskills___item{flex-basis: 25%}
    // .DAthoughts
    .DAthoughts{
      height:calc(100vh - ($DAheadH + $DAborderW));
      &__bg{
        &_phone{
          height:0;
          opacity:0;
        }
        &_desk{
          width:auto;
          height:100%;
          opacity:1;
        }
      }
      &__content{
        height: 100%;
        max-width: 1024px;
        display: flex;
        padding:0 50px;
        margin:0 auto;
        &_txt{margin: auto;}
      }
    }
  }
</style>