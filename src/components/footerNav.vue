<template>
		<!--底部导航栏-->
    <div class="footer_container">
        <div class="footer_inner">
            <router-link class to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span>首页</span>
            </router-link>
            <router-link class to="/category">
                <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                <span class>分类</span>
            </router-link>
            <router-link class to="/shopcar">
                <span class="mui-icon-extra mui-icon-extra-cart">
                    <span class="shop_number" v-show='$store.getters.getAllCartNumber'>{{$store.getters.getAllCartNumber}}</span>
                </span>
                <span class>购物车</span>
            </router-link>
            <router-link class to="/user">
                <span class="mui-icon mui-icon-contact"></span>
                <span class>个人中心</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.footer_container {
		// 辅助底部导航栏居中 
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    height: 55px;
    background-color: #fff;
		padding-top: 2px;
		 //  路由被选中颜色变化的样式
    .color-active {
        span {
            color: #fc605a;
        }
		}
		// 底部导航栏样式
    .footer_inner {
        box-shadow: 0 -2px 4px #d7d7d7;
        border-top: 1px solid #ccc;
        position: static;
        margin: 0 auto;
        width: 100%;
        max-width: 768px;
        min-width: 400px;
        display: flex;
        height: 100%;
        a {
            height: 100%;
            width: 25%;
            color: #353535;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 13px;
				}
				//  购物车上数字样式
        .shop_number {
            position: absolute;
            font-size: 10px;
            background-color: red;
            color: #fff;
            padding: 1px 5px;
            border-radius: 6px;
            transform: translateX(-50%);
        }
    }
}
</style>


