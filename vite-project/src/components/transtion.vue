
<template>

  <div class="box" :style="{width:width+'px'}"></div>
  <button @click="change">click</button>
</template>

<script setup>
import {ref} from 'vue'
let width= ref(100)
function change(){
  width.value += 100
}
</script>

<style>
.box{
  background:red;
  height:100px;
}
</style>