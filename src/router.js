import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './views/home'
import login from './views/login'
import loader from './views/loader'

//  此处不加 Vue.use(VueRouter), 后面 所有的组件使用this.$router 则会找不到
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', redirect:'loader'},
        {path: '/loader', component: loader},
        { path: '/home',component: home},
        { path: '/login',component: login},
    ]
})
export default router