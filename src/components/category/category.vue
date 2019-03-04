<template>
    <div class="category_container">
        <div class="category_top_container">
            <div class="category_top">
                <div @click="goBack" class="mui-icon mui-icon-back back"></div>
                <span class="words">商品分类</span>
                <router-link class="mui-icon mui-icon-search search" to="/search"></router-link>
            </div>
        </div>
        <div class="category_content">
            <div
                id="sliderSegmentedControl"
                class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted content_top"
            >
                <div class="mui-scroll inner">
                    <div v-for="(item,i) in categoryTitleData" :key="item.id" :class="['mui-control-item', i===0?'mui-active':'']" @click='postInfoId(item.id)'>
                        <img :src="item.img_url" alt>
                        <span >{{ item.title }}</span>
                        {{ getLine(i) }}
                    </div>
                </div>
            </div>
            <category-list-info :goodsListInfoId = 'nowId'> </category-list-info>
        </div>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
import categoryListInfo from './subcom/categoryListInfo.vue'
export default {
    data() {
        return {
            categoryTitleData: [
                {
                    img_url: "../../images/category/category_left1.png",
                    title: "潮流美妆",
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_left2.png",
                    title: "时尚女装",
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_left3.png",
                    title: "精品男装",
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_left4.png",
                    title: "内衣",
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_left5.png",
                    title: "母婴用品",
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_left6.png",
                    title: "居家百货",
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_left7.png",
                    title: "时尚智能",
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_left8.png",
                    title: "营养保健",
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_left9.png",
                    title: "女鞋箱包",
                    id: Math.random() * 2 + Math.random() * 3
                }
            ],
            nowId: ''
        };
    },
    methods: {
        goBack() {
            this.$router.back();
        },
        getCategoryTitleData() {
            this.$http.get("category/title").then(
                resolve => {
                    if (resolve.body.statu === 0) {
                        this.categoryTitleData = resolve.body.data;
                           this.nowId = this.categoryTitleData[0].id;
                    } else {
                        Toast("请求分类页面标题失败");
                    }
                },
                reject => {
                    Toast("请求分类页面标题错误");
                }
            );
        },
        getLine(i){
            if (i < this.categoryTitleData.length-1){
                return '|'
            }
        },
        // 为categoryInfo页面传递id
        postInfoId(id){
            this.nowId = id;
        }
    },
    created() {
        this.getCategoryTitleData();
    },
    mounted() {
        // mui.init();
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005,
            scrollY: true,
            scrollX: true
        });
    },
    components : {
        categoryListInfo
    }
};
</script>
<style lang="less" scoped>
* {
    touch-action: pan-x;
}
.category_container {
    // height: 100%;
    .category_top_container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        .category_top {
            background-color: #fc605a;
            width: 100%;
            min-width: 400px;
            max-width: 768px;
            margin: 0 auto;
            height: 55px;
            display: flex;
            align-items: center;
            text-align: center;
            .back,
            .search {
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
    .category_content {
        padding: 55px 0 50px;
        background-color: #fff;
        height: 100%;
        width: 100%;
        // display: flex;
        // position: relative;
        .content_top {
            height: 45px;
            //   margin-top: 10px;
            .inner {
                display: flex;
                // box-shadow: 0 1px 0 rgba(0,0,0,.5);
                div {
                    display: flex;
                    align-items: center;
                    background-color: #f5f5f5;
                    //  border-right: 1px solid #ccc;
                    //  border-bottom: 1px solid #ccc;
                    //  box-shadow: 1px 1px 0 rgba(0, 0,0,.3);
                    padding: 0;
                   &.mui-active {
                       border: none;
                       color: inherit;
                       span {
                           color: #fc605a;
                       }
                   }
                    img {
                        width: 44px;
                        height: 28px;
                        padding: 0 8px;
                        //  width: 70%;
                    }
                    span {
                        padding: 0 7px;
                        height: 38px;
                        // border-right: 1px solid #aaa;
                    }
                   
                }
                
            }
        }
       
    }
}
</style>


