<template>
    <div class="shopcar_container">
        <!-- 购物车顶栏 -->
        <div class="shop_header_container">
            <div class="shop_header">
                <div @click="goBack" class="mui-icon mui-icon-back back"></div>
                <span class="words">购物车</span>
            </div>
        </div>
        <!-- 购物车主体 -->
        <div class="shop_body">
            <!-- 商品购物车中每个商品的信息卡片 -->
            <div
                class="mui-card goods_shop_info"
                v-for="item in $store.state.goodsShopcar"
                :key="item.id"
                >
                <div class="mui-card-content">
                    <div class="mui-card-content-inner content">
                        <!--isSelecte决定 商品是否被选勾选及两种图片的显示  -->
                        <div class="switch" @click="$store.commit('changeGoodsShopcarSelected', item.id)">
                            <img src="../../images/shopcar/check.png" v-show="!item.isSelected">
                            <img src="../../images/shopcar/checke.png" v-show="item.isSelected">
                        </div>
                        <img :src="item.img_url" alt class="goods_img">
                        <!-- 商品展示的右边部分 -->
                        <div class="info_body">
                            <div class="up">{{ item.title}}</div>
                            <div class="down">
                                <span class="price">￥{{item.price}}</span>
                                <!-- 商品数量盒子 -->
                                <div class="mui-numbox" data-numbox-min="1" data-numbox-max="99">
                                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                    <input
                                        id="test"
                                        :class="['mui-input-numbox', item.id]"
                                        type="number"
                                        :value="item.number"
                                        @change="changGoodsNumber(item.id)"
                                    >
                                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                                </div>
                                <!-- 删除购物车中的商品按钮 -->
                                <span class="mui-icon mui-icon-trash delete" @click='deleteGoods(item.id)'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商品结算卡片 -->
            <div class="mui-card shop_check_card" v-show='$store.getters.getAllCartNumber'>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner content">
                        <div class="switch">
                            <div class="switch_img" @click="$store.commit('changGoodsShopcarAllSelected')">
                                <img src="../../images/shopcar/check.png" alt v-show="!$store.getters. getIsAllGoodsSelected">
                                <img src="../../images/shopcar/checke.png" alt v-show="$store.getters. getIsAllGoodsSelected">
                            </div>
                            <span>全选</span>
                        </div>
                        <div class="check_clear">
                            <div class="all_money">
                                <span>合计:</span>
                                <span>￥{{ $store.getters.getAllCartSelectedMoney}}</span>
                            </div>
                            <div class="all_number" @click="payMoney">结算( {{ $store.getters.getAllCartSelectedNumber}} )</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  购物车清空提示 -->
            <div class='shopcar_none'   v-show='!$store.getters.getAllCartNumber'>
                <p >您的购物车空空如也！ ~~  <br>
                    记得时常犒劳自己哦
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
        }
    },
    methods : {
        // 根据id改变商品数目
        changGoodsNumber(id){
            // console.log(this.$refs.numberbox.value)
            this.$store.commit('changeGoodsShopcarNumber', {id:id,number:document.querySelector('.'+id).value })
        },
        //  页面后退
        goBack(){
            this.$router.go(-1)
        },
        // 删除商品事件
        deleteGoods(id){
             mui.confirm('', '确认要删除该商品吗？', ['确定','取消'],(e)=>{
					if (e.index == 0) {
                        this.$store.commit('deleteGoodsShopcarById', id)
					} else {
                        
					}
				})
        },
        //  结算购物车
        payMoney(){
             mui.confirm(
                "总计：￥"+this.$store.getters.getAllCartSelectedMoney,
                "付款中....",
                ["付款", "取消"],
                e => {
                    if (this.$store.getters.getIsSelectedGoodsShopcar){
                          if (e.index == 0) {
                        this.$store.commit('shopcarToWaitOrder')
                        this.$router.push("/user/waitOrder")
                        } else {
                        this.$store.commit('shopcarToUnPaymentGoods')
                        this.$router.push("/user/unPayment")
                     }
                    } else {
                        Toast('您还没有选择宝贝哦！')
                    }
                }
            );
        }
    },
    mounted(){
        //   初始化mui的数字盒子
        mui('.mui-numbox').numbox();
    }
};
</script>
<style lang="less" scoped>
.shopcar_container {
    //  购物车头部样式
    .shop_header_container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        .shop_header {
            background-color: #fc605a;
            width: 100%;
            min-width: 400px;
            max-width: 768px;
            margin: 0 auto;
            height: 55px;
            display: flex;
            align-items: center;
            text-align: center;
            .back {
                width: 10%;
                font-size: 40px;
                color: #fff;
                //  font-weight: lighter;
            }
            .words {
                font-size: 22px;
                width: 80%;
                color: #333;
            }
        }
    }
    //  购物页面主体样式
    .shop_body {
        padding: 55px 0;
        //  商品信息卡片样式
        .goods_shop_info {
            .content {
                display: flex;
                align-items: center;
                padding: 20px;
                .switch {
                    width: 8%;
                    text-align: center;
                    img {
                        width: 80%;
                        min-width: 25px;
                        max-width: 35px;
                    }
                }
                .goods_img {
                    width: 20%;
                    padding: 0 10px;
                    min-width: 80px;
                    max-width: 100px;
                }
                // 图片右边样式
                .info_body {
                    .up {
                        font-weight: bold;
                    }
                    .down {
                        margin-top: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .price {
                            color: red;
                            font-weight: bold;
                            font-size: 18px;
                            padding-left: 10px;
                        }
                        .delete {
                            font-size: 30px;
                            padding-right: 10px;
                            color: #999;
                        }
                    }
                }
            }
        }
        //  结算卡片样式
        .shop_check_card {
            .content {
                display: flex;
                align-items: center;
                padding: 20px;
                justify-content: space-between;
                // 选择按钮样式
                .switch {
                    display: flex;
                    align-items: center;
                    width: 24%;
                    text-align: center;
                    vertical-align: middle;
                    .switch_img {
                        width: 33.33%;
                        img {
                            width: 80%;
                            min-width: 25px;
                            max-width: 35px;
                        }
                    }
                    span {
                        font-size: 18px;
                        margin-top: -3px;
                        padding-left: 10px;
                        color: #999;
                    }
                }
                .check_clear {
                    display: flex;
                    align-items: center;
                    // 结算金钱
                    .all_money {
                        margin-right: 10px;
                        :first-child {
                            font-size: 18px;
                        }
                        :last-child {
                            color: red;
                        }
                    }
                    //  结算按钮样式
                    .all_number {
                        background-color: #fc605a;
                        // width: 60%;
                        height: 40px;
                        font-size: 22px;
                        border-radius: 20px;
                        padding: 0 14px;
                        line-height: 40px;
                        color: #fff;
                    }
                }
            }
        }
        //  购物车没有商品提示
        .shopcar_none {
            p {
                font-size: 24px;
                padding: 4% 5%;
                margin: 0;
                line-height: 40px;
            }
           
        }
    }
}
</style>


