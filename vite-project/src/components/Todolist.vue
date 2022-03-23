
<template>
  <div>
    {{ count }}
    <div>x: {{x}}</div>
    <div>y:{{y}}</div>
    <button @click="add">addCount</button>
    <input  type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-focus v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <h1> {{ active }} / {{ all }} </h1>
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";

import {useMouse} from '../utils/mouse'

let {x,y} = useMouse()
function useTodos() {
  let title = ref("");
  let todos = ref([{ title: "学习Vue", done: false }]);
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }
  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
  });
  let all = computed(() => todos.value.length);
  let allDone = computed({
    get: function () {
      return active.value === 0;
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value;
      });
    },
  });
  return { title, todos, addTodo, clear, active, all, allDone };
}
let count = ref(1);
let color= ref('red')
let redFlag = true
let redColor = redFlag ? ref('red') : ref('blue')
function add(){

  count.value++
  redFlag=!redFlag
  console.log(redColor,redFlag)
};
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
</script>


<style scoped>
h1 {
  color: v-bind(redColor);
}
</style>