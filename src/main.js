//  引入模块
import Vue  from 'vue'
import app from './app.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import 'mint-ui/lib/style.css'
import './css/reset.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



//  配置模块
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)


// 配置参数
// 设置跟路由
Vue.http.options.root = "http://cc"
// 设置全局post提交格式
Vue.http.options.emulateJSOn = true



//  创建vue实例
var vm = new Vue({
    el : "#app",
    render : c=> c(app),
    router,
    store
})