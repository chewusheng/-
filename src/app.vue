<template>
    <div class='app_container'>
        <transition>
            <router-view class='content'></router-view>
        </transition>
        <footerNav></footerNav>
    </div>
</template>


<script>

import footerNav from'./components/footerNav.vue'
export default {
    components : {
        footerNav
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

