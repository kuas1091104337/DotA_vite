<script setup>
import {onMounted} from 'vue';
import axios from 'axios';
import {debounce} from '@/lib/debounce.js';
const todoId = ref(1),
			todoData = ref(null),
			inputVal = ref(null),
      fetchData = async () => {
        todoData.value = null;
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
        todoData.value = await res.json();
        console.log(todoData.value);
      },
      loadData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/'+todoId.value)
        .then(res => {
          todoData.value = res.data;
          console.log(res.data);
        }).catch(error => console.log(error.response));
      },
      inputBarHandle = () => {
        console.log(inputVal.value.value);
      },
      inputBtnHandle = () => {
        console.log(inputVal.value.value);
      };
// watch(todoId,(newVal) => {
//   console.log(newVal)
//   fetchData()
// });
// watch(todoId,fetchData);
// watch(todoId,loadData);
watch(todoId,debounce(loadData,300));
onMounted(() => {
  // fetchData();
  loadData();
});
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
  <input 
    type="number" 
    placeholder="number"
    ref="inputVal"
    @keyup.enter="inputBarHandle"
  >
  <label @click="inputBtnHandle">click</label>
</template>

<style lang="scss">

</style>