
<template>

  <h1>你的评分是 {{score}}</h1>
  <Rate :value="score" @update-rate="update"></Rate>

</template>

<script setup>
import {ref} from 'vue'
import Rate from '../components/Rate.vue'
let score = ref(3.5)
function update(num){
  score.value = num
}

</script>
