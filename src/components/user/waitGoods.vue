<template>
    <div class="waitGoods_container">
        <user-card-com :isDisplayBtn='toIsSubDisplayBtn' :goodsInfo='$store.state.waitGoodsGoods'> </user-card-com>
    </div>
</template>
<script>
import userCardCom from './subcom/userCardCom.vue'
export default {
    data(){
        return {
            // 为卡片组件传递一个确定显示那个按钮的对象
            toIsSubDisplayBtn : {
                showWaitGoods : true
            }
        }
    },
    methods: {
        // 页面后退
        goBack() {
            this.$router.back();
        }
    },
    components: {
        userCardCom
    }
};
</script>
<style lang="less" scoped>
.unPayment_container {
   
}
</style>
