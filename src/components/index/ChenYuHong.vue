<script setup>
const BoxSide = reactive(['front','back','up','down','left','right']);
</script>

<template>
<div class="ChenYuHong DAbox">
  <div class="DAbox_wrap">
    <div class="pBox3D">
      <div class="pBox3D_space">
        <div v-for="item in BoxSide" :key="item" :class="`pBox3D__Pside pBox3D__P${item}`"></div>
        <div v-for="item in BoxSide" :key="item" :class="`pBox3D__Sside pBox3D__S${item}`">Dot A</div>
      </div> 
      <div class="pBox3D_logo">A</div>
    </div>
    <h2 class="ChenYuHong__title DAbox__title">嗨，我是<span class="ChenYuHong__title_txt">陳宥宏</span></h2>
    <p class="ChenYuHong__txt">我是個網頁設計師(或前端設計)，喜歡切特別的RWD版型和寫網頁的互動功能，能做出有設計感又美美的作品，也可以串接API更新畫面。我有專業的設計和理工科背景，目前已經累積七年的設計相關經驗。</p>
    <p class="ChenYuHong__txt">這些年在生活與工作上對設計與美學的喜好沒有絲毫削減，卻在察覺變敏銳的過程中得到更多啟發，畢竟可以思考、可以描述，不在於一個齒輪上要栓三個螺絲這樣的制式，最大的幸福與成就感是來自，創作上的喜悅與對美學的堅持，也不斷在這些過程中被擴張和深化。</p>
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
		box-shadow:0 0 10px 1px rgba(#000,.15) inset,
               0 -5px 0 #fff;
    padding: 0 15px;
    > .DAbox_wrap{padding:35px 0;}
    &__title{
      font-size:60px;
			line-height:1.2;
      &_txt{
        font-size:72px;
			  display:block;
      }
    }
    &__txt{
      color: #4d4d4d;
      text-align: justify;
      text-indent: 1em;
      line-height: 1.8;
    }
  }
  $pBox3Dsize:100px;
  $sBox3Dsize:80px;
  @keyframes pBox3D{
    0% {transform:translate3d(0,0,$pBox3Dsize*-0.5) rotate3d(1,1,1,0deg);}
    25% {transform:translate3d(0,0,$pBox3Dsize*-0.5) rotate3d(1,1,1,90deg);}
    50% {transform:translate3d(0,0,$pBox3Dsize*-0.5) rotate3d(1,1,1,180deg);}
    75% {transform:translate3d(0,0,$pBox3Dsize*-0.5) rotate3d(1,1,1,270deg);}
    100% {transform:translate3d(0,0,$pBox3Dsize*-0.5) rotate3d(1,1,1,360deg);}
  }
  @keyframes pBox3Dlogo{
		0% {transform:translate3d(-50%,0,0);}
		100% {transform:translate3d(-50%,4px,0);}
  }
  .pBox3D{
    width:$pBox3Dsize;
		height:$pBox3Dsize;
		margin:40px auto 65px;
		position:relative;
    perspective:$pBox3Dsize*2;
    &:hover{
      .pBox3D{
        &__Pside{
          background-color:rgba($grayColor, .168);
          box-shadow:none;
        }
        &__Pfront{transform:rotateY(0deg) translate3d(0,0,$pBox3Dsize*1.68);}
        &__Pback{transform:rotateY(180deg) translate3d(0,0,$pBox3Dsize*1.68);}
        &__Pup{transform:rotateX(90deg) translate3d(0,0,$pBox3Dsize*1.68);}
        &__Pdown{transform:rotateX(270deg) translate3d(0,0,$pBox3Dsize*1.68);}
        &__Pleft{transform:rotateY(270deg) translate3d(0,0,$pBox3Dsize*1.68);}
        &__Pright{transform:rotateY(90deg) translate3d(0,0,$pBox3Dsize*1.68);}
        &__Sfront{transform:rotateY(0deg) translate3d(0,0,$pBox3Dsize*0.5) scale3d(1.25,1.25,1);} 
        &__Sback{transform:rotateY(180deg) rotateZ(90deg) translate3d(0,0,$pBox3Dsize*0.5) scale3d(1.25,1.25,1);}
        &__Sup{transform:rotateX(90deg) translate3d(0,0,$pBox3Dsize*0.5) scale3d(1.25,1.25,1);}
        &__Sdown{transform:rotateX(270deg) rotateZ(270deg) translate3d(0,0,$pBox3Dsize*0.5) scale3d(1.25,1.25,1);}
        &__Sleft{transform:rotateY(270deg) translate3d(0,0,$pBox3Dsize*0.5) scale3d(1.25,1.25,1);}
        &__Sright{transform:rotateY(90deg) rotateZ(90deg) translate3d(0,0,$pBox3Dsize*0.5) scale3d(1.25,1.25,1);}
      }
      > .pBox3D_logo{
        color:transparent;
				&:before{background-color:transparent;}
      }
    }
    &_space{
      width:100%;
      height:100%;
      position: absolute;
      top: 0;
      left: 0;
      transform:translate3d(0,0,$pBox3Dsize*-0.5) rotateY(45deg) rotateX(45deg);
      transform-style:preserve-3d;
      .active &{animation:pBox3D 8s linear infinite;}
    }
    &__Pside{
      width:100%;
			height:100%;
			background-color:$grayColor;
			box-shadow:0 0 0 1px $grayColor;
			position:absolute;
			top:0;
			left:0;
			transition:background-color .5s, box-shadow .5s, transform .5s;
    }
    &__Pfront{transform:rotateY(0deg) translate3d(0,0,$pBox3Dsize*0.5);}
    &__Pback{transform:rotateY(180deg) translate3d(0,0,$pBox3Dsize*0.5);}
    &__Pup{transform:rotateX(90deg) translate3d(0,0,$pBox3Dsize*0.5);}
    &__Pdown{transform:rotateX(270deg) translate3d(0,0,$pBox3Dsize*0.5);}
    &__Pleft{transform:rotateY(270deg) translate3d(0,0,$pBox3Dsize*0.5);}
    &__Pright{transform:rotateY(90deg) translate3d(0,0,$pBox3Dsize*0.5);}
    &__Sside{
      color:#fff;
			font-size:12px;
			font-weight:100;
      text-shadow: 0 0 2px rgba(#000,.8);
			text-align:right;
			user-select:none;
			width:$sBox3Dsize;
			height:$sBox3Dsize;
			background-color:$BGcolor;
      background-image: url("@/assets/img/index/me.jpg");
      background-size:cover;
			box-shadow:0 0 0 1px $BGcolor;
			padding:66px 2px 0 0; 
			position:absolute;
			top:($pBox3Dsize - $sBox3Dsize)/2;
			left:($pBox3Dsize - $sBox3Dsize)/2;
      transition:transform .5s cubic-bezier(.9,1,.9,1.5);
    }
    &__Sfront{transform:rotateY(0deg) translate3d(0,0,$sBox3Dsize*0.5);} 
    &__Sback{transform:rotateY(180deg) rotateZ(90deg) translate3d(0,0,$sBox3Dsize*0.5);}
    &__Sup{transform:rotateX(90deg) translate3d(0,0,$sBox3Dsize*0.5);}
    &__Sdown{transform:rotateX(270deg) rotateZ(270deg) translate3d(0,0,$sBox3Dsize*0.5);}
    &__Sleft{transform:rotateY(270deg) translate3d(0,0,$sBox3Dsize*0.5);}
    &__Sright{transform:rotateY(90deg) rotateZ(90deg) translate3d(0,0,$sBox3Dsize*0.5);}
    &_logo{
      color:#fff;
      font-size:66px;
      font-family:Arial;
      font-weight:bold;
      line-height:98px;
      text-align:center;
      user-select:none;
      width:$sBox3Dsize;
      height:$sBox3Dsize;
      position:absolute;
      top:($pBox3Dsize - $sBox3Dsize)/2;
      left:($pBox3Dsize - $sBox3Dsize)/2;
      // z-index:10;
		  // transform:scale(1);
      transition:color .8s;
      &:before{
        content:"";
        width:16px;
        height:16px;
        display:block;
        background-color:#fff;
        border-radius:50%;
        position: absolute;
        left: 50%;
        top:2px;
        transform:translate3d(-50%,0,0);
        transition:background-color .8s;
        .active &{animation:pBox3Dlogo .5s cubic-bezier(0.5, -0.75, 0.5, 1.75) infinite alternate;}
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
    .ChenYuHong__title{font-size: 68px;}
  }
</style>