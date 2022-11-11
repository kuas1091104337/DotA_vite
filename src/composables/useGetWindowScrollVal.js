import { onMounted, onUnmounted, readonly, ref } from "vue"
import { useThrottleDebounce } from '@/composables';
export function GetWindowScrollVal(){
  const { throttleDebounce } = useThrottleDebounce(),
        windowScrollTop = ref(0),
        windowScrollMiddle = ref(0),
        windowScrollBottom = ref(0),
        windowScrollFn = () => {
          const st = document.scrollingElement.scrollTop,
                wh = window.innerHeight;
          windowScrollTop.value = st;
          // windowScrollMiddle.value = st + wh*0.6;
          windowScrollMiddle.value = st + wh/2;
          windowScrollBottom.value = st + wh;
        };
  onMounted(() => {
    window.addEventListener('scroll',throttleDebounce(windowScrollFn));
    // window.addEventListener('scroll',windowScrollFn);
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll',throttleDebounce);
    // window.removeEventListener('scroll',windowScrollFn);
  })
  return { 
    windowScrollTop:readonly(windowScrollTop), 
    windowScrollMiddle:readonly(windowScrollMiddle), 
    windowScrollBottom :readonly(windowScrollBottom)
  }
}