<template>
    <div class="home_container">
        <div class='home_header_container'>
            <div class="home_header">
            <div class="search">
                <span class="mui-icon mui-icon-search"></span>
                <input type="text" name id placeholder="连衣裙就是你的女人味" @click="goSearch">
            </div>
            <div class="mui-icon-extra mui-icon-extra-notice notice"></div>
            <router-link to="/shopcar" tag="div" class="mui-icon-extra mui-icon-extra-cart shopcar"></router-link>
        </div>
        </div>
      
        <div class="home_content">
            <swiper></swiper>
            <!-- 导航卡片 -->
            <div class="mui-card nav_card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner content">
                        <div>
                            <img src="../../images/home_nav1.png" alt>
                        </div>
                        <div>
                            <img src="../../images/home_nav2.png" alt>
                        </div>
                        <div>
                            <img src="../../images/home_nav3.png" alt>
                        </div>
                        <div>
                            <img src="../../images/home_nav4.png" alt>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 九宫格卡片 -->
            <div class="mui-card grid_card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner content">
                        <div>
                            <img src="../../images/home_grid1.png" alt>
                            <p>我的店铺</p>
                        </div>
                        <div>
                            <img src="../../images/home_grid2.png" alt>
                            <p>招商加盟</p>
                        </div>
                        <div>
                            <img src="../../images/home_grid3.png" alt>
                            <p>我的喜欢</p>
                        </div>
                        <div>
                            <img src="../../images/home_grid4.png" alt>
                            <p>猜你喜欢</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 新品卡片 -->
            <day-New-card></day-New-card>
            <!-- 流行商品盒子 -->
            <popular-card></popular-card>
        </div>
    </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import popularCard from "./popularCard.vue";
import dayNewCard from "./dayNewCard.vue";
export default {
    data() {
        return {};
    },
    methods: {
        goSearch() {
            this.$router.push("/search");
        }
    },
    components: {
        swiper,
        popularCard,
        dayNewCard
    }
};
</script>
<style lang="less" scoped>
.home_container {
    background-color: transparent;
    .home_header_container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        .home_header {
        background-color: #fc605a;
        width: 100%;
        max-width: 768px;
        min-width: 400px;
        height: 55px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        text-align: center;
        z-index: 1000;
        .search {
            position: relative;
            width: 80%;
            span {
                position: absolute;
                // height: 38px;
                line-height: 36px;
                padding-left: 10px;
                color: #fc605a;
                font-size: 30px;
            }
            input {
                margin: 0;
                height: 38px;
                border-radius: 19px;
                width: 90%;
                padding: 6px 15px 6px 45px;
            }
        }
        .notice,
        .shopcar {
            width: 10%;
            font-weight: blod;
            color: #fff;
            font-size: 30px;
        }
    }
    }
    .home_content {
        padding: 55px 0 50px;
        .nav_card {
            margin: 0;
            box-shadow: none;
            border-bottom: 1px solid #ccc;
            .content {
                display: flex;
                padding: 15px 0 13px;
                div {
                    width: 25%;
                    text-align: center;
                    img {
                        width: 80%;
                    }
                }
            }
        }
        .grid_card {
            margin: 12px 0 0;
            box-shadow: none;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            .content {
                display: flex;
                padding: 15px 0 13px;
                div {
                    width: 25%;
                    text-align: center;
                    img {
                        width: 40%;
                    }
                    p {
                        margin: 0;
                        color: #363636;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>


