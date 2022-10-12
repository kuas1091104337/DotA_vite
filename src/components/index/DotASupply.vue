<script setup>
</script>

<template>
<div class="DAsupply DAbox">
  <div class="DAbox_wrap">
    <h2 class="DAbox__title">我的技能項目</h2>
    <ul class="DAsupply__list">
      <li class="DAsupply___item DAsupply___develoer">
        <h3 class="DAsupply___item_title">前端工程</h3>
        <p class="DAsupply___item_txt">Vue3</p>
        <p class="DAsupply___item_txt">Vue CLI</p>
        <p class="DAsupply___item_txt">Vue Router</p>
        <p class="DAsupply___item_txt">Vuex</p>
        <p class="DAsupply___item_txt">Vite</p>
        <p class="DAsupply___item_txt">JavaScript</p>
        <p class="DAsupply___item_txt">axios get</p>
        <p class="DAsupply___item_txt">ajax</p>
        <p class="DAsupply___item_txt">Git Sourcetree</p>
        <p class="DAsupply___item_txt">SVN</p>
      </li>
      <li class="DAsupply___item DAsupply___design">
        <h3 class="DAsupply___item_title">網頁設計</h3>
        <p class="DAsupply___item_txt">animation & keyframes 動畫</p>
        <p class="DAsupply___item_txt">CSS3 transition 動畫</p>
        <p class="DAsupply___item_txt">Responsive Web Design 切版</p>
        <p class="DAsupply___item_txt">jQuery</p>
        <p class="DAsupply___item_txt">SCSS BEM命名</p>
        <p class="DAsupply___item_txt"></p>
      </li>
      <li class="DAsupply___item DAsupply___seo">
        <h3 class="DAsupply___item_title">SEO</h3>
        <p class="DAsupply___item_txt">HTML</p>
        <p class="DAsupply___item_txt">Google Search Console</p>
        <p class="DAsupply___item_txt">Google AdWords</p>
      </li>
      <li class="DAsupply___item DAsupply___uiUx">
        <h3 class="DAsupply___item_title">UI / UX</h3>
        <p class="DAsupply___item_txt">Figma</p>
        <p class="DAsupply___item_txt">Sketch</p>
        <p class="DAsupply___item_txt">Adobe XD</p>
        <p class="DAsupply___item_note">與UI設計合作使用的軟體</p>
      </li>
    </ul>
  </div>
</div>
</template>

<style lang="scss">
  .DAsupply{
    > .DAbox_wrap{padding:15px 0;}
    &___develoer:before{content:"\e900";}
    &___design:before{content:"\e903";}
    &___seo:before{content:"\e902";}
    &___uiUx:before{content:"\e904";}
    &___item{
      text-align:center;
      padding:15px 0;
      &:before{
				color:$Pcolor;
				font-size:80px;
        font-family: icomoon;
				text-shadow:-1px 0 0 $lPcolor, -1px -1px 0 $lPcolor, 1px 0 0 $dPcolor, 1px 1px 0 $dPcolor;
			}
      &_title{
        color:$Pcolor;
				font-size:36px;
				text-shadow:1px 1px 0 $dPcolor;
				transform:skew(-6deg);
      }
      &_txt{color:$grayColor;}
      &_note{
        color:$Pcolor;
        font-size: 14px;
        opacity: .8;
      }
    }
  }
  @media screen and (min-width: 640px) {
    .DAsupply{
      &__list{
        display: flex;
        flex-wrap: wrap;
      }
      &___item{flex-basis: 50%;}
    }
  }
  @media screen and (min-width: 1024px) {
    .DAsupply{
      &___item{flex-basis: 25%;}
    }
  }
</style>