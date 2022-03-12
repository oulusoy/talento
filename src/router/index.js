import Vue from 'vue'
import VueRouter from "vue-router";
import Home from './../view/Home.vue'
const Customer = () => import('../view/Customer');

Vue.use(VueRouter)

const routes = [
       { path: '/', component: Home },
       { path: '/customer', component: Customer },
    ]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;