import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from "vue-i18n";

import App from '@/App.vue';
import router from '@/router';
import zh from '@/language/zh-TW.json';
import en from "@/language/en-US.json";
import jp from "@/language/jp-JP.json";
import "virtual:svg-icons-register";
import '@/assets/scss/normalize.scss';

// const i18nLocale = localStorage.getItem('locale') || 'zh-TW';
const app = createApp(App);
const i18n = createI18n({
        legacy: false,
        locale: localStorage.getItem('locale') || 'zh-TW',
        fallbackLocale: 'zh-TW',
        messages: {
          'zh-TW': zh,
          'en-US': en,
          'jp-JP': jp
        }
      });

app.directive('focus',{
  mounted(el){
    el.focus();
    console.log(el);
  }
});
import { numPrice } from '@/lib/numToPrice.js';
app.directive('price',{
  mounted(el, binding){
    el.innerText = numPrice(binding.value);
  },
  updated(el, binding){
    el.innerText = numPrice(binding.value);
  }
});

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
