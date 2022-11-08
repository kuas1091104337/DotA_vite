import { onMounted, onUnmounted, readonly, ref } from "vue"

export function ThrottleDebounce(){
        // 函數節流：需要頻繁觸發的函數，出於優化性能，只讓函數觸發的第1次生效，後面不生效
  const throttle = (fn,delay) => {
          let lastTime = 0;
          return () => {
            const nowTime = Date.now();
            if(nowTime - lastTime > delay){
              // fn().call(this); // 修正this指向問題
              fn();
              lastTime = nowTime;
            }
          }
        },
        // 防抖函數：需要頻繁觸發的函數，在規定時間內，只讓最後1次生效，前面不生效
        debounce = (fn,delay) => {
          let timer = null;
          return () => {
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
              // fn().apply(this); // 修正this指向問題
              fn();
            }, delay)
          }
        };
        // throttle(functionName,delayTime)
        // debounce(functionName,delayTime)
  return { 
    throttle, debounce
  }
}