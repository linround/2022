
<template>

  <transition name="modal">
    <div class="info-wrapper" v-if="showModal">
      <div class="info">      哥，你啥也没输入！    </div>
    </div>
  </transition>
  <button @click="toggle">click</button>

  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>
  <button @click="clear">清理</button>
  <input type="text" v-model="title" @keydown.enter="addTodo" />
  <ul>
    <transition-group name="flip-list" tag="ul">
      <li v-for="(todo,i) in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
        <span class="remove-btn" @click="removeTodo($event,i)">
            ❌
          </span>
      </li>
    </transition-group>

  </ul>

  <span class="dustbin">
      🗑
    </span>
  <div class="animate-wrap">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="animate" v-show="animate.show">
        动画元素
      </div>
    </transition>
  </div>
</template>


<script setup>
import {ref,reactive} from 'vue'
let showTitle = ref(true)
let showModal = ref(false)
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

function toggle(){
  showTitle.value = !showTitle.value
  showModal.value = !showModal.value
}

let animate = reactive({
  show:false,
  el:null
})
function beforeEnter(el){
  window.animate = animate
  // 点击的元素
  let dom = animate.el
  // 可视区
  let rect = dom.getBoundingClientRect()
  console.log(rect)
  let x = window.innerWidth - rect.right
  let y = rect.top
  console.log(el,'----el')
  console.log(x,y)
  console.log(rect)
  //
  el.style.transform = `translate(-${x}px, ${y}px)`
}
function enter(el,done){
  console.log(el,'---------------done--el')
  console.log(done,'-------------done')
  document.body.offsetHeight
  el.style.transform = `translate(0,0)`

  el.addEventListener('transitionend', done)
}
function afterEnter(el){
  animate.show = false
  el.style.display = 'none'
}
function removeTodo(e,i){
  // 点击处
  animate.el = e.target
  // 触发动画
  animate.show = true
  todos.value.splice(i,1)
}
</script>

<style>

.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all .3s ease;
}

.animate-wrap .animate{
  position :fixed;
  right :10px;
  top :10px;
  z-index: 100;
  transition: all 5s linear;
  animation-timing-function: cubic-bezier(.55, 0, .85, .36);

}
.ball-x { animation-timing-function: linear; }
.ball-y { animation-timing-function: cubic-bezier(.55, 0, .85, .36); }
</style>
