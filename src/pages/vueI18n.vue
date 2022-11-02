<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
console.log(locale.value);
watch(locale, (newlocale) => {
  console.log(newlocale);
  localStorage.setItem("locale", newlocale);
});
</script>

<template>
<TestHead />
<div class="i18n">
  <nav class="navChildren">
    <RouterLink class="navChildren_a" to="/vueI18n/">vue i18n</RouterLink>
    <RouterLink class="navChildren_a" to="/vueI18n/about">about</RouterLink>
  </nav>
  <div>
    <select v-model="locale">
      <option disabled value="">語言選擇</option>
      <option value="zh-TW">zh-TW</option>
      <option value="zh-CN">zh-CN</option>
      <option value="en-US">en-US</option>
    </select>
  </div>
  <RouterView />
</div>
</template>

<style lang="scss" scoped>
.i18n{
  text-align:center;
  &_img{
    width: 150px;
  }
}
.navChildren_a{margin: 5px;}
</style>