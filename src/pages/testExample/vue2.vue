<script setup>
const persons = reactive([
                  {id:'001',name:'張三',age:18},
                  {id:'002',name:'李四',age:19},
                  {id:'003',name:'王老五',age:20},
                ]),
      car = reactive({
              name:'奧迪A8',
              price:'70萬',
              color:'黑色'
            }),
      str = ref('Hello');
</script>

<template>
  <!-- 遍歷數組 -->
  <ul>
    <li v-for="item in persons" :key="item.id">
      <p>id:{{item.id}}, name:{{item.name}}, age:{{item.age}}</p>
    </li>
  </ul>
  <!-- 遍歷對象 -->
  <ul>
    <li v-for="(val, key) of car" :key="key">
      <p>{{val}} - {{key}}</p>
    </li>
  </ul>
  <!-- 遍歷字符串 -->
  <ul>
    <li v-for="(char, idx) of str" :key="idx">
      {{char}} - {{idx}}
    </li>
  </ul>
  <!-- 遍歷指定次數 -->
  <ul>
    <li 
      :class="['num_'+num]"
      v-for="(num, idx) of 5" 
      :key="num"
    >
      {{num}} - {{idx}}
    </li>
  </ul>
</template>

<style lang="scss">

</style>