<script setup>
const BoxSide = reactive(['front','back','up','down','left','right']);
</script>

<template>
  <div class="DA">
    <IdxHead/>
    <ChenYuHong/>
    <DotASupply/>
    <DotAFeelings/>
    <!-- <DotAWorks/> -->
    <Foot>
      <a class="Box3D mBox3D" title="與陳宥宏聯絡" href="mailto:kuas1091104337@gmail.com?subject=Hi,Amos. 你好，我是…">
        <span class="Box3D_space mBox3D_space">
          <span v-for="item in BoxSide" :key="item" :class="`Box3D__side mBox3D__side mBox3D__${item}`"></span>
        </span> 
        <span class="Box3D_logo mBox3D_logo">A</span>
      </a>
    </Foot>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/dotaBase.scss";
.DA{
  padding-top:$DAheadH;
  &box{
    border-color: #fff;
    border-style: solid;
    border-width: $DAborderW $DAborderW 0;
    // transform:translate3d(0,0,0);
    &__title{
      font-weight:normal;
      text-align:center;
      transform:skew(-5deg);
    }
  }
}
// 1.ChenYuHong, 2.DAsupply, 3.DAfeelings, 4.DAworks
.ChenYuHong, .DAsupply, .DAworks{
  .DAbox__title{	
    color:#fff;
    text-shadow:0 1px 2px rgba(#000,.25),
                0 1px 0 $BGcolor,
                1px 0 0 $BGcolor,
                0 -1px 0 $BGcolor,
                -1px 0 0 $BGcolor,
                1px 1px 0 $BGcolor, 
                -1px 1px 0 $BGcolor,
                1px -1px 0 $BGcolor,
                -1px -1px 0 $BGcolor,
                0 2px 0 $BGcolor, 
                2px 0 0 $BGcolor, 
                0 -2px 0 $BGcolor, 
                -2px 0 0 $BGcolor, 
                1px 2px 0 $BGcolor, 
                -1px 2px 0 $BGcolor, 
                1px -2px 0 $BGcolor, 
                -1px -2px 0 $BGcolor, 
                2px 1px 0 $BGcolor, 
                -2px 1px 0 $BGcolor, 
                2px -1px 0 $BGcolor, 
                -2px -1px 0 $BGcolor,
                2px 2px 0 $BGcolor, 
                -2px 2px 0 $BGcolor, 
                2px -2px 0 $BGcolor, 
                -2px -2px 0 $BGcolor,
                2px 2px 8px rgba(#000,.25),
                -2px 2px 8px rgba(#000,.25);
  }
}
.DAsupply, .DAfeelings, .DAworks{
  .DAbox__title{font-size:50px;}
}
.DAsupply, .DAworks{background-image:url("@/assets/img/index/divBg1.jpg")}
@media screen and (min-width: 960px) {
  .DAbox_wrap{
    max-width: 1024px;
    margin: auto;
  }
}
@media screen and (min-width: 1024px) {
  .DAbox{
    font-size: 18px;
    &__title{font-weight:bold;}
  }
  .DAsupply, .DAfeelings, .DAworks{
    .DAbox__title{font-size:56px;}
  }
}
</style>