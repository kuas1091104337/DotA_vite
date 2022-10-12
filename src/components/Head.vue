<script setup>
const menuOpen = ref(false),
      langOpen = ref(false),
      headBgFn = () => {
        menuOpen.value = false;
        langOpen.value = false;
      },
      menuFn = () => menuOpen.value = !menuOpen.value,
      menuClose = () => menuOpen.value = false,
      langMenuFn = () => langOpen.value = !langOpen.value;
</script>

<template>
  <header :class="['head',{open:menuOpen}]">
    <div class="head_bg" @click="headBgFn"></div>
    <div class="head_wrap">
      <h1 class="head__title"><span class="head__title_txt">Dot A 陳宥宏的作品網站</span></h1>
      <div class="head__mBtn" @click="menuFn">
        <div class="head__mBtn_wrap"><span class="head__mBtn__bar"></span></div>
      </div>
      <ul class="head__menu">
        <!-- v-scroll-active="{ fixHeadName:'.head', addClass:'active', targetName:'.ChenYuHong' }" -->
        <li class="head__menu_item">
          <a class="head__menu__link" data-name="關於我" @click="menuClose">關於我</a>
        </li>
        <!-- v-scroll-active="{ fixHeadName:'.head', addClass:'active', targetName:'.DAsupply' }" -->
        <li class="head__menu_item">
          <a class="head__menu__link" data-name="專長項目" @click="menuClose">專長項目</a>
        </li>
        <!-- v-scroll-active="{ fixHeadName:'.head', addClass:'active', targetName:'.DAfeelings' }" -->
        <li class="head__menu_item">
          <a class="head__menu__link" data-name="設計就是" @click="menuClose">設計就是</a>
        </li>
        <!-- v-scroll-active="{ fixHeadName:'.head', addClass:'active', targetName:'.DAworks' }" -->
        <li class="head__menu_item">
          <a class="head__menu__link" data-name="作品區" @click="menuClose">作品區</a>
        </li>
        <li class="head__menu_dLang">
          <a
            :class="['head__menu__link head__menu__lang',{open:langOpen}]" 
            title="語言選擇" 
            @click="langMenuFn"
          >
            語言
          </a>
          <ul class="head__menu__menu">
            <li><a href="javascript:;" class="head__menu____link">English</a></li>
            <li><a href="javascript:;" class="head__menu____link">简体中文</a></li>
            <li><a href="javascript:;" class="head__menu____link">繁體中文</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
  %menuBar{
    background-color:$BGcolor;
    display:block;
    border-radius:2px;
    position: absolute;
    top: 0;
    left: 0;
  }
  %linkActive{
    color:$BGcolor;
    text-shadow:none;
    background-color:rgba(#fff,.2);
  }
  .head{
    color:#fff;
    line-height:$headH;
    width:100%;
    min-width:320px;
    height:$headH;
    background-image: url("@/assets/img/index/HFbg.jpg");
    box-shadow:0 0 5px rgba(#000,.2);
    position:fixed;
    top:0;
    left:0;
    z-index: 1;
    &_bg{
      width: 100%;
      height: 100%;
      background-color:rgba(128,128,128,.75);
      opacity: 0;
      margin-top:$headH;
      position: fixed;
      top:0;
      left:0;
      transform:translate3d(100%,0,0);
    }
    &_wrap{
      height:100%;
      display: flex;
      justify-content:space-between;
      position: relative;
    }
    &__title{
      font-size:20px;
      font-weight:100;
      text-shadow:0 1px 1px rgba(#000,.6);
      display: flex;
      align-items:center;
      margin:0 0 0 8px;
      &:before{
        content:"";
        width:30px;
        height:28px;
        background-image: url("@/assets/img/index/DotAw.svg");
        background-position:center;
	      background-size:cover;
        margin-right:6px;
      }
      &_txt{transform:skew(-6deg);}
    }
    &__mBtn{
      width:$headH;
			height:100%;
      &_wrap{
        width:36px;
				height:36px;
				background-color:rgba(#fff,.2);
				border-radius:50%;
				margin: 4px;
        position: relative;
        transition: .3s;
      }
      &__bar{
        @extend %menuBar;
        width:22px;
        height:2px;
        margin: auto;
        right: 0;
        bottom: 0;
        transition:width .3s, background-color .3s, transform .3s;
        &:before, &:after{
          @extend %menuBar;
          content:"";
          width: 100%;
          height: 100%;
          transition:width .3s, transform .3s;
        }
        &:before{transform:translate3d(0,-7px,0);}
        &:after{transform:translate3d(0,7px,0);}
      }
    }
    &__menu{
      width:65%;
      max-width: 320px;
			height:100%;
      background-image: url("@/assets/img/index/HFbg.jpg");
			position:fixed;
			top:$headH;
			right: 0;
      transform:translate3d(100%,0,0);
      transition:transform .3s;
      &__link, &____link{
        color:#fff;
				text-shadow:0 1px 1px rgba(#000,.2);
        display: block;
        cursor: pointer;
	 			box-shadow:0 -1px 0 0 rgba(#000,.2) inset;
        transition: color .3s, text-shadow .3s, background-color .3s;
				&:hover{@extend %linkActive;}
      }
      &__link{padding:0 15px;}
      &____link{padding:0 30px;}
      &__lang{
        display: flex;
        align-items:center;
        position: relative;
        &:before{
				  // "\e9c9"
          content:"\e901";
          font-size:26px;
          font-family:icomoon;
          margin-right:8px;
        }
        &:after{
          @extend %beforeAfterTriangleBaseSet;
          border-width:6px 6px 6px 0;
	        border-color:transparent #fff transparent transparent;
          position:absolute;
          right:20px;
          top:16px;
          transition:border-color .3s, transform .3s;
        }
        &.open{
          @extend %linkActive;
          &:after{
            border-right-color:$BGcolor;
            transform:rotate(-90deg);
            transition:border-color .5s, transform .5s;
          }
          + .head__menu__menu{
            height:$headH*3;
            transition:height .5s;
          }
        }
      }
      &__menu{
        height: 0;
        overflow: hidden;
        transition:height .3s;
      }
    }
    &.open{
      .head_bg{
        opacity: 1;
        backdrop-filter:blur(3px);
        transform:translate3d(0,0,0);
        transition:opacity .5s, backdrop-filter .5s;
      }
      .head__menu{
        transform:translate3d(0,0,0);
        transition:transform .5s;
      }
      .head__mBtn__bar{
        width:26px;
        background-color: transparent;
        transform:rotate(-180deg);
        &:before{transform:translate3d(0,0,0) rotate(-45deg)}
        &:after{transform:translate3d(0,0,0) rotate(45deg)}
      }
    }
  }
  .active > .head__menu__link{
    @extend %linkActive;
  }
  // ===== 桌機版型區 =====
  @media screen and (min-width: 1024px) {
    .head{
      &_bg, &__mBtn{display: none;}
      &_wrap{
      max-width:$deskMinWidth;
      margin:0 auto;
      }
      &__menu{
        width: auto;
        max-width: initial;
        display: flex;
        position: initial;
        transform:translate3d(0,0,0);
        &__lang.open{
          color:#fff;
				  text-shadow:0 1px 1px rgba(#000,.2);
          background-color:rgba(#fff,0);
          &:after{
            border-right-color: #fff;
            transform: rotate(0deg);
          }
          + .head__menu__menu{height: 0;}
        }
        &_dLang:hover{
          > .head__menu{
            &__lang{
              color:#fff;
              text-shadow:0 1px 1px rgba($dBGcolor,.6);
              background-color:$BGcolor;
              &:after{
                transform:rotate(-90deg);
                transition:transform .5s;
              }
            }
            &__menu{
              height:$headH*3;
              transition:height .5s;
            }
          }
        }
        &__menu{background-image: url("@/assets/img/index/HFbg.jpg");}
        &_item{
          &.active ,&:hover{
            > .head__menu__link{
              color:#fff;
              transform:perspective(250px) translate3d(0,0,-22px) rotateX(-90deg);
            }
          }
          > .head__menu__link{
            position: relative;
            transform-style:preserve-3d;
            transform:perspective(250px) translate3d(0,0,-22px);
            transition:transform .3s;
            &:before, &:after{
              content:attr(data-name);
              text-align: center;
              width:100%;
              height:100%;
              position:absolute;
              top:0;
              left:0;
            }
            &:before{
              background-image: url("@/assets/img/index/HFbg.jpg");
              transform:rotateX(0deg) translate3d(0,0,22px);
            }
            &:after{
              text-shadow:0 1px 1px rgba($dBGcolor,.6);
              background-color:$BGcolor;
              transform:rotateX(90deg) translate3d(0,0,22px);
            }
          }
        }
        &____link:hover{
          color:#fff;
          text-shadow:0 1px 1px rgba($dBGcolor,.6);
          background-color:$BGcolor;
        }
      }
    }
  }
  // @media screen and (max-width: 767px){ }// ===== 手機版型區 =====
  // @media screen and (max-width: 767px) and (orientation:portrait){ }// 手機版拿直的時候 portrait
  // @media screen and (max-width: 767px) and (orientation:landscape){ }// 手機版拿橫的時候 Landscape
  // @media screen and (min-width: 768px) and (max-width: 1019px) { }// ===== 平板版型區 =====
</style>