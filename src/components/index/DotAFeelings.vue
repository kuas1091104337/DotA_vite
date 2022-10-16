<script setup>
</script>

<template>
<div class="DAfeelings DAbox">
  <div class="DAfeelings_wrap">
    <div class="DAbox_wrap">
      <h2 class="DAfeelings__title DAbox__title">設計就是</h2>
      <p class="DAfeelings__txt">結合工程師的邏輯分析和藝術家的浪漫，就算拿到在空洞的文案或沒有內容的商品，都能與對方溝通，了解對方的想法。在參考相關資料後，運用邏輯分析找出其本質上的優點，最後靠想像力與美學把優點無限放大，就像把「如花」包裝成「像志玲姐姐」那樣。</p>
      <p class="DAfeelings__txt">因此驅使我表達出這一致性心理的真實感受，並非在於文字夠不夠華美，而是透過文字構築一個畫面和精確的視覺，能夠感動人心。</p>
    </div>
  </div>
</div>
</template>

<style lang="scss">
  @import "@/assets/scss/dotaBase.scss";
  .DAfeelings{
    height:calc(100vh - ($DAheadH + $DAborderW));
    overflow: hidden;
    position:relative;
    &.active:before{transform:scale3d(1,1,1);}
    &:before{
			content:"";
			width:100%;
			height:100%;
			background-image:radial-gradient(ellipse at center,
                         rgba(#000,0) 65%,
                         rgba(#000,.4) 100%
                       ),
                       url("@/assets/img/index/feelingsPhone.jpg");
			background-position:center;
			background-size:cover;
			display:block;
      box-shadow:0 0 10px 2px rgba(#000,.5) inset;
			position:fixed;
			top:0;
			left:0;
			z-index:-1;
      transform:scale3d(.85,.85,1);
      transition: transform 1s;
		}
    &_wrap{
      height: 100%;
      display: flex;
      align-items: center;
      padding:35px 15px;
      backdrop-filter:blur(6px);
      transition: backdrop-filter .6s;
      .active &{backdrop-filter:blur(0px);}
    }
    &__title{
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
    &__txt{
      color:#fff;
      line-height: 1.8;
      text-align: justify;
      text-indent: 1em;
      text-shadow:0 0 1px rgba(#000,.2),
                  0 1px 1px rgba(#000,.2), 
                  1px 0 1px rgba(#000,.2), 
                  0 -1px 1px rgba(#000,.2), 
                  -1px 0 1px rgba(#000,.2), 
                  1px 1px 1px rgba(#000,.2), 
                  -1px 1px 1px rgba(#000,.2), 
                  1px -1px 1px rgba(#000,.2), 
                  -1px -1px 1px rgba(#000,.2);
      margin-bottom: 2em;
    }
  }
  //	手機、平板拿橫的時候
  @media screen and (max-width: 1024px) and (orientation:landscape){
    .DAfeelings{
      height: auto;
      &:before{
        background-image:radial-gradient(ellipse at center,
                           rgba(#000,0) 50%,
                           rgba(#000,.4) 100%
                         ),
                         url("@/assets/img/index/feelingsDesk.jpg");
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .DAfeelings{
      // height: auto;
      &:before{
        background-image:radial-gradient(ellipse at center,
                           rgba(#000,0) 50%,
                           rgba(#000,.4) 100%
                         ),
                         url("@/assets/img/index/feelingsDesk.jpg");
      }
    }
	}
</style>