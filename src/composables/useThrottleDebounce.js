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
        },
        // 節流防抖函數：需要頻繁觸發的函數，出於優化性能在規定時間內，讓第1次和最後1次生效，中間不生效
        throttleDebounce = (fn) => {
          let lastTime = 0, timer = null;
          return () => {
            const nowTime = Date.now();
            if(nowTime - lastTime > 250){
              // fn().call(this); // 修正this指向問題
              fn();
              lastTime = nowTime;
            }
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
              // fn().call(this); // 修正this指向問題
              fn();
            },500)
          }
        };
  return { throttle, debounce, throttleDebounce }
}
// example
// debounce(functionName,delayTime)
// $btn.onclick = debounce(addFn(),400)
// window.addEventListener('resize',debounce(windowResizeFn,400));

// throttle(functionName,delayTime)
// document.body.addEventListener('scroll',throttle(windowScrollFn,200));

// throttleDebounce(functionName)
// document.body.addEventListener('scroll',throttleDebounce(windowScrollFn));