<script setup>
import { useImgLoad } from '@/composables';
import axios from 'axios';
const bannerData = ref([]),
      { isImgLoaded, imgLoadFn } = useImgLoad();
onMounted(() => {
  // Secret delete link // https://designer.mocky.io/manage/delete/4f6baa92-def4-476e-a119-22f5e85dbceb/kuas1091104337
  axios.get('https://run.mocky.io/v3/4f6baa92-def4-476e-a119-22f5e85dbceb')
  .then((res) => {
    bannerData.value = res.data;
    console.log(bannerData.value);
  }).catch((error) => {
    console.log(error.response.data);
  });
});
</script>

<template>
<Head/>
<div class="DAwrap DAbanner">
  <!-- <div class="DAwrap_box DAbanner_wrap"></div> -->
  <div
    v-for="(item, idx) in bannerData" :key="item.src"
    class="DAbanner_item"
    :data-width="item.width"
    :data-height="item.height"
    style="width: 100px; height: 100px; top: 5px; left: 5px;"
  >
    <img :src="item.src">
  </div>
</div>
<Foot class="DAfoot-normal"/>
</template>

<style lang="scss">
.DAbanner{

  &_wrap{}
}
</style>