<script setup>
let id = 0; // 给每个 todo 对象一个唯一的 id
const newTodo1 = ref(''),
      newTodo2 = ref(''),
      todos1 = ref([
        { id: id++, text: 'Learn HTML', done: true },
        { id: id++, text: 'Learn JavaScript', done: true },
        { id: id++, text: 'Learn Vue', done: false }
      ]),
      todos2 = ref([
        { text: 'Learn HTML' },
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' }
      ]),
      hideCompleted = ref(false),
      filteredTodos = computed(() => hideCompleted.value ? todos1.value.filter(el => !el.done) : todos1.value),
      addTodo1 = () => {
        todos1.value.push({ id:id++, text:newTodo1.value, done:false });
        newTodo1.value = '';
        console.log(todos1.value);
      },
      removeTodo1 = (item) => {
         // todos1.value = todos1.value.filter(el => el.id !== item.id)
        todos1.value = todos1.value.filter(el => el !== item)
        console.log(todos1.value);
      },
      addTodo2 = () => {
        todos2.value.push({ text:newTodo2.value });
        newTodo2.value = '';
        console.log(todos2.value);
      },
      removeTodo2 = (item) => {
        todos2.value = todos2.value.filter(el => el !== item)
        console.log(todos2.value);
      };
</script>

<template>
  <div class="wrap">
    <div class="wrap_exp">
      <form @submit.prevent="addTodo1">
        <input type="text" v-model="newTodo1">
        <button>Add Todo</button>
      </form>
      <ul>
        <!-- <li v-for="item in todos1" :key="item.id"> -->
        <li v-for="item in filteredTodos" :key="item.id">
          <p>
            <input type="checkbox" v-model="item.done">
            <span :class="['listText',{done:item.done}]">{{ item.id+1 }} . {{ item.text }}</span>
            <button @click="removeTodo1(item)">X</button>
          </p>
        </li>
      </ul>
      <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
    </div>
    <div class="wrap_exp">
      <form @submit.prevent="addTodo2">
        <input type="text" v-model="newTodo2">
        <button>Add Todo</button>
      </form>
      <ul>
        <li v-for="(item, idx) in todos2" :key="idx">
          <p>
            <span class="listText">{{ idx+1 }} . {{ item.text }}</span>
            <button @click="removeTodo2(item)">X</button>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.wrap{
  display: flex;
  &_exp{
    padding: 15px;
  }
}
.listText{padding: 0 10px;}
.done{text-decoration: line-through}
</style>