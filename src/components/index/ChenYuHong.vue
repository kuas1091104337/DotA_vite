<script setup>
import { useGetWindowScrollVal } from '@/composables';
import { useI18n } from "vue-i18n";
const { windowScrollMiddle } = useGetWindowScrollVal(),
      { t } = useI18n(),
      emit = defineEmits(['CYHele']),
      DAbox = ref(null),
      DAboxOffsetTop = ref(0),
      DAboxOffsetBottom = ref(0),
      BoxSide = reactive(['front','back','up','down','left','right']),
      getDomOffset = () => {
        const et = DAbox.value.offsetTop,
              eh = DAbox.value.offsetHeight;
        DAboxOffsetTop.value = et;
        DAboxOffsetBottom.value = et + eh;
        emit('CYHele', DAboxOffsetTop, DAboxOffsetBottom);
      };
onMounted(() => getDomOffset());
window.addEventListener('resize',getDomOffset);
</script>

<template>
<div ref="DAbox" :class="['ChenYuHong DAbox',{active:DAboxOffsetTop < windowScrollMiddle && DAboxOffsetBottom >= windowScrollMiddle}]">
  <div class="DAbox_wrap">
    <div class="Box3D pBox3D">
      <div class="Box3D_space pBox3D_space">
        <div v-for="item in BoxSide" :key="item" :class="`Box3D__side pBox3D__Pside pBox3D__P${item}`"></div>
        <div v-for="item in BoxSide" :key="item" :class="`pBox3D__Sside pBox3D__S${item}`">Dot A</div>
      </div> 
      <div class="Box3D_logo pBox3D_logo">A</div>
    </div>
    <h2 class="ChenYuHong__title DAbox__title">{{t('DAtitle1')}}<span class="ChenYuHong__title_txt">{{t('DAtitle2')}}</span></h2>
    <p class="ChenYuHong__txt">{{t('DAmainTxt1')}}</p>
    <p class="ChenYuHong__txt">{{t('DAmainTxt2')}}</p>
  </div>
</div>
</template>

