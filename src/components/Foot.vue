<script setup>
const BoxSide = reactive(['front','back','up','down','left','right']);
</script>

<template>
  <footer class="foot">
    <a class="sBox3D" title="與陳宥宏聯絡" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">
      <div class="sBox3D_space">
        <div v-for="item in BoxSide" :key="item" :class="`sBox3D__side sBox3D__${item}`"></div>
      </div> 
      <div class="sBox3D_logo">A</div>
    </a>
    <a class="foot_link" title="與陳宥宏聯絡" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">Email：kuas1091104337@gmail.com</a>
    <p class="foot_txt">© 2017 CHEN YU HONG</p>
  </footer>
</template>

<style lang="scss">
  .foot{
    color:#fff;
    font-weight:100;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-image: url("@/assets/img/index/HFbg.jpg");
    border-top: 5px solid #fff;
    .dotABoxSpace{margin:50px auto;}
    &_link, &_txt{margin-bottom: 15px;}
    &_link{
      color:#fff;
      padding: 3px 6px;
      border-radius: 3px;
      transition:color .4s, background-color .4s;
      &:hover{
        color:$BGcolor;
        background-color: rgba(#fff,.2);
      }
    }
    &_txt{
      font-size:14px;
      margin-top: 0;
    }
  }
  $Box3Dsize:80px;
  @keyframes sBox3D{
    0% {transform:translate3d(0,0,$Box3Dsize*-0.5) rotate3d(1,1,1,0deg);}
    25% {transform:translate3d(0,0,$Box3Dsize*-0.5) rotate3d(1,1,1,90deg);}
    50% {transform:translate3d(0,0,$Box3Dsize*-0.5) rotate3d(1,1,1,180deg);}
    75% {transform:translate3d(0,0,$Box3Dsize*-0.5) rotate3d(1,1,1,270deg);}
    100% {transform:translate3d(0,0,$Box3Dsize*-0.5) rotate3d(1,1,1,360deg);}
  }
  @keyframes sBox3Dlogo{
		0% {transform:translate3d(-50%,0,0);}
		100% {transform:translate3d(-50%,3px,0);}
  }
  .sBox3D{
		width:$Box3Dsize;
		height:$Box3Dsize;
		margin:40px auto 30px;
		position:relative;
		perspective:$Box3Dsize*2;
    &_space{
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      transform:translate3d(0,0,$Box3Dsize*-1) rotateY(45deg) rotateX(45deg);
      transform-style:preserve-3d;
      // animation:sBox3D 8s linear infinite;
    }
    &__side{
      width:100%;
			height:100%;
			background-color:#fff;
			box-shadow:0 0 0 1px #fff;
			position:absolute;
			top:0;
			left:0;
    }
    &__front{transform:rotateY(0deg) translate3d(0,0,$Box3Dsize*0.5);}
    &__back{transform:rotateY(180deg) translate3d(0,0,$Box3Dsize*0.5);}
    &__up{transform:rotateX(90deg) translate3d(0,0,$Box3Dsize*0.5);}
    &__down{transform:rotateX(270deg) translate3d(0,0,$Box3Dsize*0.5);}
    &__left{transform:rotateY(270deg) translate3d(0,0,$Box3Dsize*0.5);}
    &__right{transform:rotateY(90deg) translate3d(0,0,$Box3Dsize*0.5);}
    &_logo{
      color:$grayColor;
      font-size:55px;
      font-family:Arial;
      font-weight:bold;
      line-height:78px;
      text-align:center;
      user-select:none;
      width:66px;
      height:66px;
      position:absolute;
      top:7px;
      left:7px;
      // z-index:10;
      // transform:scale(1);
		  &:before{
        content:"";
        width:12px;
        height:12px;
        display:block;
        background-color:$grayColor;
        border-radius:50%;
        position:absolute;
        left:50%;
        top:1px;
        transform: translate3d(-50%,0,0);
        // animation:sBox3Dlogo .5s cubic-bezier(0.5, -0.75, 0.5, 1.75) infinite alternate;
      }
    }
	}
</style>