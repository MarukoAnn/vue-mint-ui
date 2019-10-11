import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './views/home'
import login from './views/login'
import loader from './views/loader'
import main from './views/tabbar/mainContainer'
import search from './views/tabbar/searchContainer'
import shopcar from './views/tabbar/shopcarContainer'
import member from './views/tabbar/memberContainer'
import newsList from './views/newsList'
import newsInfo from './views/NewsInfo'

//  此处不加 Vue.use(VueRouter), 后面 所有的组件使用this.$router 则会找不到
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', redirect:'loader'},
        {path: '/loader', component: loader},
        { path: '/home', component: home, children: [
            {path: 'main', component: main},
            {path: 'search', component: search},
            {path: 'member', component: member},
            {path: 'shopcar', component: shopcar},
            {path: 'main/newsList', component: newsList},
            {path: 'main/newsinfo/:id', component: newsInfo}
        ]},
        { path: '/login',component: login},
       
       
    ],
    linkActiveClass: 'mui-active'  // 覆盖默认的路由高亮的类，默认的类叫做router-link-active
})
export default router