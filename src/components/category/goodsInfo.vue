<template>
    <div class="goods_info_container">
        <!-- 顶部通栏 -->
        <div class="goods_top_container">
            <div class="goods_top">
                <span class="mui-icon mui-icon-back back" @click="goBack"></span>
                <span class="top_title">商品详情</span>
                <span></span>
            </div>
        </div>
        <!-- 轮播图 -->
        <div class="mui-card swiper_card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <info-swiper></info-swiper>
                </div>
            </div>
        </div>
        <!-- 购买卡片 -->
        <div class="mui-card goods_buy_card">
            <!-- 标题及收藏 -->
            <div class="mui-card-header header">
                <span class="goods_name">{{ goodsInfoData.title }}</span>
                <div :class="['heaet_div', heartFlag?'active':'']" @click="changHeartFlag">
                    <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
                    <span ref="heart">收藏</span>
                </div>
            </div>
            <!-- 购买商品的购买信息 -->
            <div class="mui-card-content">
                <div class="mui-card-content-inner content">
                    <div class="price">
                        <div class="price_inner">
                            <div class="old">
                                市场价：
                                <span>￥{{goodsInfoData.old_price}}</span>
                            </div>
                            <div class="new">
                                销售价：
                                <span>￥{{goodsInfoData.new_price}}</span>
                            </div>
                        </div>
                        <div class="share">
                            <span class="mui-icon-extra mui-icon-extra-share"></span>
                            <span>分享</span>
                        </div>
                    </div>
                    <div class="number">数 &nbsp;量：
                        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="99">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input
                                id="test"
                                class="mui-input-numbox"
                                type="number"
                                value="1"
                                ref="number"
                            >
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                    <div class="btn">
                        <mt-button type="primary">立即购买</mt-button>
                        <mt-button type="danger" @click="addShopcar">放入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品详细信息 -->
        <div class="mui-card more_info_card">
            <div class="mui-card-header">商品简介</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner content">
                    <p>产&nbsp;&nbsp; &nbsp;品：姗蔻无毒指甲油包邮环保裸色指甲油儿童孕妇持久无毒指甲油快干</p>
                    <p>净含量：7.5ml</p>
                    <p>上市时间：2018-09-01</p>
                    <p>颜色分类：湖水蓝 裸粉色 透明亮片 玫红色 珠光红</p>
                    <p>肤&nbsp;&nbsp; &nbsp;质：任何肤质</p>
                    <p>产&nbsp;&nbsp; &nbsp;地：中国</p>
                </div>
            </div>
        </div>
        <!-- 商店评论 -->
        <div class="mui-card comment_card">
            <div class="mui-card-header header">
                <span>商品评论( 124 )</span>
                <p>全部评论 ></p>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner content">
                    <div>
                        <span>张**</span>
                        <p>发表时间：2018-11-11</p>
                    </div>
                    <span>卖家服务态度很好，随商品也有附赠的小赠品，感觉买这家的商品很舒服。快递也非常快，接到东西的时候还感到有些意外：怎么这么快？！</span>
                </div>
            </div>
        </div>
        <!-- 店铺信息 -->
        <div class="mui-card store_card">
            <div class="mui-card-header header">
                <img src="../../images/category/goods_logo.jpg" alt>
                Sweet city美甲官方旗舰店
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner content">
                    <div class="decoration">
                        <div>
                            <span>描述相符</span>
                            <p>
                                4.9
                                <i>高</i>
                            </p>
                        </div>
                        <div>
                            <span>服务态度</span>
                            <p>
                                4.9
                                <i>高</i>
                            </p>
                        </div>
                        <div>
                            <span>发货速度</span>
                            <p>
                                4.9
                                <i>高</i>
                            </p>
                        </div>
                        <div class="last_div">
                            <span>关注人数</span>
                            <p>564</p>
                        </div>
                    </div>
                    <div class="btn">
                        <mt-button type="default" size="large" plain class="button">关注店铺</mt-button>
                        <mt-button type="default" size="large" plain class="button">进店逛逛</mt-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品分割线 -->
        <div class="more_goods_line">
            <span></span>
            <p>更多惊喜</p>
            <span></span>
        </div>
        <!-- 更多其余商品列表 -->
        <category-list-info></category-list-info>
    </div>
</template>

