
<template>
  <div class="app" @click="add">
    {{count}}+
    <div class="sass app-sass">sass</div>
  </div>

  <Heading :level="1">1</Heading>

  <Heading class="p" :level="2">2</Heading>
  <Heading :level="3">3</Heading>

  <Heading2 :level="3"></Heading2>
  <Timeline></Timeline>
  <ts></ts>
</template>

<script setup>
import {Timeline} from "../components/TimeLine";
import Heading from "../components/Heading";

import ts from "../components/ts.vue";

import Heading2 from "../components/Heading2";
import { computed } from 'vue'
import {useStore} from 'vuex'
let store = useStore()
let count = computed(()=>store.state.count)
let that = this
function add(){
  console.log(that)
  store.commit('add')
  store.dispatch('asyncAdd')
}
</script>
<style lang="scss">
.app{
  .sass{
    color:red;
  }
  &-sass {
    font-size: 90px;
  }
}
</style>