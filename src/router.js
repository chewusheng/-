import VueRouter  from 'vue-router'

// 导入组件
import Home from './components/home/home.vue'
import Category from './components/category/category.vue'
import Shopcar from './components/shopcar/shopcar.vue'
import User from './components/user/user.vue'
import Search from './components/search.vue'
import GoodsInfo from './components/category/goodsInfo.vue'

export default new VueRouter({
    routes : [
        {path:'/', redirect: '/home'},
        {path:'/home', component : Home},
        {path: '/category', component : Category},
        {path: '/category/goodsInfo/:id', component : GoodsInfo},
        {path: '/shopcar', component: Shopcar},
        {path : '/user', component: User},
        {path:'/search', component: Search}
    ],
    linkActiveClass : "color-active"
}) 


