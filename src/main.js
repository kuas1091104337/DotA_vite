import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from "vue-i18n";

import App from '@/App.vue';
import router from '@/router';
import us from "@/language/en-US.json";
import tw from '@/language/zh-TW.json';
import cn from '@/language/zh-CN.json';
import "virtual:svg-icons-register";
import '@/assets/scss/normalize.scss';
import '@/assets/scss/dotaBase.scss';

// const i18nLocale = localStorage.getItem('locale') || 'zh-TW';
const app = createApp(App);
const i18n = createI18n({
        legacy: false,
        locale: localStorage.getItem('locale') || 'zh-TW',
        fallbackLocale: 'zh-TW',
        messages: {
          'en-US': us,
          'zh-TW': tw,
          'zh-CN': cn
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
