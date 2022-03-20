import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../view/Home.vue'
const Employee = () => import('../view/Employee');

Vue.use(VueRouter)

const routes = [
       { path: '/', component: Home },
       { path: '/employee', component: Employee },
    ]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;