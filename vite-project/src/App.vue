<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    {{count}}
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
    <router-link to="/transition">动画</router-link>

    <router-link to="/toggle">动画-toggle</router-link>
    <router-link to="/count">store---count</router-link>
    <router-link to="/element">element</router-link>
  </div>


  <router-view></router-view>
</template>
<script>
import {ref} from 'vue'

function fib(n){
  let arr = [1,1]
  let i = 2
  while(i<=n){
    arr[i] = arr[i-1]+arr[i-2]
    i++
  }
  return arr[n]
}
let count = ref(fib(38))


</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
