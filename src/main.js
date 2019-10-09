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
import '../node_modules/mui/css/mui.min.css'
import '../node_modules/mui/css/icons-extra.css'
Vue.use(MintUI)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
