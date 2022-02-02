import {createRouter,createWebHashHistory} from 'vue-router';
import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Transition from '../pages/transtion.vue'
import Toggle from '../pages/toggle.vue'
import Count from '../pages/count.vue'
import Element from '../pages/element.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/toggle',
        name: 'Toggle',
        component: Toggle
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/transition',
        name: 'Transition',
        component: Transition
    },
    {
        path: '/count',
        name: 'Count',
        component: Count
    },
    {
        path: '/element',
        name: 'Element',
        component: Element
    },
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router