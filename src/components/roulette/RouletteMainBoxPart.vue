<script setup>
const props = defineProps({
        rouletteAwardArr:{
          type:Array,
          default:() => []
        }
      });
</script>

<template>
<ul :class="['roulette_main___box__part roulette_main___box__part-'+props.rouletteAwardArr.length]">
  <li 
    v-for="(item, idx) in props.rouletteAwardArr" :key="idx"
    :class="[
      'roulette_main___box__part_list',
      'roulette_main___box__part_list-prize'+item.awards,
      'roulette_main___box__part_list-num'+idx
    ]" 
  >
    <span class="roulette_main___box__part__color"/>
    <p class="roulette_main___box__part__prizeName">
      <span class="roulette_main___box__part__prizeName_txt roulette_main___box__part__prizeName_txt-1">{{item.name}}</span>
      <span class="roulette_main___box__part__prizeName_txt roulette_main___box__part__prizeName_txt-2">{{item.name}}</span>
    </p>
    <span :class="['roulette_main___box__part__awards roulette_main___box__part__awards-'+item.awards]"></span>
  </li>
</ul>
</template>

<style lang="scss">
@import"@/assets/scss/rouletteVariables.scss";
@keyframes listYellowBorder-mob{
  0% {
    box-shadow: 0 0 1px rgba($DYellow,.75) inset, 0 0 1px 1px rgba($DYellow,.75), 0 0 0 0 rgba($yellow,0), 0 0 0 rgba($yellow,0);
  }
  100% {
    box-shadow: 0 0 1px rgba($DYellow,.75) inset, 0 0 1px 1px rgba($DYellow,.75),
                0 0 size_pxToVw(18,$rouletteGameMobW) size_pxToVw(2,$rouletteGameMobW) rgba($yellow,.75),
                0 0 size_pxToVw(6,$rouletteGameMobW) size_pxToVw(1,$rouletteGameMobW) rgba($yellow,.9);
  }
}
@keyframes listYellowBorder-mobPigSize{
  0% {
    box-shadow: 0 0 1px rgba($DYellow,.75) inset, 0 0 1px 1px rgba($DYellow,.75), 0 0 0 0 rgba($yellow,0), 0 0 0 rgba($yellow,0);
  }
  100% {
    box-shadow: 0 0 1px rgba($DYellow,.75) inset, 0 0 1px 1px rgba($DYellow,.75), 0 0 27px 3px rgba($yellow,.75), 0 0 9px 2px rgba($yellow,.9);
  }
}
@keyframes rouletteAwardsNumShadow-mob{
  0%{           // -3~0  -4    0
    text-shadow:size_pxToVw(-3,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-2,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-1,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0), 0 size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0),
                //  1~4  -4    0
                size_pxToVw(1,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(2,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(3,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0),
                //  4    -3~0  0
                size_pxToVw(4,$rouletteGameMobW) size_pxToVw(-3,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(-2,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(-1,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(4,$rouletteGameMobW) 0 0 rgba($yellow,0),
                //  4    1~4   0
                size_pxToVw(4,$rouletteGameMobW) size_pxToVw(1,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(2,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0),
                //  3~0  4     0
                size_pxToVw(3,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(2,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(1,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0), 0 size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0),
                // -1~-4 4     0
                size_pxToVw(-1,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-2,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-3,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) 0 rgba($yellow,0),
                // -4    3~0   0
                size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(2,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(1,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-4,$rouletteGameMobW) 0 0 rgba($yellow,0),
                // -4    -1~-4 0
                size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(-1,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(-2,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(-3,$rouletteGameMobW) 0 rgba($yellow,0), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) 0 rgba($yellow,0);
  }
  100%{         // -3~0  -4    12
    text-shadow:size_pxToVw(-3,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-2,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-1,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), 0 size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2),
                //  1~4  -4    12
                size_pxToVw(1,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(2,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(3,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2),
                //  4    -3~0  12
                size_pxToVw(4,$rouletteGameMobW) size_pxToVw(-3,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(-2,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(-1,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(4,$rouletteGameMobW) 0 size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2),
                //  4    1~4   12
                size_pxToVw(4,$rouletteGameMobW) size_pxToVw(1,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(2,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(4,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2),
                //  3~0  4     12
                size_pxToVw(3,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(2,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(1,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), 0 size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2),
                // -1~-4 4     12
                size_pxToVw(-1,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-2,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-3,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2),
                // -4    3~0   12
                size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(3,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(2,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(1,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-4,$rouletteGameMobW) 0 size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2),
                // -4    -1~-4 12
                size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(-1,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(-2,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(-3,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2), size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(-4,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba($yellow,.2);
  }
}
@keyframes rouletteAwardsNumShadow-mobPigSize{
  0%{           // -3~0  -4    0
    text-shadow:-3px -4px 0 rgba($yellow,0), -2px -4px 0 rgba($yellow,0), -1px -4px 0 rgba($yellow,0), 0 -4px 0 rgba($yellow,0),
                //  1~4  -4    0
                1px -4px 0 rgba($yellow,0), 2px -4px 0 rgba($yellow,0), 3px -4px 0 rgba($yellow,0), 4px -4px 0 rgba($yellow,0),
                //  4    -3~0  0
                4px -3px 0 rgba($yellow,0), 4px -2px 0 rgba($yellow,0), 4px -1px 0 rgba($yellow,0), 4px 0 0 rgba($yellow,0),
                //  4    1~4   0
                4px 1px 0 rgba($yellow,0), 4px 2px 0 rgba($yellow,0), 4px 3px 0 rgba($yellow,0), 4px 4px 0 rgba($yellow,0),
                //  3~0  4     0
                3px 4px 0 rgba($yellow,0), 2px 4px 0 rgba($yellow,0), 1px 4px 0 rgba($yellow,0), 0 4px 0 rgba($yellow,0),
                // -1~-4 4     0
                -1px 4px 0 rgba($yellow,0), -2px 4px 0 rgba($yellow,0), -3px 4px 0 rgba($yellow,0), -4px 4px 0 rgba($yellow,0),
                // -4    3~0   0
                -4px 3px 0 rgba($yellow,0), -4px 2px 0 rgba($yellow,0), -4px 1px 0 rgba($yellow,0), -4px 0 0 rgba($yellow,0),
                // -4    -1~-4 0
                -4px -1px 0 rgba($yellow,0), -4px -2px 0 rgba($yellow,0), -4px -3px 0 rgba($yellow,0), -4px -4px 0 rgba($yellow,0);
  }
  100%{         // -3~0  -4    18
    text-shadow:-3px -4px 18px rgba($yellow,.2), -2px -4px 18px rgba($yellow,.2), -1px -4px 18px rgba($yellow,.2), 0 -4px 18px rgba($yellow,.2),
                //  1~4  -4    18
                1px -4px 18px rgba($yellow,.2), 2px -4px 18px rgba($yellow,.2), 3px -4px 18px rgba($yellow,.2), 4px -4px 18px rgba($yellow,.2),
                //  4    -3~0  18
                4px -3px 18px rgba($yellow,.2), 4px -2px 18px rgba($yellow,.2), 4px -1px 18px rgba($yellow,.2), 4px 0 18px rgba($yellow,.2),
                //  4    1~4   18
                4px 1px 18px rgba($yellow,.2), 4px 2px 18px rgba($yellow,.2), 4px 3px 18px rgba($yellow,.2), 4px 4px 18px rgba($yellow,.2),
                //  3~0  4     18
                3px 4px 18px rgba($yellow,.2), 2px 4px 18px rgba($yellow,.2), 1px 4px 18px rgba($yellow,.2), 0 4px 18px rgba($yellow,.2),
                // -1~-4 4     18
                -1px 4px 18px rgba($yellow,.2), -2px 4px 18px rgba($yellow,.2), -3px 4px 18px rgba($yellow,.2), -4px 4px 18px rgba($yellow,.2),
                // -4    3~0   18
                -4px 3px 18px rgba($yellow,.2), -4px 2px 18px rgba($yellow,.2), -4px 1px 18px rgba($yellow,.2), -4px 0 18px rgba($yellow,.2),
                // -4    -1~-4 18
                -4px -1px 18px rgba($yellow,.2), -4px -2px 18px rgba($yellow,.2), -4px -3px 18px rgba($yellow,.2), -4px -4px 18px rgba($yellow,.2);
  }
}
@keyframes rouletteRotate{
  0%{transform:rotate3d(0,0,1,0deg);}
  50%{transform:rotate3d(0,0,1,180deg);}
  100%{transform:rotate3d(0,0,1,360deg);}
}
@keyframes roulettePrizeNameShadow-mob{
  0% {          // 2    2~-1 0
    text-shadow:2px 2px 0 rgba($yellow,0), 2px 1px 0 rgba($yellow,0), 2px 0 0 rgba($yellow,0), 2px -1px 0 rgba($yellow,0),
                // 2~-1 -2   0
                2px -2px 0 rgba($yellow,0), 1px -2px 0 rgba($yellow,0), 0 -2px 0 rgba($yellow,0), -1px -2px 0 rgba($yellow,0), 
                // -2   -2~1 0
                -2px -2px 0 rgba($yellow,0), -2px -1px 0 rgba($yellow,0), -2px 0 0 rgba($yellow,0), -2px 1px 0 rgba($yellow,0), 
                // -2~1 2    0
                -2px 2px 0 rgba($yellow,0), -1px 2px 0 rgba($yellow,0), 0 2px 0 rgba($yellow,0), 1px 2px 0 rgba($yellow,0);
  }
  100% {        // 2    2~-1 4
    text-shadow:2px 2px 4px rgba($yellow,.7), 2px 1px 4px rgba($yellow,.7), 2px 0 4px rgba($yellow,.7), 2px -1px 4px rgba($yellow,.7),
                // 2~-1 -2   4
                2px -2px 4px rgba($yellow,.7), 1px -2px 4px rgba($yellow,.7), 0 -2px 4px rgba($yellow,.7), -1px -2px 4px rgba($yellow,.7), 
                // -2   -2~1 4
                -2px -2px 4px rgba($yellow,.7), -2px -1px 4px rgba($yellow,.7), -2px 0 4px rgba($yellow,.7), -2px 1px 4px rgba($yellow,.7), 
                // -2~1 2    4
                -2px 2px 4px rgba($yellow,.7), -1px 2px 4px rgba($yellow,.7), 0 2px 4px rgba($yellow,.7), 1px 2px 4px rgba($yellow,.7);
  }
}
@keyframes roulettePrizeNameShadow-mobPigSize{
  0% {          // 2    2~-1 0
    text-shadow:2px 2px 0 rgba($yellow,0), 2px 1px 0 rgba($yellow,0), 2px 0 0 rgba($yellow,0), 2px -1px 0 rgba($yellow,0),
                // 2~-1 -2   0
                2px -2px 0 rgba($yellow,0), 1px -2px 0 rgba($yellow,0), 0 -2px 0 rgba($yellow,0), -1px -2px 0 rgba($yellow,0), 
                // -2   -2~1 0
                -2px -2px 0 rgba($yellow,0), -2px -1px 0 rgba($yellow,0), -2px 0 0 rgba($yellow,0), -2px 1px 0 rgba($yellow,0), 
                // -2~1 2    0
                -2px 2px 0 rgba($yellow,0), -1px 2px 0 rgba($yellow,0), 0 2px 0 rgba($yellow,0), 1px 2px 0 rgba($yellow,0);
  }
  100% {        // 2    2~-1 6
    text-shadow:2px 2px 6px rgba($yellow,.6), 2px 1px 6px rgba($yellow,.6), 2px 0 6px rgba($yellow,.6), 2px -1px 6px rgba($yellow,.6),
                // 2~-1 -2   6
                2px -2px 6px rgba($yellow,.6), 1px -2px 6px rgba($yellow,.6), 0 -2px 6px rgba($yellow,.6), -1px -2px 6px rgba($yellow,.6), 
                // -2   -2~1 6
                -2px -2px 6px rgba($yellow,.6), -2px -1px 6px rgba($yellow,.6), -2px 0 6px rgba($yellow,.6), -2px 1px 6px rgba($yellow,.6), 
                // -2~1 2    6
                -2px 2px 6px rgba($yellow,.6), -1px 2px 6px rgba($yellow,.6), 0 2px 6px rgba($yellow,.6), 1px 2px 6px rgba($yellow,.6);
  }
}
@keyframes listYellowBorder-desk{
  0% {box-shadow: 0 0 0 0 rgba($yellow,0), 0 0 0 0 rgba($yellow,0)}
  100% {
    box-shadow: 0 0 size_pxToVw(24,$rouletteGameW) size_pxToVw(3,$rouletteGameW)  rgba($yellow,.5),
                0 0 size_pxToVw(10,$rouletteGameW) size_pxToVw(2,$rouletteGameW) rgba($yellow,.9);
  }
}
@keyframes listYellowBorder-deskPigSize{
  0%{box-shadow:0 0 0 0 rgba($yellow,0), 0 0 0 0 rgba($yellow,0)}
  100% {box-shadow:0 0 24px 3px rgba($yellow,.5), 0 0 10px 2px rgba($yellow,.9)}
}
@keyframes rouletteAwardsNumShadow-desk{
  0%{           // 6     6~1   0
    text-shadow:size_pxToVw(6,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(5,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(4,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(2,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(1,$rouletteGameW) 0 rgba($yellow,0),
                // 6     0~-5  0
                size_pxToVw(6,$rouletteGameW) 0 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-1,$rouletteGameW) 0 rgba($yellow,0),
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-2,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-4,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-5,$rouletteGameW) 0 rgba($yellow,0),
                // 6~1   -6    0
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(5,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(4,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(3,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(2,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(1,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0),
                // 0~-5  -6    0
                0 size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-1,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0),
                size_pxToVw(-2,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-3,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-4,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-5,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0),
                // -6    -6~-1 0
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-5,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-4,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-2,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-1,$rouletteGameW) 0 rgba($yellow,0),
                // -6    0~5   0
                size_pxToVw(-6,$rouletteGameW) 0 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(1,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(2,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(4,$rouletteGameW) 0 rgba($yellow,0),
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(5,$rouletteGameW) 0 rgba($yellow,0),
                // -6~-1 6     0
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-5,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-4,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-3,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-2,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(-1,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0),
                // 0~5   6     0
                0 size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(1,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(2,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(3,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(4,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0), 
                size_pxToVw(5,$rouletteGameW) size_pxToVw(6,$rouletteGameW) 0 rgba($yellow,0);
  }
  100%{         // 6     6~1   6
    text-shadow:size_pxToVw(6,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(5,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(4,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(3,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(2,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(1,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                // 6     0~-5  6
                size_pxToVw(6,$rouletteGameW) 0 size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-1,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-2,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-4,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-5,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                // 6~1   -6    6
                size_pxToVw(6,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(5,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(4,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(3,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(2,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(1,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                // 0~-5  -6    6
                0 size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-1,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                size_pxToVw(-2,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-3,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-4,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-5,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                // -6    -6~-1 6
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-5,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-4,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-2,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(-1,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                // -6    0~5   6
                size_pxToVw(-6,$rouletteGameW) 0 size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(1,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(2,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(3,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(4,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(5,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                // -6~-1 6     6
                size_pxToVw(-6,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-5,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-4,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-3,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-2,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(-1,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2),
                // 0~5   6     6
                0 size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(1,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(2,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(3,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(4,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2), 
                size_pxToVw(5,$rouletteGameW) size_pxToVw(6,$rouletteGameW) size_pxToVw(16,$rouletteGameW) rgba($yellow,.2);
  }
}
@keyframes rouletteAwardsNumShadow-deskPigSize{
  0%{           // 6     6~1   0
    text-shadow:6px 6px 0 rgba($yellow,0), 6px 5px 0 rgba($yellow,0), 6px 4px 0 rgba($yellow,0), 6px 3px 0 rgba($yellow,0), 6px 2px 0 rgba($yellow,0), 6px 1px 0 rgba($yellow,0),
                // 6     0~-5  0
                6px 0 0 rgba($yellow,0), 6px -1px 0 rgba($yellow,0), 6px -2px 0 rgba($yellow,0), 6px -3px 0 rgba($yellow,0), 6px -4px 0 rgba($yellow,0), 6px -5px 0 rgba($yellow,0),
                // 6~1   -6    0
                6px -6px 0 rgba($yellow,0), 5px -6px 0 rgba($yellow,0), 4px -6px 0 rgba($yellow,0), 3px -6px 0 rgba($yellow,0), 2px -6px 0 rgba($yellow,0), 1px -6px 0 rgba($yellow,0),
                // 0~-5  -6    0
                0 -6px 0 rgba($yellow,0), -1px -6px 0 rgba($yellow,0), -2px -6px 0 rgba($yellow,0), -3px -6px 0 rgba($yellow,0), -4px -6px 0 rgba($yellow,0), -5px -6px 0 rgba($yellow,0),
                // -6    -6~-1 0
                -6px -6px 0 rgba($yellow,0), -6px -5px 0 rgba($yellow,0), -6px -4px 0 rgba($yellow,0), -6px -3px 0 rgba($yellow,0), -6px -2px 0 rgba($yellow,0), -6px -1px 0 rgba($yellow,0),
                // -6    0~5   0
                -6px 0 0 rgba($yellow,0), -6px 1px 0 rgba($yellow,0), -6px 2px 0 rgba($yellow,0), -6px 3px 0 rgba($yellow,0), -6px 4px 0 rgba($yellow,0), -6px 5px 0 rgba($yellow,0),
                // -6~-1 6     0
                -6px 6px 0 rgba($yellow,0), -5px 6px 0 rgba($yellow,0), -4px 6px 0 rgba($yellow,0), -3px 6px 0 rgba($yellow,0), -2px 6px 0 rgba($yellow,0), -1px 6px 0 rgba($yellow,0),
                // 0~5   6     0
                0 6px 0 rgba($yellow,0), 1px 6px 0 rgba($yellow,0), 2px 6px 0 rgba($yellow,0), 3px 6px 0 rgba($yellow,0), 4px 6px 0 rgba($yellow,0), 5px 6px 0 rgba($yellow,0);
  }
  100%{         // 6     6~1   6
    text-shadow:6px 6px 16px rgba($yellow,.2), 6px 5px 16px rgba($yellow,.2), 6px 4px 16px rgba($yellow,.2), 6px 3px 16px rgba($yellow,.2), 6px 2px 16px rgba($yellow,.2), 6px 1px 16px rgba($yellow,.2),
                // 6     0~-5  6
                6px 0 16px rgba($yellow,.2), 6px -1px 16px rgba($yellow,.2), 6px -2px 16px rgba($yellow,.2), 6px -3px 16px rgba($yellow,.2), 6px -4px 16px rgba($yellow,.2), 6px -5px 16px rgba($yellow,.2),
                // 6~1   -6    6
                6px -6px 16px rgba($yellow,.2), 5px -6px 16px rgba($yellow,.2), 4px -6px 16px rgba($yellow,.2), 3px -6px 16px rgba($yellow,.2), 2px -6px 16px rgba($yellow,.2), 1px -6px 16px rgba($yellow,.2),
                // 0~-5  -6    6
                0 -6px 16px rgba($yellow,.2), -1px -6px 16px rgba($yellow,.2),  -2px -6px 16px rgba($yellow,.2), -3px -6px 16px rgba($yellow,.2), -4px -6px 16px rgba($yellow,.2), -5px -6px 16px rgba($yellow,.2),
                // -6    -6~-1 6
                -6px -6px 16px rgba($yellow,.2), -6px -5px 16px rgba($yellow,.2), -6px -4px 16px rgba($yellow,.2), -6px -3px 16px rgba($yellow,.2), -6px -2px 16px rgba($yellow,.2), -6px -1px 16px rgba($yellow,.2),
                // -6    0~5   6
                -6px 0 16px rgba($yellow,.2), -6px 1px 16px rgba($yellow,.2), -6px 2px 16px rgba($yellow,.2), -6px 3px 16px rgba($yellow,.2), -6px 4px 16px rgba($yellow,.2),-6px 5px 16px rgba($yellow,.2),
                // -6~-1 6     6
                -6px 6px 16px rgba($yellow,.2), -5px 6px 16px rgba($yellow,.2), -4px 6px 16px rgba($yellow,.2), -3px 6px 16px rgba($yellow,.2), -2px 6px 16px rgba($yellow,.2), -1px 6px 16px rgba($yellow,.2),
                // 0~5   6     6
                0 6px 16px rgba($yellow,.2), 1px 6px 16px rgba($yellow,.2), 2px 6px 16px rgba($yellow,.2), 3px 6px 16px rgba($yellow,.2), 4px 6px 16px rgba($yellow,.2), 5px 6px 16px rgba($yellow,.2);
  }
}
@keyframes roulettePrizeNameShadow-desk{
  0%{           // 3     2~0   0
    text-shadow:size_pxToVw(3,$rouletteGameW) size_pxToVw(2,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(3,$rouletteGameW) size_pxToVw(1,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(3,$rouletteGameW) 0 0 rgba($yellow,0),
                // 3     -1~-3 0
                size_pxToVw(3,$rouletteGameW) size_pxToVw(-1,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(3,$rouletteGameW) size_pxToVw(-2,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(3,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0),
                // 2~0   -3    0
                size_pxToVw(2,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(1,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(0,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0),
                // -1~-3 -3    0
                size_pxToVw(-1,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(-2,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(-3,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) 0 rgba($yellow,0),
                // -3    -2~0  0
                size_pxToVw(-3,$rouletteGameW) size_pxToVw(-2,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(-3,$rouletteGameW) size_pxToVw(-1,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(-3,$rouletteGameW) size_pxToVw(0,$rouletteGameW) 0 rgba($yellow,0),
                // -3    1~3   0
                size_pxToVw(-3,$rouletteGameW) size_pxToVw(1,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(-3,$rouletteGameW) size_pxToVw(2,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(-3,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0),
                // -2~0  3     0
                size_pxToVw(-2,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(-1,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(0,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0),
                // 1~3   3     0
                size_pxToVw(1,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(2,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0), size_pxToVw(3,$rouletteGameW) size_pxToVw(3,$rouletteGameW) 0 rgba($yellow,0);
  }
  100%{         // 3     2~0   5 
    text-shadow:size_pxToVw(3,$rouletteGameW) size_pxToVw(2,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(3,$rouletteGameW) size_pxToVw(1,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(3,$rouletteGameW) 0 size_pxToVw(5,$rouletteGameW) rgba($yellow,.5),
                // 3     -1~-3 5
                size_pxToVw(3,$rouletteGameW) size_pxToVw(-1,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(3,$rouletteGameW) size_pxToVw(-2,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(3,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5),
                // 2~0   -3    5
                size_pxToVw(2,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(1,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), 0 size_pxToVw(-3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5),
                // -1~-3 -3    5
                size_pxToVw(-1,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(-2,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(-3,$rouletteGameW) size_pxToVw(-3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5),
                // -3    -2~0  5
                size_pxToVw(-3,$rouletteGameW) size_pxToVw(-2,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(-3,$rouletteGameW) size_pxToVw(-1,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(-3,$rouletteGameW) 0 size_pxToVw(5,$rouletteGameW) rgba($yellow,.5),
                // -3    1~3   5
                size_pxToVw(-3,$rouletteGameW) size_pxToVw(1,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(-3,$rouletteGameW) size_pxToVw(2,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(-3,$rouletteGameW) size_pxToVw(3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5),
                // -2~0  3     5
                size_pxToVw(-2,$rouletteGameW) size_pxToVw(3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(-1,$rouletteGameW) size_pxToVw(3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), 0 size_pxToVw(3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5),
                // 1~3   3     5
                size_pxToVw(1,$rouletteGameW) size_pxToVw(3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(2,$rouletteGameW) size_pxToVw(3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5), size_pxToVw(3,$rouletteGameW) size_pxToVw(3,$rouletteGameW) size_pxToVw(5,$rouletteGameW) rgba($yellow,.5);
  }
}
@keyframes roulettePrizeNameShadow-deskPigSize{
  0%{           // 3     2~0   0 
    text-shadow:3px 2px 0 rgba($yellow,0), 3px 1px 0 rgba($yellow,0), 3px 0 0 rgba($yellow,0),
                // 3     -1~-3 0
                3px -1px 0 rgba($yellow,0), 3px -2px 0 rgba($yellow,0), 3px -3px 0 rgba($yellow,0),
                // 2~0   -3    0
                2px -3px 0 rgba($yellow,0), 1px -3px 0 rgba($yellow,0), 0 -3px 0 rgba($yellow,0),
                // -1~-3 -3    0
                -1px -3px 0 rgba($yellow,0), -2px -3px 0 rgba($yellow,0), -3px -3px 0 rgba($yellow,0),
                // -3    -2~0  0
                -3px -2px 0 rgba($yellow,0), -3px -1px 0 rgba($yellow,0), -3px 0 0 rgba($yellow,0),
                // -3    1~3   0
                -3px 1px 0 rgba($yellow,0), -3px 2px 0 rgba($yellow,0), -3px 3px 0 rgba($yellow,0),
                // -2~0  3     0
                -2px 3px 0 rgba($yellow,0), -1px 3px 0 rgba($yellow,0), 0 3px 0 rgba($yellow,0),
                // 1~3   3     0
                1px 3px 0 rgba($yellow,0), 2px 3px 0 rgba($yellow,0), 3px 3px 0 rgba($yellow,0);
  }
  100%{         // 3     2~0   5 
    text-shadow:3px 2px 5px rgba($yellow,.5), 3px 1px 5px rgba($yellow,.5), 3px 0 5px rgba($yellow,.5),
                // 3     -1~-3 5
                3px -1px 5px rgba($yellow,.5), 3px -2px 5px rgba($yellow,.5), 3px -3px 5px rgba($yellow,.5),
                // 2~0   -3    5
                2px -3px 5px rgba($yellow,.5), 1px -3px 5px rgba($yellow,.5), 0 -3px 5px rgba($yellow,.5),
                // -1~-3 -3    5
                -1px -3px 5px rgba($yellow,.5), -2px -3px 5px rgba($yellow,.5), -3px -3px 5px rgba($yellow,.5),
                // -3    -2~0  5
                -3px -2px 5px rgba($yellow,.5), -3px -1px 5px rgba($yellow,.5), -3px 0 5px rgba($yellow,.5),
                // -3    1~3   5
                -3px 1px 5px rgba($yellow,.5), -3px 2px 5px rgba($yellow,.5), -3px 3px 5px rgba($yellow,.5),
                // -2~0  3     5
                -2px 3px 5px rgba($yellow,.5), -1px 3px 5px rgba($yellow,.5), 0 3px 5px rgba($yellow,.5),
                // 1~3   3     5
                1px 3px 5px rgba($yellow,.5), 2px 3px 5px rgba($yellow,.5), 3px 3px 5px rgba($yellow,.5);
  }
}
@keyframes roulette-P6789-N0{
  0%{transform:rotate3d(0,0,1,-720deg)}
  100%{transform:rotate3d(0,0,1,0deg)}
}
@keyframes roulette-P6-N1{
  0%{transform:rotate3d(0,0,1,-780deg)}
  100%{transform:rotate3d(0,0,1,-60deg)}
}
@keyframes roulette-P6-N2-P9-N3{
  0%{transform:rotate3d(0,0,1,-840deg)}
  100%{transform:rotate3d(0,0,1,-120deg)}
}
@keyframes roulette-P6-N3-P8-N4{
  0%{transform:rotate3d(0,0,1,-900deg)}
  100%{transform:rotate3d(0,0,1,-180deg)}
}
@keyframes roulette-P6-N4-P9-N6{
  0%{transform:rotate3d(0,0,1,-960deg)}
  100%{transform:rotate3d(0,0,1,-240deg)}
}
@keyframes roulette-P6-N5{
  0%{transform:rotate3d(0,0,1,-1020deg)}
  100%{transform:rotate3d(0,0,1,-300deg)}
}
@keyframes roulette-P7-N1{
  0%{transform:rotate3d(0,0,1,-360 * calc(15/7)+deg)}
  100%{transform:rotate3d(0,0,1,-360 * calc(1/7)+deg)}
}
@keyframes roulette-P7-N2{
  0%{transform:rotate3d(0,0,1,-360 * calc(16/7)+deg)}
  100%{transform:rotate3d(0,0,1,-360 * calc(2/7)+deg)}
}
@keyframes roulette-P7-N3{
  0%{transform:rotate3d(0,0,1,-360 * calc(17/7)+deg)}
  100%{transform:rotate3d(0,0,1,-360 * calc(3/7)+deg)}
}
@keyframes roulette-P7-N4{
  0%{transform:rotate3d(0,0,1,-360 * calc(18/7)+deg)}
  100%{transform:rotate3d(0,0,1,-360 * calc(4/7)+deg)}
}
@keyframes roulette-P7-N5{
  0%{transform:rotate3d(0,0,1,-360 * calc(19/7)+deg)}
  100%{transform:rotate3d(0,0,1,-360 * calc(5/7)+deg)}
}
@keyframes roulette-P7-N6{
  0%{transform:rotate3d(0,0,1,-360 * calc(20/7)+deg)}
  100%{transform:rotate3d(0,0,1,-360 * calc(6/7)+deg)}
}
@keyframes roulette-P8-N1{
  0%{transform:rotate3d(0,0,1,-765deg)}
  100%{transform:rotate3d(0,0,1,-45deg)}
}
@keyframes roulette-P8-N2{
  0%{transform:rotate3d(0,0,1,-810deg)}
  100%{transform:rotate3d(0,0,1,-90deg)}
}
@keyframes roulette-P8-N3{
  0%{transform:rotate3d(0,0,1,-855deg)}
  100%{transform:rotate3d(0,0,1,-135deg)}
}
@keyframes roulette-P8-N5{
  0%{transform:rotate3d(0,0,1,-945deg)}
  100%{transform:rotate3d(0,0,1,-225deg)}
}
@keyframes roulette-P8-N6{
  0%{transform:rotate3d(0,0,1,-990deg)}
  100%{transform:rotate3d(0,0,1,-270deg)}
}
@keyframes roulette-P8-N7{
  0%{transform:rotate3d(0,0,1,-1035deg)}
  100%{transform:rotate3d(0,0,1,-315deg)}
}
@keyframes roulette-P9-N1{
  0%{transform:rotate3d(0,0,1,-760deg)}
  100%{transform:rotate3d(0,0,1,-40deg)}
}
@keyframes roulette-P9-N2{
  0%{transform:rotate3d(0,0,1,-800deg)}
  100%{transform:rotate3d(0,0,1,-80deg)}
}
@keyframes roulette-P9-N4{
  0%{transform:rotate3d(0,0,1,-880deg)}
  100%{transform:rotate3d(0,0,1,-160deg)}
}
@keyframes roulette-P9-N5{
  0%{transform:rotate3d(0,0,1,-920deg)}
  100%{transform:rotate3d(0,0,1,-200deg)}
}
@keyframes roulette-P9-N7{
  0%{transform:rotate3d(0,0,1,-1000deg)}
  100%{transform:rotate3d(0,0,1,-280deg)}
}
@keyframes roulette-P9-N8{
  0%{transform:rotate3d(0,0,1,-1040deg)}
  100%{transform:rotate3d(0,0,1,-320deg)}
}
@font-face {
  font-family:'rouletteFont';
  src:url('@/assets/font/icomoon.eot?9e2chz');
  src:url('@/assets/font/icomoon.eot?9e2chz#iefix') format('embedded-opentype'),
      url('@/assets/font/icomoon.ttf?9e2chz') format('truetype'),
      url('@/assets/font/icomoon.woff?9e2chz') format('woff'),
      url('@/assets/font/icomoon.svg?9e2chz#icomoon') format('svg');
}
%lotteryATpart{
  animation-duration:.5s;
  animation-delay:1.5s;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}
.roulette_main___box__part{
  @extend %ulReset;
  width:100%;
  height:100%;
  border-radius: 50%;
  overflow: hidden;
  transform:rotate3d(0,0,0,0deg);
  // transition:filter .4s;
  position:relative;
  z-index:-1;
  &:after{
    content:"";
    @extend %wh100pPosaT0L0;
    border-radius:50%;
    box-shadow:0 0 size_pxToVw(12,$rouletteGameMobW) size_pxToVw(12,$rouletteGameMobW) rgba(#000,.5) inset;
    transform:translate3d(0,0,0); // 解safari bug
  }
  &-9{
    > .roulette_main___box__part_list{
      width: 34%;
      left: 33%;
      &:before{transform:rotate3d(0,0,1,-20deg);}
      &:nth-of-type(2){transform:rotate3d(0,0,1,40deg);}
      &:nth-of-type(3){transform:rotate3d(0,0,1,80deg);}
      &:nth-of-type(4){transform:rotate3d(0,0,1,120deg);}
      &:nth-of-type(5){transform:rotate3d(0,0,1,160deg);}
      &:nth-of-type(6){transform:rotate3d(0,0,1,200deg);}
      &:nth-of-type(7){transform:rotate3d(0,0,1,240deg);}
      &:nth-of-type(8){transform:rotate3d(0,0,1,280deg);}
      &:nth-of-type(9){transform:rotate3d(0,0,1,320deg);}
    }
    .roulette_main___box__part__color{
      &:before{transform:rotate3d(0,0,1,70deg) skew(50deg);}
      &:after{transform:rotate3d(0,0,1,-70deg) skew(-50deg);}
    }
  }
  &-8{
    > .roulette_main___box__part_list{
      width: 38.2%;
      left: 30.9%;
      &:before {transform:rotate3d(0,0,1,-22.5deg);}
      &:nth-of-type(2){transform:rotate3d(0,0,1,45deg);}
      &:nth-of-type(3){transform:rotate3d(0,0,1,90deg);}
      &:nth-of-type(4){transform:rotate3d(0,0,1,135deg);}
      &:nth-of-type(5){transform:rotate3d(0,0,1,180deg);}
      &:nth-of-type(6){transform:rotate3d(0,0,1,225deg);}
      &:nth-of-type(7){transform:rotate3d(0,0,1,270deg);}
      &:nth-of-type(8){transform:rotate3d(0,0,1,315deg);}
    }
    .roulette_main___box__part__color{
      &:before{transform:rotate3d(0,0,1,67.5deg) skew(45deg);}
      &:after{transform:rotate3d(0,0,1,-67.5deg) skew(-45deg);}
    }
  }
  &-7{
    > .roulette_main___box__part_list{
      width: 43.4%;
      left: 28.3%; 
      &:before {transform:rotate3d(0,0,1,calc(-360/14)+deg);}
      &:nth-of-type(2){transform:rotate3d(0,0,1,calc(360/7)+deg);}
      &:nth-of-type(3){transform:rotate3d(0,0,1,calc(2*360/7)+deg);}
      &:nth-of-type(4){transform:rotate3d(0,0,1,calc(3*360/7)+deg);}
      &:nth-of-type(5){transform:rotate3d(0,0,1,calc(4*360/7)+deg);}
      &:nth-of-type(6){transform:rotate3d(0,0,1,calc(5*360/7)+deg);}
      &:nth-of-type(7){transform:rotate3d(0,0,1,calc(6*360/7)+deg);}
    }
    .roulette_main___box__part__color{
      &:before{transform:rotate3d(0,0,1,64.4deg) skew(38.8deg);}
      &:after{transform:rotate3d(0,0,1,-64.4deg) skew(-38.8deg);}
    }
  }
  &-6{
    > .roulette_main___box__part_list{
      width: 50%;
      left: 25%;
      &:before {transform:rotate3d(0,0,1,-30deg);}
      &:nth-of-type(2){transform:rotate3d(0,0,1,60deg);}
      &:nth-of-type(3){transform:rotate3d(0,0,1,120deg);}
      &:nth-of-type(4){transform:rotate3d(0,0,1,180deg);}
      &:nth-of-type(5){transform:rotate3d(0,0,1,240deg);}
      &:nth-of-type(6){transform:rotate3d(0,0,1,300deg);}
    }
    .roulette_main___box__part__color:before{transform:rotate3d(0,0,1,60deg) skew(30deg);}
  }
  &_list{
    line-height:1;
    height: 50%;
    @extend %disFlexJustifyAlignCenter;
    flex-direction: column;
    padding-bottom: 1.5%;
    position: absolute;
    top: 0;
    transform-origin: 50% 100%;
    &:before{
      content:"";
      width:size_pxToVw(2,$rouletteGameMobW);
      height:100%;
      margin-left:-1px;
      position:absolute;
      top:0;
      left:50%;
      z-index:1;
      transform-origin:50% 100%;
      @extend %lotteryATpart;
    }
    &-prize, &-prize0{
      > .roulette_main___box__part__prizeName{padding-bottom:size_pxToVw(18,$rouletteGameMobW);}
    }
  }
  &__color{
    @extend %wh100pPosaT0L0;
    z-index:-1; // 解safari bug
    &:before, &:after{
      content:"";
      width: 100%;
      height: 100%;
      position:absolute;
      top:0;
    }
    &:before{
      left: -50%;
      transform-origin: 100% 100%;
    }
    &:after{
      left: 50%;
      transform-origin: 0% 100%;
    }
  }
  &__prizeName{
    font-size:size_pxToVw(14,$rouletteGameMobW);
    text-align: center;
    width: 70%;
    padding-bottom:size_pxToVw(12,$rouletteGameMobW);
    margin: 0;
    position: relative;
    &_txt{
      &-1{
        display: block;
        @extend %lotteryATpart;
      }
      &-2{@extend %wh100pPosaT0L0}
    }
  }
  &__awards{
    font-size:size_pxToVw(38,$rouletteGameMobW);
    font-family:Verdana, sans-serif;
    font-weight: bold;
    position: relative;
    &:before{
      display:block;
      @extend %lotteryATpart;
    }
    &:after{@extend %posaT0L0}
    &-, &-0{
      font-family:'rouletteFont';
      font-size:size_pxToVw(26,$rouletteGameMobW);
      text-indent:size_pxToVw(-1,$rouletteGameMobW);
      speak: never;
      /* 更好的字體渲染 */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    &-0{
      &:before, &:after{
        // content: "\e99e"; //獎盃
        // content: "\eabe"; //aapl
        content:"\e9d9";//星星
      }
    }
    @for $i from 1 through 9{
      &-#{$i}{
        &:before, &:after{content:"#{$i}"}
      }
    }
  }
}
// 動畫區
%rouletteLotteryPart{
  > ul.roulette_main___box__part{
    animation-duration:1.2s; // 2.2s
    animation-timing-function:cubic-bezier(0,0,.15,1.1);
    animation-fill-mode:both;
    animation-iteration-count:1;
  }
}
%rouletteLotteryBefore{
  &:before{animation-name:listYellowBorder-mob;}
}
%rouletteLotteryList{
  @extend %rouletteLotteryBefore;
  > .roulette_main___box__part__awards:before{animation-name:rouletteAwardsNumShadow-mob}
  .roulette_main___box__part__prizeName_txt-1{animation-name:roulettePrizeNameShadow-mob}
}
.roulette{
  &-popupOpen .roulette_main___box__part{
    &_list:before, &__prizeName_txt-1, &__awards:before{
      animation-play-state:paused;
    }
  }
  &_main___box_wrap{
    &-rotate > .roulette_main___box__part{
      animation-name:rouletteRotate;
      animation-timing-function:linear;
      animation-iteration-count:infinite;
      // filter:blur(1px);
      &-9{animation-duration:.3s} // 1圈 0.3秒，1.5秒 5圈
      &-8{animation-duration:.275s} // 1圈 0.275秒，1.5秒 5.45~圈
      &-7{animation-duration:.25s} // 1圈 0.25秒，1.5秒 6圈
      &-6{animation-duration:.225s} // 1圈 0.225秒，1.5秒 6.6~圈
    }
    &-P9, &-P8, &-P7, &-P6{
      @for $i from 0 through 5{
        // &-N0~5
        &-N#{$i}{@extend %rouletteLotteryPart;}
      }
      &-N0 > .roulette_main___box__part{animation-name:roulette-P6789-N0;}
      @for $i from 0 through 5{
        // &-N0~5 .roulette_main___box__part_list-num0~5
        &-N#{$i} .roulette_main___box__part_list-num#{$i}{
          @extend %rouletteLotteryList;
        }
      }
      @for $i from 0 through 4{
        // &-N0~4 .roulette_main___box__part_list-num1~5
        &-N#{$i} .roulette_main___box__part_list-num#{$i+1}{
          @extend %rouletteLotteryBefore;
        }
      }
    }
    &-P9, &-P8, &-P7{
      &-N5 .roulette_main___box__part_list-num6{@extend %rouletteLotteryBefore;}
      &-N6{
        @extend %rouletteLotteryPart;
        .roulette_main___box__part_list-num6{@extend %rouletteLotteryList;}
      }
    }
    &-P9, &-P8{
      &-N6 .roulette_main___box__part_list-num7{@extend %rouletteLotteryBefore;}
      &-N7{
        @extend %rouletteLotteryPart;
        .roulette_main___box__part_list-num7{@extend %rouletteLotteryList}
      }
    }
    &-P9{
      &-N1 > .roulette_main___box__part{animation-name:roulette-P9-N1}
      &-N2 > .roulette_main___box__part{animation-name:roulette-P9-N2}
      &-N3 > .roulette_main___box__part{animation-name:roulette-P6-N2-P9-N3}
      &-N4 > .roulette_main___box__part{animation-name:roulette-P9-N4}
      &-N5 > .roulette_main___box__part{animation-name:roulette-P9-N5}
      &-N6 > .roulette_main___box__part{animation-name:roulette-P6-N4-P9-N6}
      &-N7{
        > .roulette_main___box__part{animation-name:roulette-P9-N7}
        .roulette_main___box__part_list-num8{@extend %rouletteLotteryBefore;}
      }
      &-N8{
        @extend %rouletteLotteryPart;
        > .roulette_main___box__part{animation-name: roulette-P9-N8}
        .roulette_main___box__part_list-num{
          &8{@extend %rouletteLotteryList;}
          &0{@extend %rouletteLotteryBefore;}
        }
      }
    }
    &-P8{
      &-N1 > .roulette_main___box__part{animation-name:roulette-P8-N1}
      &-N2 > .roulette_main___box__part{animation-name:roulette-P8-N2}
      &-N3 > .roulette_main___box__part{animation-name:roulette-P8-N3}
      &-N4 > .roulette_main___box__part{animation-name:roulette-P6-N3-P8-N4}
      &-N5 > .roulette_main___box__part{animation-name:roulette-P8-N5}
      &-N6 > .roulette_main___box__part{animation-name:roulette-P8-N6}
      &-N7{
        > .roulette_main___box__part{animation-name: roulette-P8-N7;}
        .roulette_main___box__part_list-num0{@extend %rouletteLotteryBefore}
      }
    }
    &-P7{
      &-N1 > .roulette_main___box__part{animation-name:roulette-P7-N1}
      &-N2 > .roulette_main___box__part{animation-name:roulette-P7-N2}
      &-N3 > .roulette_main___box__part{animation-name:roulette-P7-N3}
      &-N4 > .roulette_main___box__part{animation-name:roulette-P7-N4}
      &-N5 > .roulette_main___box__part{animation-name:roulette-P7-N5}
      &-N6{
        > .roulette_main___box__part{animation-name:roulette-P7-N6;}
        .roulette_main___box__part_list-num0{@extend %rouletteLotteryBefore}
      }
    }
    &-P6{
      &-N1 > .roulette_main___box__part{animation-name:roulette-P6-N1}
      &-N2 > .roulette_main___box__part{animation-name:roulette-P6-N2-P9-N3}
      &-N3 > .roulette_main___box__part{animation-name:roulette-P6-N3-P8-N4}
      &-N4 > .roulette_main___box__part{animation-name:roulette-P6-N4-P9-N6}
      &-N5{
        > .roulette_main___box__part{animation-name:roulette-P6-N5;}
        .roulette_main___box__part_list-num0{@extend %rouletteLotteryBefore;}
      }
    }
  }
}
// 變版區
.normal, .newYear, .xmas{
  .roulette_main___box_wrap > .roulette_main___box__part > .roulette_main___box__part_list-prize0 > span.roulette_main___box__part__color{
    &:before, &:after{background-image:none}
  }
}
%rouletteLotteryPrizeName-red{
  .roulette_main___box__part__prizeName_txt-1{
    -webkit-text-stroke:3px $Dpink;
  }
}
.normal, .xmas{
  .roulette_main___box{
    &_wrap{
      &-P9, &-P8, &-P7, &-P6{
        @for $i from 0 through 8{
          // &-N0~8 .roulette_main___box__part_list-num0~8
          &-N#{$i} .roulette_main___box__part_list-num#{$i}{
            @extend %rouletteLotteryPrizeName-red;
          }
        }
      }
    }
    &__part{
      &_list:before{
        background-image:linear-gradient(
          0deg, $DYellow 0%,#ff0 14%,#ff0 35%,#fff 42%,#ffc600 72%
        );
      }
      &__awards:before{-webkit-text-stroke:size_pxToVw(6,$rouletteGameMobW) $Dpink;}
    }
  }
}
.normal .roulette_main___box__part{
  background-color:#c27af0;
  &-9 > .roulette_main___box__part_list{
    &:nth-of-type(2), &:nth-of-type(5), &:nth-of-type(8){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-32.7deg, #7402cc 12%, #c27af0 48%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(32.7deg, #7402cc 12%, #c27af0 48%, rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(3), &:nth-of-type(6), &:nth-of-type(9){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-32.7deg, #5a2eff 12%, #a87bff 48%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(32.7deg, #5a2eff 12%, #a87bff 48%, rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(1), &:nth-of-type(4), &:nth-of-type(7){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-32.7deg, #7d2eff 12%, #c1b0ff 48%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(32.7deg, #7d2eff 12%, #c1b0ff 48%, rgba(#fff,0) 0%);
        }
      }
    }
  }
  &-8 > .roulette_main___box__part_list{
    &:nth-of-type(2), &:nth-of-type(5), &:nth-of-type(8){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-35.3deg, #7402cc 12%, #c27af0 50%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(35.3deg, #7402cc 12%, #c27af0 50%, rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(6){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-35.3deg, #5a2eff 12%, #a87bff 50%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(35.3deg, #5a2eff 12%, #a87bff 50%, rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(4), &:nth-of-type(7){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-35.3deg, #7d2eff 12%, #c1b0ff 50%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(35.3deg, #7d2eff 12%, #c1b0ff 50%, rgba(#fff,0) 0%);
        }
      }
    }
  }
  &-7 > .roulette_main___box__part_list{
    &:nth-of-type(2), &:nth-of-type(5){
      > .roulette_main___box__part__color{
        &:before {
          background-image: linear-gradient(-38deg,#7402cc 12%,#c27af0 52%,rgba(#fff,0) 0%);
        }
        &:after {
          background-image: linear-gradient(38deg,#7402cc 12%,#c27af0 52%,rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(6) {
      > .roulette_main___box__part__color{
        &:before {
          background-image: linear-gradient(-38deg,#5a2eff 12%,#a87bff 52%,rgba(#fff,0) 0%);
        }
        &:after {
          background-image: linear-gradient(38deg,#5a2eff 12%,#a87bff 52%,rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(4), &:nth-of-type(7) {
      > .roulette_main___box__part__color{
        &:before {
          background-image: linear-gradient(-38deg,#7d2eff 12%,#c1b0ff 52%,rgba(#fff,0) 0%);
        }
        &:after {
          background-image: linear-gradient(38deg,#7d2eff 12%,#c1b0ff 52%,rgba(#fff,0) 0%);
        }
      }
    }
  }
  &-6 > .roulette_main___box__part_list{
    &:nth-of-type(2), &:nth-of-type(5){
      > .roulette_main___box__part__color:before{
        background-image:linear-gradient(-41deg, #7402cc 12%, #c27af0 54%, rgba(#fff,0) 0%);
      }
    }
    &:nth-of-type(3), &:nth-of-type(6){
      > .roulette_main___box__part__color:before{
        background-image:linear-gradient(-41deg, #5a2eff 12%, #a87bff 54%, rgba(#fff,0) 0%);
      }
    }
    &:nth-of-type(1), &:nth-of-type(4){
      > .roulette_main___box__part__color:before{
        background-image:linear-gradient(-41deg, #7d2eff 12%, #c1b0ff 54%, rgba(#fff,0) 0%);
      }
    }
  }
  &_list{
    &-prize0 > .roulette_main___box__part__color{
      &:before, &:after{background-color:#ff4d88}
    }
  }
  &__awards-{
    &:before, &:after{
      // content: "\e9e0"; //開心笑
      // content: "\e9e2"; //笑
      // content: "\e9e6"; //不開心
      // content: "\e9f2"; //哇
      // content:"\e9fc"; //...
      content: "\e9e9"; //笑臉
    }
  }
}
%rouletteLotteryPrizeName-CNY{
  .roulette_main___box__part__prizeName_txt-1{
    -webkit-text-stroke:3px $CNYtextFrame;
  }
}
.newYear .roulette_main___box{
  &_wrap{
    &-P9, &-P8, &-P7, &-P6{
      @for $i from 0 through 8{
        // &-N0~8 .roulette_main___box__part_list-num0~8
        &-N#{$i} .roulette_main___box__part_list-num#{$i}{
          @extend %rouletteLotteryPrizeName-CNY;
        }
      }
    }
  }
  &__part{
    background-color:$xmasBottomColor_2;
    &-9 > .roulette_main___box__part_list{
      &:nth-of-type(2), &:nth-of-type(5), &:nth-of-type(8){
        > .roulette_main___box__part__color{
          &:before{
            background-image:linear-gradient(-32.7deg, $CNYbottomColor_1 12%, $CNYtopColor_1 48%, rgba(#fff,0) 0%);
          }
          &:after{
            background-image: linear-gradient(32.7deg, $CNYbottomColor_1 12%, $CNYtopColor_1 48%, rgba(#fff,0) 0%);
          }
        }
      }
      &:nth-of-type(3), &:nth-of-type(6), &:nth-of-type(9){
        > .roulette_main___box__part__color{
          &:before{
            background-image:linear-gradient(-32.7deg, $CNYbottomColor_2 12%, $CNYtopColor_2 48%, rgba(#fff,0) 0%);
          }
          &:after{
            background-image:linear-gradient(32.7deg, $CNYbottomColor_2 12%, $CNYtopColor_2 48%, rgba(#fff,0) 0%);
          }
        }
      }
      &:nth-of-type(1), &:nth-of-type(4), &:nth-of-type(7){
        > .roulette_main___box__part__color{
          &:before{
            background-image:linear-gradient(-32.7deg, $CNYbottomColor_3 12%, $CNYtopColor_3 48%, rgba(#fff,0) 0%);
          }
          &:after{
            background-image: linear-gradient(32.7deg, $CNYbottomColor_3 12%, $CNYtopColor_3 48%, rgba(#fff,0) 0%);
          }
        }
      }
    }
    &-8 > .roulette_main___box__part_list{
      &:nth-of-type(2), &:nth-of-type(5), &:nth-of-type(8){
        > .roulette_main___box__part__color{
          &:before{
            background-image:linear-gradient(-35.3deg, $CNYbottomColor_1 12%, $CNYtopColor_1 50%, rgba(#fff,0) 0%);
          }
          &:after{
            background-image:linear-gradient(35.3deg, $CNYbottomColor_1 12%, $CNYtopColor_1 50%, rgba(#fff,0) 0%);
          }
        }
      }
      &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(6){
        > .roulette_main___box__part__color{
          &:before{
            background-image:linear-gradient(-35.3deg, $CNYbottomColor_2 12%, $CNYtopColor_2 50%, rgba(#fff,0) 0%);
          }
          &:after{
            background-image:linear-gradient(35.3deg, $CNYbottomColor_2 12%, $CNYtopColor_2 50%, rgba(#fff,0) 0%);
          }
        }
      }
      &:nth-of-type(4), &:nth-of-type(7){
        > .roulette_main___box__part__color{
          &:before{
            background-image:linear-gradient(-35.3deg, $CNYbottomColor_3 12%, $CNYtopColor_3 50%, rgba(#fff,0) 0%);
          }
          &:after{
            background-image:linear-gradient(35.3deg, $CNYbottomColor_3 12%, $CNYtopColor_3 50%, rgba(#fff,0) 0%);
          }
        }
      }
    }
    &-7 > .roulette_main___box__part_list{
      &:nth-of-type(2), &:nth-of-type(5){
        > .roulette_main___box__part__color{
          &:before {
            background-image: linear-gradient(-38deg,$CNYbottomColor_1 12%,$CNYtopColor_1 52%,rgba(#fff,0) 0%);
          }
          &:after {
            background-image: linear-gradient(38deg,$CNYbottomColor_1 12%,$CNYtopColor_1 52%,rgba(#fff,0) 0%);
          }
        }
      }
      &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(6) {
        > .roulette_main___box__part__color{
          &:before {
            background-image: linear-gradient(-38deg,$CNYbottomColor_2 12%,$CNYtopColor_2 52%,rgba(#fff,0) 0%);
          }
          &:after {
            background-image: linear-gradient(38deg,$CNYbottomColor_2 12%,$CNYtopColor_2 52%,rgba(#fff,0) 0%);
          }
        }
      }
      &:nth-of-type(4), &:nth-of-type(7) {
        > .roulette_main___box__part__color{
          &:before {
            background-image: linear-gradient(-38deg,$CNYbottomColor_3 12%,$CNYtopColor_3 52%,rgba(#fff,0) 0%);
          }
          &:after {
            background-image: linear-gradient(38deg,$CNYbottomColor_3 12%,$CNYtopColor_3 52%,rgba(#fff,0) 0%);
          }
        }
      }
    }
    &-6 > .roulette_main___box__part_list{
      &:nth-of-type(2), &:nth-of-type(5){
        > .roulette_main___box__part__color:before{
          background-image:linear-gradient(-41deg, $CNYbottomColor_1 12%, $CNYtopColor_1 54%, rgba(#fff,0) 0%);
        }
      }
      &:nth-of-type(3), &:nth-of-type(6){
        > .roulette_main___box__part__color:before{
          background-image:linear-gradient(-41deg, $CNYbottomColor_2 12%, $CNYtopColor_2 54%, rgba(#fff,0) 0%);
        }
      }
      &:nth-of-type(1), &:nth-of-type(4){
        > .roulette_main___box__part__color:before{
          background-image:linear-gradient(-41deg, $CNYbottomColor_3 12%, $CNYtopColor_3 54%, rgba(#fff,0) 0%);
        }
      }
    }
    &_list{
      &:before{
        background-image:linear-gradient(
          0deg,#8a542c 0%,#b7854b 25%,#fff 55%,#fff 65%,#e8a569 95%
        );
      }
      &-prize0 > .roulette_main___box__part__color{
        &:before, &:after{background-color:#eca95e}
      }
    }
    &__awards{
      &:before{-webkit-text-stroke:size_pxToVw(6,$rouletteGameMobW) $CNYtextFrame;}
      &-{
        &:before, &:after{
          content: "\e9e4";//吐舌頭
        }
      }
    }
  }
}
.xmas .roulette_main___box__part{
  background-color:$xmasTopColor_1;
  &-9 > .roulette_main___box__part_list{
    &:nth-of-type(2), &:nth-of-type(5), &:nth-of-type(8){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-32.7deg, $xmasBottomColor_1 12%, $xmasTopColor_1 48%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image: linear-gradient(32.7deg, $xmasBottomColor_1 12%, $xmasTopColor_1 48%, rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(3), &:nth-of-type(6), &:nth-of-type(9){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-32.7deg, $xmasBottomColor_2 12%, $xmasTopColor_2 48%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(32.7deg, $xmasBottomColor_2 12%, $xmasTopColor_2 48%, rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(1), &:nth-of-type(4), &:nth-of-type(7){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-32.7deg, $xmasBottomColor_3 12%, $xmasTopColor_3 48%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image: linear-gradient(32.7deg, $xmasBottomColor_3 12%, $xmasTopColor_3 48%, rgba(#fff,0) 0%);
        }
      }
    }
  }
  &-8 > .roulette_main___box__part_list{
    &:nth-of-type(2), &:nth-of-type(5), &:nth-of-type(8){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-35.3deg, $xmasBottomColor_1 12%, $xmasTopColor_1 50%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(35.3deg, $xmasBottomColor_1 12%, $xmasTopColor_1 50%, rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(6){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-35.3deg, $xmasBottomColor_2 12%, $xmasTopColor_2 50%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(35.3deg, $xmasBottomColor_2 12%, $xmasTopColor_2 50%, rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(4), &:nth-of-type(7){
      > .roulette_main___box__part__color{
        &:before{
          background-image:linear-gradient(-35.3deg, $xmasBottomColor_3 12%, $xmasTopColor_3 50%, rgba(#fff,0) 0%);
        }
        &:after{
          background-image:linear-gradient(35.3deg, $xmasBottomColor_3 12%, $xmasTopColor_3 50%, rgba(#fff,0) 0%);
        }
      }
    }
  }
  &-7 > .roulette_main___box__part_list{
    &:nth-of-type(2), &:nth-of-type(5){
      > .roulette_main___box__part__color{
        &:before {
          background-image: linear-gradient(-38deg,$xmasBottomColor_1 12%,$xmasTopColor_1 52%,rgba(#fff,0) 0%);
        }
        &:after {
          background-image: linear-gradient(38deg,$xmasBottomColor_1 12%,$xmasTopColor_1 52%,rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(6) {
      > .roulette_main___box__part__color{
        &:before {
          background-image: linear-gradient(-38deg,$xmasBottomColor_2 12%,$xmasTopColor_2 52%,rgba(#fff,0) 0%);
        }
        &:after {
          background-image: linear-gradient(38deg,$xmasBottomColor_2 12%,$xmasTopColor_2 52%,rgba(#fff,0) 0%);
        }
      }
    }
    &:nth-of-type(4), &:nth-of-type(7) {
      > .roulette_main___box__part__color{
        &:before {
          background-image: linear-gradient(-38deg,$xmasBottomColor_3 12%,$xmasTopColor_3 52%,rgba(#fff,0) 0%);
        }
        &:after {
          background-image: linear-gradient(38deg,$xmasBottomColor_3 12%,$xmasTopColor_3 52%,rgba(#fff,0) 0%);
        }
      }
    }
  }
  &-6 > .roulette_main___box__part_list{
    &:nth-of-type(2), &:nth-of-type(5){
      > .roulette_main___box__part__color:before{
        background-image:linear-gradient(-41deg, $xmasBottomColor_1 12%, $xmasTopColor_1 54%, rgba(#fff,0) 0%);
      }
    }
    &:nth-of-type(3), &:nth-of-type(6){
      > .roulette_main___box__part__color:before{
        background-image:linear-gradient(-41deg, $xmasBottomColor_2 12%, $xmasTopColor_2 54%, rgba(#fff,0) 0%);
      }
    }
    &:nth-of-type(1), &:nth-of-type(4){
      > .roulette_main___box__part__color:before{
        background-image:linear-gradient(-41deg, $xmasBottomColor_3 12%, $xmasTopColor_3 54%, rgba(#fff,0) 0%);
      }
    }
  }
  &_list-prize0 > .roulette_main___box__part__color{
    &:before, &:after{background-color:$redSpecialColor}
  }
  &__awards-{
    &:before, &:after{
      content: "\e9f0"; //小惡魔笑
    }
  }
}
@media screen and (min-width: 568px){
  %rouletteLotteryBeforeMobPig{
    &:before{animation-name:listYellowBorder-mobPigSize;}
  }
  %rouletteLotteryListMobPig{
    @extend %rouletteLotteryBeforeMobPig;
    > .roulette_main___box__part__awards:before{animation-name:rouletteAwardsNumShadow-mobPigSize;}
    .roulette_main___box__part__prizeName_txt-1{animation-name:roulettePrizeNameShadow-mobPigSize;}
  }
  .roulette_main___box{
    &_wrap{
      &-P9, &-P8, &-P7, &-P6{
        @for $i from 0 through 5{
          // &-N0~5 .roulette_main___box__part_list-num0~5
          &-N#{$i} .roulette_main___box__part_list-num#{$i}{
            @extend %rouletteLotteryListMobPig;
          }
        }
        @for $i from 0 through 4{
          // &-N0~4 .roulette_main___box__part_list-num1~5
          &-N#{$i} .roulette_main___box__part_list-num#{$i+1}{
            @extend %rouletteLotteryBeforeMobPig;
          }
        }
      }
      &-P9, &-P8, &-P7{
        &-N6 .roulette_main___box__part_list-num6{@extend %rouletteLotteryListMobPig;}
        &-N5 .roulette_main___box__part_list-num6{@extend %rouletteLotteryBeforeMobPig;}
      }
      &-P9, &-P8{
        &-N7 .roulette_main___box__part_list-num7{@extend %rouletteLotteryListMobPig;}
        &-N6 .roulette_main___box__part_list-num7{@extend %rouletteLotteryBeforeMobPig;}
      }
      &-P9{
        &-N7 .roulette_main___box__part_list-num8{@extend %rouletteLotteryBeforeMobPig;}
        &-N8 .roulette_main___box__part_list-num{
          &8{@extend %rouletteLotteryListMobPig;}
          &0{@extend %rouletteLotteryBeforeMobPig;}
        }
      }
      &-P8-N7 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeMobPig;}
      &-P7-N6 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeMobPig;}
      &-P6-N5 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeMobPig;}
    }
    &__part{
      &:after{box-shadow:0 0 20px 20px rgba(#000,.5) inset;}
      &_list{
        &:before{width:3px;}
        &-prize, &-prize0{
          > .roulette_main___box__part__prizeName{padding-bottom:27px;}
        }
      }
      &__prizeName{
        font-size:21px;
        padding-bottom:18px;
      }
      &__awards{
        font-size:58px;
        &:before{-webkit-text-stroke:9px $Dpink}
        &-, &-0{
          font-size:40px;
          text-indent:-1.5px;
        }
      }
    }
  }
  %rouletteLotteryPrizeNameMobPig-red{
    .roulette_main___box__part__prizeName_txt-1{
      -webkit-text-stroke:4px $Dpink;
    }
  }
  .normal, .xmas{
    .roulette_main___box{
      &_wrap{
        &-P9, &-P8, &-P7, &-P6{
          @for $i from 0 through 8{
            // &-N0~8 .roulette_main___box__part_list-num0~8
            &-N#{$i} .roulette_main___box__part_list-num#{$i}{
              @extend %rouletteLotteryPrizeNameMobPig-red;
            }
          }
        }
      }
      &__part__awards:before{-webkit-text-stroke:9px $Dpink}
    }
  }
  %rouletteLotteryPrizeNameMobPig-CNY{
    .roulette_main___box__part__prizeName_txt-1{
      -webkit-text-stroke:4px $CNYtextFrame;
    }
  }
  .newYear .roulette_main___box{
    &_wrap{
      &-P9, &-P8, &-P7, &-P6{
        @for $i from 0 through 8{
          // &-N0~8 .roulette_main___box__part_list-num0~8
          &-N#{$i} .roulette_main___box__part_list-num#{$i}{
            @extend %rouletteLotteryPrizeNameMobPig-CNY;
          }
        }
      }
    }
    &__part__awards:before{-webkit-text-stroke:9px $CNYtextFrame}
  }
}
@media screen and (min-width:1024px){
  %rouletteLotteryBeforeDesk{
    &:before{
      width: 4px;
      margin-left: -2px;
      transition:width .4s 1.5s, margin-left .4s 1.5s;
      animation-name:listYellowBorder-desk;
    }
  }
  %rouletteLotteryListDesk{
    @extend %rouletteLotteryBeforeDesk;
    > .roulette_main___box__part__awards:before{animation-name:rouletteAwardsNumShadow-desk;}
    .roulette_main___box__part__prizeName_txt-1{animation-name:roulettePrizeNameShadow-desk;}
  }
  .roulette_main___box{
    &_wrap{
      &-P9, &-P8, &-P7, &-P6{
        @for $i from 0 through 5{
          // &-N0~5 .roulette_main___box__part_list-num0~5
          &-N#{$i} .roulette_main___box__part_list-num#{$i}{
            @extend %rouletteLotteryListDesk;
          }
        }
        @for $i from 0 through 4{
          // &-N0~4 .roulette_main___box__part_list-num1~5
          &-N#{$i} .roulette_main___box__part_list-num#{$i+1}{
            @extend %rouletteLotteryBeforeDesk;
          }
        }
      }
      &-P9, &-P8, &-P7{
        &-N6 .roulette_main___box__part_list-num6{@extend %rouletteLotteryListDesk;}
        &-N5 .roulette_main___box__part_list-num6{@extend %rouletteLotteryBeforeDesk;}
      }
      &-P9, &-P8{
        &-N7 .roulette_main___box__part_list-num7{@extend %rouletteLotteryListDesk;}
        &-N6 .roulette_main___box__part_list-num7{@extend %rouletteLotteryBeforeDesk;}
      }
      &-P9{
        &-N7 .roulette_main___box__part_list-num8{@extend %rouletteLotteryBeforeDesk;}
        &-N8 .roulette_main___box__part_list-num{
          &8{@extend %rouletteLotteryListDesk;}
          &0{@extend %rouletteLotteryBeforeDesk;}
        }
      }
      &-P8-N7 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeDesk;}
      &-P7-N6 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeDesk;}
      &-P6-N5 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeDesk;}
    }
    &__part{
      &:after{box-shadow:0 0 size_pxToVw(25,$rouletteGameW) size_pxToVw(25,$rouletteGameW) rgba(#000,.5) inset;}
      &_list{
        padding-bottom:2%;
        &:before{width:2px}
        &-prize, &-prize0{
          > .roulette_main___box__part__prizeName{
            font-size:size_pxToVw(20,$rouletteGameW);
            padding-bottom:size_pxToVw(25,$rouletteGameW);
          }
        }
      }
      &__prizeName{
        font-size:size_pxToVw(20,$rouletteGameW);
        padding-bottom:size_pxToVw(16,$rouletteGameW);
      }
      &__awards{
        font-size:size_pxToVw(66,$rouletteGameW);
        &:before{-webkit-text-stroke:size_pxToVw(10,$rouletteGameW) $Dpink;}
        &-, &-0{
          font-size:size_pxToVw(48,$rouletteGameW);
          text-indent:0;
        }
      }
    }
  }
  .normal, .xmas{
    .roulette_main___box__part__awards:before{-webkit-text-stroke:size_pxToVw(10,$rouletteGameW) $Dpink;}
  }
  .newYear .roulette_main___box__part__awards:before{-webkit-text-stroke:size_pxToVw(10,$rouletteGameW) $CNYtextFrame;}
}
@media screen and (min-width: 1440px){
  %rouletteLotteryBeforeDeskPig{
    &:before{animation-name:listYellowBorder-deskPigSize}
  }
  %rouletteLotteryListDeskPig{
    @extend %rouletteLotteryBeforeDeskPig;
    > .roulette_main___box__part__awards:before{animation-name:rouletteAwardsNumShadow-deskPigSize;}
    .roulette_main___box__part__prizeName_txt-1{animation-name:roulettePrizeNameShadow-deskPigSize;}
  }
  .roulette_main___box{
    &_wrap{
      &-P9, &-P8, &-P7, &-P6{
        @for $i from 0 through 5{
          // &-N0~5 .roulette_main___box__part_list-num0~5
          &-N#{$i} .roulette_main___box__part_list-num#{$i}{
            @extend %rouletteLotteryListDeskPig;
          }
        }
        @for $i from 0 through 4{
          // &-N0~4 .roulette_main___box__part_list-num1~5
          &-N#{$i} .roulette_main___box__part_list-num#{$i+1}{
            @extend %rouletteLotteryBeforeDeskPig;
          }
        }
      }
      &-P9, &-P8, &-P7{
        &-N6 .roulette_main___box__part_list-num6{@extend %rouletteLotteryListDeskPig;}
        &-N5 .roulette_main___box__part_list-num6{@extend %rouletteLotteryBeforeDeskPig;}
      }
      &-P9, &-P8{
        &-N7 .roulette_main___box__part_list-num7{@extend %rouletteLotteryListDeskPig;}
        &-N6 .roulette_main___box__part_list-num7{@extend %rouletteLotteryBeforeDeskPig;}
      }
      &-P9{
        &-N7 .roulette_main___box__part_list-num8{@extend %rouletteLotteryBeforeDeskPig;}
        &-N8 .roulette_main___box__part_list-num{
          &8{@extend %rouletteLotteryListDeskPig;}
          &0{@extend %rouletteLotteryBeforeDeskPig;}
        }
      }
      &-P8-N7 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeDeskPig;}
      &-P7-N6 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeDeskPig;}
      &-P6-N5 .roulette_main___box__part_list-num0{@extend %rouletteLotteryBeforeDeskPig;}
    }
    &__part{
      &:after{box-shadow:0 0 25px 25px rgba(#000,.5) inset;}
      &__prizeName{
        font-size:20px;
        padding-bottom:16px;
      }
      &__awards{
        font-size:66px;
        &-, &-0{font-size:48px}
      }
    }
  }
  .normal, .xmas{
    .roulette_main___box__part__awards:before{-webkit-text-stroke:10px $Dpink;}
  }
  .newYear .roulette_main___box__part__awards:before{-webkit-text-stroke:10px $CNYtextFrame;}
}
</style>