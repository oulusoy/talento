import Vue from 'vue'
import Router from 'vue-router'
import Home from './../view/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home },
    ],
    mode: 'history',
    base: process.env.BASE_URL,
})