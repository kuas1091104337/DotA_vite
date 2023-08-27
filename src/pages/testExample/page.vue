<script setup>
const props = defineProps({
  total:{ // 总数
    type:[Number, String],
    default: 0
  },
  pageNum:{ // 当前页数
    type:[Number, String],
    default: 1
  },
  pageSize:{ // 每页显示条数
    type:[Number, String],
    default: () => 10
  },
  sizesList:{ // 可选 每页显示条数的选项设置
    type:Array,
    default:() => [10, 20, 50, 100]
  },
});

</script>

<template>

</template>

<style lang="scss">

</style>