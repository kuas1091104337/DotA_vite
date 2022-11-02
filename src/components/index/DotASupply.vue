<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n(),
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
      supply = reactive({data:{}}),
      getDomOffset = () => {
        const et = DAbox.value.offsetTop,
              eh = DAbox.value.offsetHeight;
        DAboxOffsetTop.value = et;
        DAboxOffsetBottom.value = et + eh;
        emit('DAskillsEle', DAboxOffsetTop, DAboxOffsetBottom);
      };
onUpdated(() => {
  supply.data = props.indexData.supply;
  getDomOffset();
});
window.addEventListener('resize',getDomOffset);
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
  @media screen and (min-width: 640px) {
    .DAskills{
      &__list{
        display: flex;
        flex-wrap: wrap;
      }
      &___item{flex-basis: 50%}
    }
  }
  @media screen and (min-width: 1024px) {
    .DAskills___item{flex-basis: 25%}
  }
</style>