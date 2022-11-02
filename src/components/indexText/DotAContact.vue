<script setup>
import { onUpdated } from "vue";
import { useI18n } from "vue-i18n";
const {t} = useI18n(),
      emit = defineEmits(['DAcontactEle']),
      DAbox = ref(null),
      DAboxOffsetTop = ref(0),
      DAboxOffsetBottom = ref(0),
      BoxSide = reactive(['front','back','up','down','left','right']),
      getDomOffset = () => {
        const et = DAbox.value.offsetTop,
              eh = DAbox.value.offsetHeight;
        DAboxOffsetTop.value = et;
        DAboxOffsetBottom.value = et + eh;
        emit('DAcontactEle', et, et+eh);
        console.log(et, et+eh);
      };
onUpdated(() => getDomOffset());
window.addEventListener('resize',getDomOffset);
</script>

<template>
<div ref="DAbox" class="DAcontact DAbox">
  <h2 class="DAcontact_title DAbox__title">{{t('DAcontact')}}</h2>
  <Foot>
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
.DAcontact{
  background-image:url("@/assets/img/index/HFbg.jpg");
  border-bottom: 5px solid #fff;
  &_title{
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
}
</style>