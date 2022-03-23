import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store } from "./store/index.js";
import Element3 from 'element3'

const app = createApp(App)
// 注册一个全局自定义指令 `v-focus`
app.directive('focus', {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el) {
        // 聚焦元素
        el.focus()
    }
})
function se(){
    setTimeout(()=>{
        return 1000
    },1)
}
window.pp = se()
app.use(store).use(Element3).use(router).mount('#app')
