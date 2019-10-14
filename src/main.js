import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入所有的MintUI
// 导入 Mint -UI
import MintUI from 'mint-ui'

import VueResource from 'vue-resource'
// 这里可以省略 node_modules 这一层目录
import 'mint-ui/lib/style.css'
// 导入 bootstrap 样式包
import 'bootstrap/dist/css/bootstrap.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
// 导入格式化时间组件
import moment from 'moment'
Vue.use(MintUI)
Vue.use(VueResource)
Vue.config.productionTip = false

// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
   moment(dataStr).format(pattern)
})
// 设置请求的根路径
Vue.http.options.root = 'http://127.0.0.1:8081';
// 全局设置 post 时候标点数据格式组织形式  application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