<script>
import infoSwiper from "./subcom/infoSwiper.vue";
import categoryListInfo from "./subcom/categoryListInfo.vue";
import { Toast } from "mint-ui";
import mui from "../../lib/mui/js/mui.min.js";
export default {
    data() {
        return {
            heartFlag: false,
            goodsInfoData: {
                title:
                    "Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03",
                old_price: "99",
                new_price: "89"
            }
        };
    },
    methods: {
        //  收藏图标的flag
        changHeartFlag() {
            this.heartFlag = !this.heartFlag;
            if (this.heartFlag) {
                this.$refs.heart.innerHTML = "已收藏";
            } else {
                this.$refs.heart.innerHTML = "收藏";
            }
        },
        // 页面后退
        goBack() {
            this.$router.back();
        },
        // 请求商品数据
        getGoodsInfoData() {
            this.$http.get("goods/info/" + this.$route.params.id).then(
                resolve => {
                    if (resolve.body.statu === 0) {
                        this.goodsInfoData = resolve.body.data;
                    } else {
                        Toast("请求商品信息失败");
                    }
                },
                reject => {
                    Toast("请求商品信息错误");
                }
            );
        },
        // 将商品加入到购物车中
        addShopcar() {
            let numRandom = Math.ceil(Math.random() * 8);
            this.$store.commit("addGoodsShopcar", {
                id: "goods" + numRandom,
                price: Math.ceil(Math.random() * 50) + 40,
                number: this.$refs.number.value,
                isSelected: true,
                title:
                    "Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03",
                img_url:
                    "../../images/category/category_info" + numRandom + ".jpg"
            });
        }
    },
    components: {
        infoSwiper,
        categoryListInfo
    },
    created() {
        this.getGoodsInfoData();
    },
    mounted() {
        mui(".mui-numbox").numbox();
    }
};
</script>
<style lang="less" scoped>
.goods_info_container {
    padding-bottom: 45px;
    .goods_top_container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 55px;
        z-index: 1000;
        .goods_top {
            display: flex;
            text-align: center;
            height: 100%;
            margin: 0 auto;
            align-items: center;
            background-color: #fc605a;
            width: 100%;
            max-width: 786px;
            min-width: 400px;
            span {
                width: 10%;
                font-size: 40px;
                color: #fff;
            }
            .top_title {
                width: 80%;
                font-size: 22px;
                color: #333;
            }
        }
    }
    .swiper_card {
        margin-top: 65px;
    }
    .goods_buy_card {
        .header {
            display: flex;
            .goods_name {
                width: 85%;
            }
            .heaet_div {
                // padding: 0 10px;
                width: 15%;
                color: #999;
                display: flex;
                flex-direction: column;
                text-align: center;
                span {
                    width: 100%;
                }
                &.active {
                    color: #fc605a;
                }
            }
        }
        .content {
            .price {
                display: flex;
                font-size: 14px;
                line-height: 22px;
                .price_inner {
                    width: 80%;
                    display: flex;
                    .old {
                        span {
                            text-decoration: line-through;
                            color: #666;
                        }
                    }
                    .new {
                        margin-left: 15px;
                        span {
                            color: red;
                            font-size: 18px;
                            font-weight: blod;
                        }
                    }
                }
                .share {
                    display: flex;
                    align-items: center;
                    background-color: #ddd;
                    padding: 0 5px 0;
                    border-radius: 15px;
                    color: #777;
                    span {
                        padding: 0 2px;
                    }
                }
            }
            .number {
                margin-top: 10px;
            }
            .btn {
                margin-top: 10px;
            }
        }
    }
    .more_info_card {
        .content {
            p {
                padding: 3px 0;
                margin: 0;
            }
        }
    }
    .comment_card {
        .header {
            color: #4d525d;
            p {
                margin: 0;
                color: #fc605a;
            }
        }
        .content {
            div {
                display: flex;
                justify-content: space-between;
                color: #8f8f94;
                span {
                    padding-left: 10px;
                }
            }
        }
    }
    .store_card {
        .header {
            justify-content: flex-start;
        }
        .content {
            .decoration {
                display: flex;
                div {
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    border-right: 1px solid #ccc;
                    span {
                        color: #999;
                    }
                    p {
                        font-weight: bold;
                        color: #4d525d;
                        i {
                            background-color: pink;
                            color: red;
                            font-style: normal;
                            border-radius: 7px;
                            padding: 2px;
                            font-size: 10px;
                            font-weight: normal;
                        }
                    }
                }
                .last_div {
                    border: none;
                }
            }
            .btn {
                display: flex;
                justify-content: space-around;
                .button {
                    width: 45%;
                    height: 35px;
                    // line-height: 30px;
                }
            }
        }
    }
    .more_goods_line {
        display: flex;
        // justify-content: center;
        color: #8f8f8f;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        p {
            margin: 0;
            padding: 0 10px;
        }
        span {
            width: 25%;
            text-decoration: line-through;
            background-color: #ccc;
            height: 1px;
        }
    }
}
</style>


