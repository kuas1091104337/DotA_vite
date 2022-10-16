<script setup>
import { useGetWindowScrollVal } from '@/composables';
// let timer = null;
const { windowScrollBottom } = useGetWindowScrollVal(),
      foot = ref(null),
      footOffsetTop = ref(0),
      BoxSide = reactive(['front','back','up','down','left','right']);//,
      // windowResizeHandle = () => {
      //   if(timer) clearTimeout(timer);
      //   timer = setTimeout(() => {
      //     footOffsetTop.value = foot.value.offsetTop;
      //   },100);
      // };
onUpdated(() => footOffsetTop.value = foot.value.offsetTop);
// onMounted(() => {
//   footOffsetTop.value = foot.value.offsetTop
//   window.addEventListener('resize',windowResizeHandle);
// });
// onUnmounted(() => {
//   window.removeEventListener('resize',windowResizeHandle);
// });
</script>

<template>
  <footer ref="foot" :class="['foot',{active:footOffsetTop < windowScrollBottom}]">
    <slot>
      <router-link to="/" class="Box3D mBox3D" title="回 Dot A 首頁">
        <span class="Box3D_space mBox3D_space">
          <span v-for="item in BoxSide" :key="item" :class="`Box3D__side mBox3D__side mBox3D__${item}`"></span>
        </span>
        <span class="Box3D_logo mBox3D_logo">A</span>
      </router-link>
    </slot>
    <a class="foot_link" title="與陳宥宏聯絡" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">Email：kuas1091104337@gmail.com</a>
    <p class="foot_txt">© 2017 CHEN YU HONG</p>
  </footer>
</template>

<style lang="scss">
  @import "@/assets/scss/dotaBase.scss";
  .foot{
    color:#fff;
    font-weight:300;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-image: url("@/assets/img/index/HFbg.jpg");
    border-top: 5px solid #fff;
    .dotABoxSpace{margin:50px auto;}
    &_link, &_txt{margin-bottom: 15px;}
    &_link{
      color:#fff;
      font-size:14px;
      padding: 3px 6px;
      border-radius: 3px;
      transition:color .4s, background-color .4s;
      &:hover{
        color:$BGcolor;
        background-color: rgba(#fff,.25);
      }
    }
    &_txt{
      font-size:12px;
      margin-top: 0;
    }
  }
  @keyframes MsizeBox3dRotate{
    0% {transform:translate3d(0,0,$MiddleBox3Dsize*-0.5) rotate3d(1,1,1,0deg);}
    25% {transform:translate3d(0,0,$MiddleBox3Dsize*-0.5) rotate3d(1,1,1,90deg);}
    50% {transform:translate3d(0,0,$MiddleBox3Dsize*-0.5) rotate3d(1,1,1,180deg);}
    75% {transform:translate3d(0,0,$MiddleBox3Dsize*-0.5) rotate3d(1,1,1,270deg);}
    100% {transform:translate3d(0,0,$MiddleBox3Dsize*-0.5) rotate3d(1,1,1,360deg);}
  }
  .mBox3D{
		width:$MiddleBox3Dsize;
		height:$MiddleBox3Dsize;
		margin:40px auto 30px;
		perspective:$MiddleBox3Dsize*2;
    &_space{
      transform:translate3d(0,0,$MiddleBox3Dsize*-0.5) rotateY(45deg) rotateX(45deg);
      .active &{animation:MsizeBox3dRotate 8s linear infinite;}
    }
    &__side{
			background-color:#fff;
			box-shadow:0 0 0 1px #fff;
    }
    &__front{transform:rotateY(0deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__back{transform:rotateY(180deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__up{transform:rotateX(90deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__down{transform:rotateX(270deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__left{transform:rotateY(270deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &__right{transform:rotateY(90deg) translate3d(0,0,$MiddleBox3Dsize*0.5);}
    &_logo{
      color:$GrayColor;
      font-size:$MiddleBox3Dsize*0.675;
      line-height:$MiddleBox3Dsize*0.97;
      width:$MiddleBox3Dsize*0.8;
      height:$MiddleBox3Dsize*0.8;
		  &:before{
        width:$MiddleBox3Dsize*0.15;
        height:$MiddleBox3Dsize*0.15;
        background-color:$GrayColor;
      }
    }
	}
</style>