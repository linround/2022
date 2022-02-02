import { createRouter,createWebHashHistory} from "../grouter/index";
import Home from "../pages/home";
import Toggle from "../pages/toggle";
import About from "../pages/about";
import Transition from "../pages/transtion";
import Count from "../pages/count";

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
