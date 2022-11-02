<script setup>
import { useI18n } from "vue-i18n";
const {t} = useI18n(),
      props = defineProps({
        navCurrentNum:{
          type:Number,
          default:0
        },
        offsetObj:{
          type:Object,
          default:() => ({})
        },
        headH:{
          type:Number,
          default:0
        },
        headBtnFn:{
          type:Function,
          default:() => {}
        }
      }),
      scrollClickHandle = (offsetTop,e) => {
        console.log(offsetTop);
        console.log(props.offsetObj);
        if(e.currentTarget.classList.contains('active')) return false;
        window.scrollTo({top:offsetTop - props.headH,behavior:'smooth'});
        props.headBtnFn();
      };
onUpdated(() => {
  
});
</script>

<template>
  <li :class="['head__menu_item',{active:props.navCurrentNum === 1}]" @click="scrollClickHandle(props.offsetObj.cyh.top, $event)">
    <a class="head__menu__link">
      {{t('DAabout')}}
      <span class="head__menu__link_frontSide">{{t('DAabout')}}</span>
      <span class="head__menu__link_backSide">{{t('DAabout')}}</span>
    </a>
  </li>
  <li :class="['head__menu_item',{active:props.navCurrentNum === 2}]" @click="scrollClickHandle(props.offsetObj.skills.top, $event)">
    <a class="head__menu__link">
      {{t('DAskill')}}
      <span class="head__menu__link_frontSide">{{t('DAskill')}}</span>
      <span class="head__menu__link_backSide">{{t('DAskill')}}</span>
    </a>
  </li>
  <li :class="['head__menu_item',{active:props.navCurrentNum === 3}]" @click="scrollClickHandle(props.offsetObj.works.top, $event)">
    <a class="head__menu__link">
      {{t('DAwork')}}
      <span class="head__menu__link_frontSide">{{t('DAwork')}}</span>
      <span class="head__menu__link_backSide">{{t('DAwork')}}</span>
    </a>
  </li>
  <li :class="['head__menu_item',{active:props.navCurrentNum === 4}]" @click="scrollClickHandle(props.offsetObj.contact.top, $event)">
    <a class="head__menu__link">
      {{t('DAcontact')}}
      <span class="head__menu__link_frontSide">{{t('DAcontact')}}</span>
      <span class="head__menu__link_backSide">{{t('DAcontact')}}</span>
    </a>
  </li>
</template>

<style lang="scss">
  
</style>