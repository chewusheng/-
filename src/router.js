import VueRouter  from 'vue-router'

// 导入组件
import Home from './components/home/home.vue'
import Category from './components/category/category.vue'
import Shopcar from './components/shopcar/shopcar.vue'
import User from './components/user/user.vue'
import Search from './components/search.vue'
import GoodsInfo from './components/category/goodsInfo.vue'
import Login  from './components/user/login.vue'
import Register  from './components/user/register.vue'
import UnPayment from './components/user/unPayment.vue'
import WaitOrder from './components/user/waitOrder.vue'
import WaitGoods from './components/user/waitGoods.vue'


export default new VueRouter({
    routes : [
        {path :'/', redirect: '/home'},
        {path :'/home', component : Home},
        {path : '/category', component : Category},
        {path : '/category/goodsInfo/:id', component : GoodsInfo},
        {path : '/shopcar', component : Shopcar},
        {path : '/user', component : User},
        {path : '/user/login', component : Login},
        {path : '/user/register', component : Register},
        {path : '/user/unPayment', component : UnPayment},
        {path : '/user/waitOrder', component : WaitOrder},
        {path : '/user/waitgoods', component : WaitGoods},
        {path :'/search', component : Search}
    ],
    linkActiveClass : "color-active"
}) 


