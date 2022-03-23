<template>
{{msg}},
  {{msg2}},
  {{msg1}},
  {{course2}}
</template>

<script setup lang="ts">
import { computed, reactive, ref,Ref } from '@vue/runtime-core';

interface Todo{
  title:string,
  done:boolean
}
let todos:Ref = ref([{title:'学习Vue',done:false}])

interface VueCourse5 {
  name:string,
  price:number,
  test:number[]
}
type CourseProps = keyof VueCourse5 // 只能是name和price选一个
let k:CourseProps = 'name'
let k1:CourseProps = 'price' // 改成price
let k2:CourseProps = 'test'
console.log(k,k1)
console.log(todos)
interface timeline {
  name:string,
  price:number
}
enum score {
  good,nice
}
console.log(score[0],'------------0')
console.log(score['good'])


const msg = ref('') //  根据输入参数推导字符串类型
const msg1 = ref<string>('') //  可以通过范型显示约束

const obj = reactive({})
const course = reactive<timeline>({name: '玩转Vue3全家桶', price: 129})

const msg2 = computed(() => '') // 默认参数推导
const course2 = computed<timeline>(() => {
  return {name: '玩转Vue3全家桶', price: 129}
})


// T extends U ? X : Y 类型三元表达式

type ExtendsType<T> = T extends boolean ? {
  name:string
} : "rrr"
type ExtendsType1 = ExtendsType<boolean> // type ExtendsType1='重学前端'
let e:ExtendsType1 = {
  name:'s'
}
console.log(e,'====ExtendsType1')
type ExtendsType2 = ExtendsType<string> // type ExtendsType2='玩转Vue 3'



// K extends keyof T限制K的类型必须是T的属性之一
// T[K]是值得类型
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}
interface CourseObj {
  ww: number
  ee: number
}
const coursePrice:CourseObj = {
  "ww":129,
  "ee":129
}
const log = console.log



// 上面的代码等于下面的定义
// type CourseObj = {
//     玩转Vue 3: number;
//     重学前端: number;
// }

}
console.log(ty,'------ty')
// 上面的代码等于下面的定义
// type CourseObj = {
//     玩转Vue 3: number;
//     重学前端: number;
// }

log(getProperty(coursePrice,'ww'))
log(getProperty(coursePrice,'ee')) // 报错


interface Todo {
  title: string
  desc:string
  done: boolean
}

import axios from 'axios'
interface Api{
  '/course/buy':{
    id:number
  },
  '/course/comment':{
    id:number,
    message:string
  }
  '/course/404':{
    id:number
  }
}

function request<T extends keyof Api>(url:T,obj:Api[T]){
  return axios.post(url,obj)
}

request('/course/buy',{id:1})
request('/course/comment',{id:1,message:'嘎嘎好看'})
request('/course/comment',{id:1,message:'s'}) //如果message必传 怎么类型提醒缺少参数
request('/course/404',{id:1}) //接口不存在 类型怎么需要报错

</script>
<style scoped>

</style>