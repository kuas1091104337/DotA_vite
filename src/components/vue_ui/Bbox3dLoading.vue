<script setup>
const BoxSide = reactive(['front','back','up','down','left','right']);
</script>

<template>
  <div class="Box3D mBox3D LoadBox3D DAblack">
    <div class="Box3D_space mBox3D_space LoadBox3D_space">
      <div v-for="item in BoxSide" :key="item" :class="`Box3D__side LoadBox3D__side mBox3D__${item}`"></div>
    </div>
    <div class="LoadBox3D_load">
      loading<span class="LoadBox3D_load_ing">.</span>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes wTxtLoading{
  0%, 33.33%{text-shadow: 0 0 #fff;}
  66.66%{text-shadow: 5px 0 #fff;}
  100%{text-shadow: 5px 0 #fff, 10px 0 #fff;}
}
.LoadBox3D{
  margin:50px auto;
  &_space{animation:MsizeBox3dRotate 5s linear infinite;}
  &__side{
    .DAblack &{
      background-color:$GrayColor;
      box-shadow:0 0 0 1px $GrayColor;
    }
  }
  &_load{
    font-size: 16px;
    line-height:$MiddleBox3Dsize*0.8;
    width:$MiddleBox3Dsize*0.8;
    height:$MiddleBox3Dsize*0.8;
    position:absolute;
    top:10%;
    left:10%;
    text-shadow: 1px 1px rgba(#f0f,.6), -1px -1px rgba(#0ff,.6);
    transform: skew(-8deg);
    .DAblack &{color:#fff;}
    &_ing{
      .DAblack &{animation: wTxtLoading 1.2s step-start infinite;}
    }
  }
}
// DAblack
</style>