<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n(),
      props = defineProps({
        navCurrentNum:{
          type:Number,
          default:0
        },
        offsetObj:{
          type:Object,
          default:() => ({})
        }
      }),
      head = ref(null),
      headIsOpen = ref(false),
      langIsOpen = ref(false),
      headH = computed(() => head.value.offsetHeight),
      headBgFn = () => {headIsOpen.value = false, langIsOpen.value = false},
      headBtnFn = () => headIsOpen.value = !headIsOpen.value,
      langMenuFn = () => langIsOpen.value = !langIsOpen.value,
      langChangeFn = (newlocale) => {
        locale.value = newlocale;
        localStorage.setItem('locale',newlocale);
      },
      scrollClickHandle = (offsetTop,e) => {
        if(e.currentTarget.classList.contains('active')) return false;
        window.scrollTo({top:offsetTop - headH.value,behavior:'smooth'});
        headIsOpen.value = false;
      };
onUpdated(() => {
  console.log(props.navCurrentNum);
  console.log(props.offsetObj);
});
console.log(locale.value);
</script>

<template>
  <header ref="head" :class="['head',{open:headIsOpen}]">
    <div class="head_bg" @click="headBgFn"></div>
    <div class="head_wrap">
      <h1 class="head__title">
        <i class="head__title_icon"><SvgIcon name="icon-dota" color="#fff"/></i>
        <span class="head__title_txt">{{t('DAheadTitle2')}}</span>
      </h1>
      <div class="head__mBtn" @click="headBtnFn">
        <div class="head__mBtn_wrap"><span class="head__mBtn__bar"></span></div>
      </div>
      <ul class="head__menu">
        <li :class="['head__menu_item',{active:props.navCurrentNum === 1}]" @click="scrollClickHandle(props.offsetObj.cyh.top,$event)">
          <a class="head__menu__link">
            {{t('DAabout')}}
            <span class="head__menu__link_frontSide">{{t('DAabout')}}</span>
            <span class="head__menu__link_backSide">{{t('DAabout')}}</span>
          </a>
        </li>
        <li :class="['head__menu_item',{active:props.navCurrentNum === 2}]" @click="scrollClickHandle(props.offsetObj.skills.top,$event)">
          <a class="head__menu__link">
            {{t('DAskill')}}
            <span class="head__menu__link_frontSide">{{t('DAskill')}}</span>
            <span class="head__menu__link_backSide">{{t('DAskill')}}</span>
          </a>
        </li>
        <li :class="['head__menu_item',{active:props.navCurrentNum === 3}]" @click="scrollClickHandle(props.offsetObj.thoughts.top,$event)">
          <a class="head__menu__link">
            {{t('DAcontact')}}
            <span class="head__menu__link_frontSide">{{t('DAcontact')}}</span>
            <span class="head__menu__link_backSide">{{t('DAcontact')}}</span>
          </a>
        </li>
        <li :class="['head__menu_item',{active:props.navCurrentNum === 4}]" @click="scrollClickHandle(props.offsetObj.works.top,$event)">
          <a class="head__menu__link">
            {{t('DAwork')}}
            <span class="head__menu__link_frontSide">{{t('DAwork')}}</span>
            <span class="head__menu__link_backSide">{{t('DAwork')}}</span>
          </a>
        </li>
        <li class="head__menu_lang">
          <a
            :class="['head__menu__link head__menu__lang',{open:langIsOpen}]" 
            title="語言選擇" 
            @click="langMenuFn"
          >
            <i class="head__menu___icon"><SvgIcon name="icon-globe" color="#fff"/></i>{{t('DAlanguage')}}
          </a>
          <ul class="head__menu__menu">
            <li><span @click="langChangeFn('en-US')" class="head__menu____link">English</span></li>
            <li><span @click="langChangeFn('zh-TW')" class="head__menu____link">繁體中文</span></li>
            <li><span @click="langChangeFn('zh-CN')" class="head__menu____link">简体中文</span></li>
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
    line-height:$DAheadH;
    width:max(100%,$mobileMinWidth);
    height:$DAheadH;
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
      margin-top:$DAheadH;
      position: fixed;
      top:0;
      left:0;
      transform:translate3d(100%,0,0);
      .open &{
        opacity: 1;
        backdrop-filter:blur(3px);
        transform:translate3d(0,0,0);
        transition:opacity .4s, backdrop-filter .4s;
      }
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
      &_icon{
        width:30px;
        height:28px;
        margin-right:6px;
      }
      &_txt{transform:skew(-6deg);}
    }
    &__mBtn{
      width:$DAheadH;
			height:100%;
      &_wrap{
        width:36px;
				height:36px;
				background-color:rgba(#fff,.2);
				border-radius:50%;
				margin: 4px;
        position: relative;
      }
      &__bar{
        @extend %menuBar;
        width:22px;
        height:2px;
        margin: auto;
        right: 0;
        bottom: 0;
        transition:width .4s, background-color .4s, transform .4s;
        &:before, &:after{
          @extend %menuBar;
          content:"";
          width: 100%;
          height: 100%;
          transition: transform .4s;
        }
        &:before{transform:translate3d(0,-7px,0);}
        &:after{transform:translate3d(0,7px,0);}
        .open &{
          width:26px;
          background-color: transparent;
          transform:rotate(-180deg);
          &:before{transform:translate3d(0,0,0) rotate(-45deg)}
          &:after{transform:translate3d(0,0,0) rotate(45deg)}
        }
      }
    }
    &__menu{
      @extend %ul-reset;
      width:65%;
      max-width: 320px;
			height:100%;
      background-image: url("@/assets/img/index/HFbg.jpg");
			position:fixed;
			top:$DAheadH;
			right: 0;
      transform:translate3d(100%,0,0);
      transition:transform .4s;
      .open &{transform:translate3d(0,0,0)}
      &__link, &____link{
        color:#fff;
				text-shadow:0 1px 1px rgba(#000,.3);
        display: block;
        cursor: pointer;
	 			box-shadow:0 -1px 0 0 rgba(#000,.2) inset;
        transition: color .4s, text-shadow .4s, background-color .4s;
      }
      &__link{
        padding:0 15px;
        &_frontSide, &_backSide{
          font-size: 0;
          vertical-align: top;
        }
        .active &{@extend %linkActive;}
      }
      &____link{
        padding:0 50px;
        .active &{@extend %linkActive;}
      }
      &__lang{
        display: flex;
        align-items:center;
        position: relative;
        &:after{
          @extend %beforeAfterTriangleBaseSet;
          border-width:6px 6px 6px 0;
	        border-color:transparent #fff transparent transparent;
          position:absolute;
          right:20px;
          top:16px;
          transition:border-color .4s, transform .4s;
        }
        &.open{
          @extend %linkActive;
          &:after{
            border-right-color:$BGcolor;
            transform:rotate(-90deg);
          }
          .svg-icon > *{fill:$BGcolor;}
          + .head__menu__menu{height:$DAheadH*3}
        }
      }
      &___icon{
        width: 22px;
        height: 22px;
        margin-right:10px;
        > .svg-icon > *{transition:fill .4s}
      }
      &__menu{
        @extend %ul-reset;
        height: 0;
        overflow: hidden;
        transition:height .4s;
      }
    }
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
        &__lang{
          padding-right: 38px;
          &.open{
            color:#fff;
            text-shadow:0 1px 1px rgba(#000,.2);
            background-color:rgba(#fff,0);
            &:after{
              border-right-color: #fff;
              transform: rotate(0deg);
            }
            .svg-icon > *{fill: #fff;}
            + .head__menu__menu{height: 0;}
          }
        }
        &_lang:hover{
          > .head__menu{
            &__lang{
              color:#fff;
              text-shadow:0 1px 1px rgba($dBGcolor,.6);
              background-color:$BGcolor;
              &:after{transform:rotate(-90deg)}
            }
            &__menu{height:$DAheadH*3}
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
          .head__menu__link{
            height: 100%;
            position: relative;
            transform-style:preserve-3d;
            transform:perspective(250px) translate3d(0,0,-22px);
            transition:transform .3s;
            &_frontSide, &_backSide{
              font-size: 16px;
              text-align: center;
              width:100%;
              height:100%;
              position:absolute;
              top:0;
              left:0;
            }
            &_frontSide{
              background-image: url("@/assets/img/index/HFbg.jpg");
              transform:rotateX(0deg) translate3d(0,0,22px);
            }
            &_backSide{
              text-shadow:0 1px 1px rgba($dBGcolor,.6);
              background-color:$BGcolor;
              visibility: visible;
              transform:rotateX(90deg) translate3d(0,0,22px);
            }
          }
        }
        &____link{
          text-align: center;
          padding:0 30px;
          &:hover{
            color:#fff;
            text-shadow:0 1px 1px rgba($dBGcolor,.6);
            background-color:$BGcolor;
          }
        }
      }
    }
  }
  // @media screen and (max-width: 767px){ }// ===== 手機版型區 =====
  // @media screen and (max-width: 767px) and (orientation:portrait){ }// 手機版拿直的時候 portrait
  // @media screen and (max-width: 767px) and (orientation:landscape){ }// 手機版拿橫的時候 Landscape
  // @media screen and (min-width: 768px) and (max-width: 1019px) { }// ===== 平板版型區 =====
</style>