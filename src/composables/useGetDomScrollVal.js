import { onMounted, onUnmounted, ref } from "vue"
export function GetDomScrollVal(event){
  // console.log(event);
  // console.log(event.offsetTop, event.offsetHeight);
  // let timer = null;
  // const etop = ref(0)
  // const windowResizeFn = () => {
  //         if(timer) clearTimeout(timer);
  //         timer = setTimeout(() => {
  //           console.log(event.offsetTop, event.offsetHeight);
  //           etop.value = event.offsetTop
  //           const et = event.offsetTop,
  //                 eh = event.offsetHeight,
  //                 eb = et + eh;
  //           return eb;
  //         },100);
  //       };
  const domVal = () => [event.offsetTop, event.offsetTop+event.offsetHeight];
  onMounted(() => {
    window.addEventListener('resize',windowResizeFn);
  });
  // onUpdated(() => {
  //   window.addEventListener('resize',windowResizeFn);
  // });
  onUnmounted(() => {
    window.removeEventListener('resize',windowResizeFn);
  })
  return { domVal }
}