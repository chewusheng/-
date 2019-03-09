<template>
    <div class='app_container'>
        <!-- 为路由的转化添加动画 -->
        <transition>
            <router-view class='content'></router-view>
        </transition>
        <!-- 用于为底部导航栏添加一个动画 -->
        <transition>
            <footerNav v-show="$store.state.footerNavFlag"></footerNav>
        </transition>
        
    </div>
</template>
<script>
//  引入底部导航栏
import footerNav from'./components/footerNav.vue'
export default {
    components : {
        footerNav
    },
    watch : {
        //  监视路由变化，如果路由变化到相应的路由则改变 底部导航栏的flag
        '$route.path'(newValue, oldvalue){
            var arr = ['login', 'register', 'search'];
            var flag = true;
            arr.some(item=>{
                  if (  newValue.indexOf(item) !== -1){
                    //   console.log(newValue.indexOf(item))
                      return flag = false;
                }
            });
            // console.log(flag)
            this.$store.commit('changeFooterNavFlag', flag)
        }
    }
}
</script>

<style lang="less" scoped>
.app_container {
    width: 100%;
    max-width: 768px;
    min-width: 400px;
    height: 100%;
    // background-color: #ccc;
    position: relative;
    margin: 0 auto; 
}
.v-enter {
    transform: translateX(200px);
    opacity: 0;
}
.v-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
.v-enter-active,
.v-leave-active {
    transition: all .25s ease;
}
.v-leave-active {
    position: absolute;
}
</style>

