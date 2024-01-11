<script setup>
const props = defineProps({
        totalItems: {
          type: Number,
          required: true,
        },
        itemsPerPage: {
          type: Number,
          default: 10,
        },
        currentPage: {
          type: Number,
          default: 1,
        },
      }),
      totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage)),
      pages = computed(() => {
        const pagesArray = [];
        for (let i = 1; i <= totalPages.value; i++){pagesArray.push(i)}
        return pagesArray;
      });
</script>

<template>
<ul>
  <li v-if="currentPage>1" @click="currentPage--">上一页</li>
  <li 
    v-for="page in pages" 
    :key="page" 
    :class="{ active: page === currentPage }" 
    @click="currentPage = page"
  >{{ page }}</li>
  <li v-if="currentPage<totalPages" @click="currentPage++">下一页</li>
</ul>
</template>

<style lang="scss">
.active { font-weight: bold; }
// 这是一个简单的分页组件，它接受三个props: totalItems，itemsPerPage和currentPage。
// totalItems是要分页的总项目数，itemsPerPage是每页要显示的项目数，currentPage是当前选定的页码。

// 在setup函数中，我们使用Vue 3的ref和computed函数来计算总页数和页面数组。
// pages计算属性返回一个包含所有页面数字的数组，我们可以使用v-for指令将其渲染为一系列页面链接。
// 我们还可以使用v-if指令来隐藏上一页和下一页链接，如果当前页是第一页，则隐藏上一页链接，
// 如果当前页是最后一页，则隐藏下一页链接。

// 在CSS中，我们使用.active类来突出显示当前选定的页面数字。
</style>