<style lang="scss">
  .ChenYuHong{
    background-image:radial-gradient(ellipse at center,
                       rgba($dBGcolor,0) 60%,
                       rgba($dBGcolor,.1) 100%
                     ),
                     url("@/assets/img/index/divBg2.jpg");
		box-shadow:0 0 10px 1px rgba(#000,.15) inset;
    padding: 0 20px;
    > .DAbox_wrap{padding:35px 0;}
    &__title{
      font-size:60px;
      &_txt{
        font-size:72px;
			  display:block;
      }
    }
    &__txt{
      color:$dGrayColor;
      line-height: 1.4;
    }
  }
  @keyframes pBox3D{
    0% {transform:translate3d(0,0,$PigBox3Dsize*-0.5) rotate3d(1,1,1,0deg);}
    25% {transform:translate3d(0,0,$PigBox3Dsize*-0.5) rotate3d(1,1,1,90deg);}
    50% {transform:translate3d(0,0,$PigBox3Dsize*-0.5) rotate3d(1,1,1,180deg);}
    75% {transform:translate3d(0,0,$PigBox3Dsize*-0.5) rotate3d(1,1,1,270deg);}
    100% {transform:translate3d(0,0,$PigBox3Dsize*-0.5) rotate3d(1,1,1,360deg);}
  }
  .pBox3D{
    width:$PigBox3Dsize;
		height:$PigBox3Dsize;
		margin:40px auto 65px;
    perspective:$PigBox3Dsize*2;
    &:hover{
      .pBox3D{
        &__Pside{
          background-color:rgba($GrayColor, .2);
          box-shadow:none;
        }
        &__Pfront{transform:rotateY(0deg) translate3d(0,0,$PigBox3Dsize*1.68);}
        &__Pback{transform:rotateY(180deg) translate3d(0,0,$PigBox3Dsize*1.68);}
        &__Pup{transform:rotateX(90deg) translate3d(0,0,$PigBox3Dsize*1.68);}
        &__Pdown{transform:rotateX(270deg) translate3d(0,0,$PigBox3Dsize*1.68);}
        &__Pleft{transform:rotateY(270deg) translate3d(0,0,$PigBox3Dsize*1.68);}
        &__Pright{transform:rotateY(90deg) translate3d(0,0,$PigBox3Dsize*1.68);}
        // 因為變大 scale3d(1.25,1.25,1)，所以Z軸要向外推變大的面積 translate3d( 0, 0, $MiddleBox3Dsize*(0.5+0.125) )  
        &__Sfront{transform:rotateY(0deg) translate3d(0,0,$MiddleBox3Dsize*0.625) scale3d(1.25,1.25,1);} 
        &__Sback{transform:rotateY(180deg) rotateZ(90deg) translate3d(0,0,$MiddleBox3Dsize*0.625) scale3d(1.25,1.25,1);}
        &__Sup{transform:rotateX(90deg) translate3d(0,0,$MiddleBox3Dsize*0.625) scale3d(1.25,1.25,1);}
        &__Sdown{transform:rotateX(270deg) rotateZ(270deg) translate3d(0,0,$MiddleBox3Dsize*0.625) scale3d(1.25,1.25,1);}
        &__Sleft{transform:rotateY(270deg) translate3d(0,0,$MiddleBox3Dsize*0.625) scale3d(1.25,1.25,1);}
        &__Sright{transform:rotateY(90deg) rotateZ(90deg) translate3d(0,0,$MiddleBox3Dsize*0.625) scale3d(1.25,1.25,1);}
      }
      > .pBox3D_logo{
        color:transparent;
				&:before{background-color:transparent;}
      }
    }
    &_space{
      transform:translate3d(0,0,$PigBox3Dsize*-0.5) rotateY(45deg) rotateX(45deg);
      .active &{animation:pBox3D 8s linear infinite;}
    }
    &__Pside{
			background-color:$GrayColor;
			box-shadow:0 0 0 1px $GrayColor;
			transition:background-color .4s, box-shadow .4s, transform .4s;
    }
    &__Pfront{transform:rotateY(0deg) translate3d(0,0,$PigBox3Dsize*0.5);}
    &__Pback{transform:rotateY(180deg) translate3d(0,0,$PigBox3Dsize*0.5);}
    &__Pup{transform:rotateX(90deg) translate3d(0,0,$PigBox3Dsize*0.5);}
    &__Pdown{transform:rotateX(270deg) translate3d(0,0,$PigBox3Dsize*0.5);}
    &__Pleft{transform:rotateY(270deg) translate3d(0,0,$PigBox3Dsize*0.5);}
    &__Pright{transform:rotateY(90deg) translate3d(0,0,$PigBox3Dsize*0.5);}
    &__Sside{
      color:#fff;
			font-size:12px;
			font-weight:100;
      text-shadow: 0 0 2px rgba(#000,.8);
			text-align:right;
			user-select:none;
			width:$MiddleBox3Dsize;
			height:$MiddleBox3Dsize;
			background-color:$BGcolor;
      background-image: url("@/assets/img/index/me.jpg");
      background-size:cover;
			box-shadow:0 0 0 1px $BGcolor;
			padding:66px 2px 0 0;
			position:absolute;
			top:calc(($PigBox3Dsize - $MiddleBox3Dsize) / 2);
			left:calc(($PigBox3Dsize - $MiddleBox3Dsize) / 2);
      transition:transform .4s cubic-bezier(.9,1,.9,1.5);
    }
    &__Sfront{transform:rotateY(0deg) translate3d(0,0,$MiddleBox3Dsize*0.5);} 
    &__Sback{transform:rotateY(180deg) rotateZ(90deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__Sup{transform:rotateX(90deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__Sdown{transform:rotateX(270deg) rotateZ(270deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__Sleft{transform:rotateY(270deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__Sright{transform:rotateY(90deg) rotateZ(90deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &_logo{
      color:#fff;
      font-size:$PigBox3Dsize*0.675;
      line-height:$PigBox3Dsize*0.97;
      width:$PigBox3Dsize*0.8;
      height:$PigBox3Dsize*0.8;
      transition:color .4s;
      &:before{
        width:$PigBox3Dsize*0.15;
        height:$PigBox3Dsize*0.15;
        background-color:#fff;
        transition:background-color .4s;
      }
    }
  }
  @media screen and (min-width: 640px) {
		.ChenYuHong__title{
      font-size: 62px;
      &_txt{
        font-size: 62px;
        display: inline;
      }
    }
	}
  @media screen and (min-width: 1024px) {
    .ChenYuHong{
      &__title{font-size: 68px;}
      &__txt{padding:0 50px;}
    }
  }
</style>