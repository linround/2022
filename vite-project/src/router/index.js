import {createRouter,createWebHashHistory} from 'vue-router';
import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Transition from '../pages/transtion.vue'
import Toggle from '../pages/toggle.vue'
import Count from '../pages/count.vue'
import Element from '../pages/element.vue'

import NProgress from 'nprogress' // progress bar
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
console.log(NProgress,'-------------nprogress')
router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()
    next()
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
export default router