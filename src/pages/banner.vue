<script setup>
import { useThrottleDebounce } from '@/composables';
import axios from 'axios';
const { debounce } = useThrottleDebounce(),
      bnWrap = ref(null),
      bnWrapWidth = ref(0),
      bannerData = ref([]),
      popup = reactive({imgIdx:0,imgSrc:'',portrait:false,show:false}),
      waterfallData = computed(() => {
        if(!bnWrapWidth.value && !bannerData.value.length) return false;
        const columnWidth = 300, gutter = 5, wfArr = [],
              waterfall = reactive({offsetY:[], column:1, columnWidth:columnWidth});
        waterfall.column = Math.ceil(bnWrapWidth.value / columnWidth);
        waterfall.columnWidth = Math.round(bnWrapWidth.value / waterfall.column);
        bannerData.value.forEach(el => {
          const hwRatio = el.height / el.width,
                i = waterfall.offsetY.length < waterfall.column ? waterfall.offsetY.length : waterfall.offsetY.indexOf(Math.min(...waterfall.offsetY)),
                itemHeight = Math.round((waterfall.columnWidth - gutter*2) * hwRatio);
          if(waterfall.offsetY.length === i) waterfall.offsetY.push(gutter);
          wfArr.push({
            width:waterfall.columnWidth - 2*gutter,
            height:itemHeight,
            src:el.src,
            top:waterfall.offsetY[i],
            left:waterfall.columnWidth*i + gutter
          });
          waterfall.offsetY[i] += itemHeight + gutter*2;
        });
        return wfArr;
      }),
      bnWrapResize = () => bnWrapWidth.value = bnWrap.value.offsetWidth,
      popupShowFn = (idx,src,e) => {
        if(e.currentTarget.classList.contains('error')) return false;
        if(e.target.offsetHeight > e.target.offsetWidth) popup.portrait = true;
        popup.show = true;
        popup.imgSrc = src;
        popup.imgIdx = idx;
      },
      popupHideFn = () => {
        popup.portrait = false;
        popup.show = false;
        popup.imgSrc = '';
      },
      popupNextFn = () => {
        popup.imgIdx++;
        popupImgChangeFn(popup.imgIdx);
      },
      popupPrevFn = () => {
        popup.imgIdx--;
        popupImgChangeFn(popup.imgIdx);
      },
      popupImgChangeFn = (idx) => {
        idx = (idx + bannerData.value.length) % bannerData.value.length;
        popup.imgSrc = bannerData.value[idx].src; 
        popup.portrait = bannerData.value[idx].height > bannerData.value[idx].width ? true : false;
        const img = new Image();
        img.src = popup.imgSrc;
        img.onerror = () => {
          popup.portrait = false;
          popup.show = false;
          popup.imgSrc = '';
        };
      };
onMounted(() => {
  // img error delete link // https://designer.mocky.io/manage/delete/5a9fa123-b0b0-47db-82da-77409b3eebab/kuas1091104337
  // axios.get('https://run.mocky.io/v3/5a9fa123-b0b0-47db-82da-77409b3eebab')
  // Secret delete link // https://designer.mocky.io/manage/delete/66ef7db7-c5cb-463e-9420-f1d7b8728856/kuas1091104337
  axios.get('https://run.mocky.io/v3/66ef7db7-c5cb-463e-9420-f1d7b8728856')
  .then((res) => {
    bannerData.value = res.data;
  }).catch((error) => {
    console.log(error.response.data);
  });
  document.body.classList.add('DAbannerBody');
  bnWrapResize();
  window.addEventListener('resize',debounce(bnWrapResize,400));
});
onUnmounted(() => {
  document.body.classList.remove('DAbannerBody');
  window.removeEventListener('resize',debounce(bnWrapResize,400));
});
</script>

<template>
<Head/>
<div class="DAbanner">
  <div class="DAbanner_wrap" ref="bnWrap">
    <WaterfallLoadBox 
      v-for="(item,idx) in waterfallData"
      :key="item.src"
      :imgWidth="item.width"
      :imgHeight="item.height"
      :imgTop="item.top"
      :imgLeft="item.left"
      :imgSrc="item.src"
      @click="popupShowFn(idx,item.src,$event)"
    />
    <!-- <div
      v-for="(item, idx) in waterfallData" :key="item.src"
      class="DAbanner__item"
      :style="{width:item.width+'px', height:item.height+'px', top:item.top+'px',left:item.left+'px'}"
    ><img class="DAbanner__item_img" :src="item.src"></div> -->
  </div>
  <div :class="['DAbanner_popup',{portrait:popup.portrait},{show:popup.show}]" @click="popupHideFn">
    <img class="DAbanner_popup_img" :src="popup.imgSrc" @click.stop="">
    <div class="DAbanner_popup_next" @click.stop="popupNextFn"></div>
    <div class="DAbanner_popup_prev" @click.stop="popupPrevFn"></div>
  </div>
</div>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
.DAbanner{
  height: calc(100vh - 44px);
  background-image:url("@/assets/img/index/divBg1.jpg");
  border:$DAborderW solid #fff;
  flex-shrink: 0;
  overflow: auto;
  padding:5px;
  margin-top:44px;
  &Body{
    overflow-y: scroll;
    > #app{height: auto;}
  }
  &_wrap{position: relative;}
  &_popup{
    width: 100%;
    height: 100%;
    background-color:rgba(#000,.925);
    opacity:0;
    overflow:auto;
    position:fixed;
    top:0;
    left:0;
    z-index:-1;
    transform:scale3d(.8,.8,1);
    transition:opacity .25s, transform .25s;
    &.show{
      opacity:1;
      z-index:2;
      transform:scale3d(1,1,1);
    }
    &_prev, &_next{
      width: 44px;
      height: 44px;
      box-shadow: 0 0 3px 1px rgba(#000,.3);
      background-color:rgba(#fff,.8);
      margin-top: -22px;
      position:absolute;
      top:50%;
      &:before, &:after{
        content:"";
        width: 18px;
        height: 2px;
        background-color:#000;
        // border-radius: 2px;
        margin:auto;
        position:absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
      }
      &:before{transform:rotate3d(0,0,1,45deg);}
      &:after{transform:rotate3d(0,0,1,-45deg);}
    }
    &_next{
      right:0;
      &:before, &:after{transform-origin:calc(100% - 1px) 50%}
    }
    &_prev{
      left:0;
      &:before, &:after{transform-origin:1px 50%}
    }
    &_img{
      width: 100vmin;
      margin:auto;
      position:absolute;
      top:0;
      right:0;
      left:0;
      bottom:0;
      .portrait &{
        width: auto;
        height: 100vmin;
      }
    }
  }
}
</style>