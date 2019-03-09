<template>
    <div class="user_com_container">
        <!-- 组件头部 -->
        <div class="com_header_container">
            <div class="com_header">
                <span class="mui-icon mui-icon-arrowleft back" @click="goBack"></span>
                <span class="words">{{isDisplayBtn.keyWords}}</span>
            </div>
        </div>
        <!-- 组件身体-商品信息卡片 -->
        <div class="com_body_card" v-for="item in goodsInfo" :key="item.id+new Date()">
            <!-- 卡片头部 -->
            <div class="card_header padding">
                <span class="time">2014-05-06</span>
                <span class="order">{{isDisplayBtn.keyWords}}</span>
            </div>
            <!-- 卡片商品信息 -->
            <div class="card_goods padding">
                <img :src="'../'+item.img_url" alt>
                <div class="goods_left">
                    <span class="name">{{ item.title }}</span>
                    <span class="price">￥{{ item.price}}</span>
                    <span class="number">×{{ item.number}}</span>
                </div>
            </div>
            <!-- 商品总额 -->
            <div class="card_goods_money padding">
                <span class="words">商品总额</span>
                <span class="money">￥{{ item.price* item.number}}</span>
            </div>
            <!-- 商品的按钮 -->
            <div class="card_btn padding">
                <mt-button type="default" size="small" plain v-if="isDisplayBtn.cancelOrder">取消订单</mt-button>
                <mt-button type="default" size="small" plain v-if="isDisplayBtn.orderInfo">订单详情</mt-button>
                <mt-button type="default" size="small" plain v-if="isDisplayBtn.lookWhere">查看物流</mt-button>
                <mt-button type="primary" size="small" class="changBc" v-if="isDisplayBtn.toPay">去付款</mt-button>
                <mt-button
                    type="primary"
                    size="small"
                    class="changBc"
                    v-if="isDisplayBtn.applyMoney"
                >申请退款</mt-button>
                <mt-button
                    type="primary"
                    size="small"
                    class="changBc"
                    v-if="isDisplayBtn.comfirmGoods"
                >确认收货</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isDisplayBtn: {},
            btnFlag: this.isDisplayBtn,
            //  待付款按钮配置
            showToPay: {
                cancelOrder: true,
                orderInfo: true,
                lookWhere: false,
                toPay: true,
                applyMoney: false,
                comfirmGoods: false,
                keyWords: "待付款"
            },
            //  待发货按钮配置
            showWaitOrder: {
                cancelOrder: false,
                orderInfo: true,
                lookWhere: false,
                toPay: false,
                applyMoney: true,
                comfirmGoods: false,
                keyWords: "待发货"
            },
            // 待收货按钮配置
            showWaitGoods: {
                cancelOrder: false,
                orderInfo: true,
                lookWhere: true,
                toPay: false,
                applyMoney: true,
                comfirmGoods: true,
                keyWords: "待收货"
            }
        };
    },
    methods: {
        // 页面后退
        goBack() {
            this.$router.back();
        },
        //  根据传递过来的值判断显示那些按钮
        showWhoBtn() {
            if (this.isDisplayBtn.showToPay) {
                this.isDisplayBtn = this.showToPay;
            } else if (this.isDisplayBtn.showWaitOrder) {
                this.isDisplayBtn = this.showWaitOrder;
            } else if (this.isDisplayBtn.showWaitGoods) {
                this.isDisplayBtn = this.showWaitGoods;
            }
        }
    },
    props: ["isDisplayBtn", "goodsInfo"],
    created() {
        this.showWhoBtn();
    }
};
</script>
<style lang="less" scoped>
.user_com_container {
    // 组件头部
    padding-bottom: 75px;
    .com_header_container {
        width: 100%;
        height: 55px;
        position: fixed;
        left: 0;
        top: 0;
        .com_header {
            display: flex;
            align-items: center;
            margin: 0 auto;
            width: 100%;
            min-width: 400px;
            max-width: 768px;
            height: 55px;
            background-color: #fff;
            text-align: center;
            .back {
                width: 10%;
                font-size: 40px;
                color: #999;
            }
            .words {
                width: 80%;
                font-size: 30px;
            }
        }
    }
    // 卡片单独样式
    .com_body_card {
        margin-top: 75px;
        background-color: #fff;
        // 卡片头部
        .card_header {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            .time {
                color: #999;
            }
            .order {
                color: #fc605a;
            }
        }
        // 商品信息
        .card_goods {
            display: flex;
            border-bottom: 1px solid #ccc;
            align-items: center;
            img {
                width: 25%;
            }
            .goods_left {
                display: flex;
                flex-direction: column;
                align-content: space-around;
                .name {
                    margin-left: 5%;
                }
                .price {
                    margin-top: 3%;
                    padding-right: 3%;
                    text-align: right;
                    font-size: 30px;
                    color: #fc605a;
                }
                .number {
                    margin-top: 2%;
                    padding-right: 3%;
                    color: #999;
                    text-align: right;
                }
            }
        }
        //  商品总额
        .card_goods_money {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            font-size: 22px;
            .words {
                color: #555;
            }
            .money {
                padding-right: 3%;
                color: #999;
            }
        }
        //  按钮样式
        .card_btn {
            display: flex;
            justify-content: flex-end;
            text-align: right;
            button {
                height: 50px;
                margin: 0 1%;
                padding: 0 2%;

                font-size: 18px;
            }
            .changBc {
                background-color: #45c018;
            }
        }
    }
}
</style>


