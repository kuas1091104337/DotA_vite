<script setup>
// import api from '@/json/index.json'; console.log(api.supply);
import { useI18n } from "vue-i18n";
import { useGetWindowScrollVal } from '@/composables';
import axios from 'axios';
const { windowScrollMiddle } = useGetWindowScrollVal(),
      {t} = useI18n(),
      BoxSide = reactive(['front','back','up','down','left','right']), 
      index = reactive({data:{}}),
      offsetVal = reactive({cyh:{}, skills:{}, thoughts:{}, works:{}}),
      CYHeleFn = (et,eb) => offsetVal.cyh = {top:et.value,bottom:eb.value},
      DAskillsEleFn = (et,eb) => offsetVal.skills = {top:et.value,bottom:eb.value},
      DAthoughtsEleFn = (et,eb) => offsetVal.thoughts = {top:et.value,bottom:eb.value},
      DAworksEleFn = (et,eb) => offsetVal.works = {top:et.value,bottom:eb.value},
      navCurrent = computed(() => {
        console.log(offsetVal);
        if(offsetVal.cyh.top < windowScrollMiddle.value && offsetVal.cyh.bottom >= windowScrollMiddle.value) return 1;
        if(offsetVal.skills.top < windowScrollMiddle.value && offsetVal.skills.bottom >= windowScrollMiddle.value) return 2;
        if(offsetVal.thoughts.top < windowScrollMiddle.value && offsetVal.thoughts.bottom >= windowScrollMiddle.value) return 3;
        if(offsetVal.works.top < windowScrollMiddle.value && offsetVal.works.bottom >= windowScrollMiddle.value) return 4;
      });
onMounted(() => {
  // Secret delete link // https://designer.mocky.io/manage/delete/d1921830-c7aa-45fb-8e75-b6ca832b9093/kuas1091104337
  axios.get('https://run.mocky.io/v3/d1921830-c7aa-45fb-8e75-b6ca832b9093')
  .then(res => index.data = res.data)
  .catch(error => console.error(error.response.data));
});
const resizeEvent = new Event('resize');
window.dispatchEvent(resizeEvent);
</script>

<template>
  <div class="DA">
    <!-- <IdxHead :navCurrentNum="navCurrent" :offsetObj="offsetVal"/> -->
    <Head>
      <template #title>
        <h1 class="head__title head__title-idx">
          <i class="head__title__icon"><SvgIcon name="icon-dota" color="#fff"/></i>
          <span class="head__title__txt">{{t('DAheadTitle2')}}</span>
        </h1>
      </template>
      <template #nav="{ headH, headBtnFn }">
        <DotANav :navCurrentNum="navCurrent" :offsetObj="offsetVal" :headH="headH" :headBtnFn="headBtnFn" />
      </template>
    </Head>
    <ChenYuHong @CYHele="CYHeleFn"/>
    <DotASupply :indexData="index.data" @DAskillsEle="DAskillsEleFn"/>
    <DotAFeelings @DAthoughtsEle="DAthoughtsEleFn"/>
    <DotAWorks :indexData="index.data" @DAworksEle="DAworksEleFn"/>
    <Foot class="DAfoot-normal">
      <a class="Box3D mBox3D" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">
        <span class="Box3D_space mBox3D_space">
          <span 
            v-for="item in BoxSide" 
            :key="item" 
            :class="`Box3D__side mBox3D__side mBox3D__${item}`"
          />
        </span> 
        <span class="Box3D_logo mBox3D_logo">A</span>
      </a>
    </Foot>
  </div>
</template>

<style lang="scss">
.DA{
  padding-top:$DAheadH;
  &box{
    border-color: #fff;
    border-style: solid;
    border-width: $DAborderW $DAborderW 0;
    &__title{
      text-align:center;
      letter-spacing: 4px;
      transform:skew(-5deg);
    }
  }
}
// 1.ChenYuHong, 2.DAskills, 3.DAthoughts, 4.DAworks
.ChenYuHong, .DAskills, .DAworks{
  .DAbox__title{	
    color:#fff;
    text-shadow:0 1px 2px rgba(#000,.25),
                0 1px 0 $BGcolor,
                1px 0 0 $BGcolor,
                0 -1px 0 $BGcolor,
                -1px 0 0 $BGcolor,
                1px 1px 0 $BGcolor, 
                -1px 1px 0 $BGcolor,
                1px -1px 0 $BGcolor,
                -1px -1px 0 $BGcolor,
                0 2px 0 $BGcolor, 
                2px 0 0 $BGcolor, 
                0 -2px 0 $BGcolor, 
                -2px 0 0 $BGcolor, 
                1px 2px 0 $BGcolor, 
                -1px 2px 0 $BGcolor, 
                1px -2px 0 $BGcolor, 
                -1px -2px 0 $BGcolor, 
                2px 1px 0 $BGcolor, 
                -2px 1px 0 $BGcolor, 
                2px -1px 0 $BGcolor, 
                -2px -1px 0 $BGcolor,
                2px 2px 0 $BGcolor, 
                -2px 2px 0 $BGcolor, 
                2px -2px 0 $BGcolor, 
                -2px -2px 0 $BGcolor,
                2px 2px 8px rgba(#000,.25),
                -2px 2px 8px rgba(#000,.25);
  }
}
.DAskills, .DAthoughts, .DAworks{
  .DAbox__title{font-size:50px;}
}
.DAskills, .DAworks{background-image:url("@/assets/img/index/divBg1.jpg")}
@media screen and (min-width: 960px) {
  .DAbox_wrap{
    max-width: 1024px;
    margin: auto;
  }
}
@media screen and (min-width: 1024px) {
  .DAskills, .DAthoughts, .DAworks{
    .DAbox__title{font-size:56px;}
  }
}
</style>