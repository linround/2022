
<template>
  <span @click="onRate(num)" v-for='num in 5' :key="num">★</span>

</template>
<script setup>
import { defineProps, defineEmits,computed, ref} from 'vue';

let emits = defineEmits('update-rate')
function onRate(num){
  emits('update-rate',num)
}
</script>