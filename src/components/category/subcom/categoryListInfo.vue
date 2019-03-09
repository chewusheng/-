<template>
    <div class="goodsList_container">
        <router-link tag='div' v-for="item in goodsListInfoData" :key="item.id"  :to="'/category/goodsInfo/'+item.id" >
            <img :src="item.img_url" alt>
            <h4>{{ item.info }}</h4>
            <div class="price">
                <span>￥{{ item.new_price}}</span>
                <span>￥{{ item.old_price}}</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            goodsListInfoData: [
                {
                    img_url: "../../images/category/category_info1.jpg",
                    info:
                        "Sweet City/都市甜心油性指甲油美甲套装 魅影OL裸色系列7+1礼盒 TC03",
                    new_price: 89,
                    old_price: 99,
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_info2.jpg",
                    info: "美宝莲 色秀指甲油新潮波点套装裸色亮片糖果色快干美甲",
                    new_price: 122,
                    old_price: 134,
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_info3.jpg",
                    info:
                        "Sweet City/都市甜心油性指甲油美甲套装 魅影星期色系列7+1礼盒 TC01",
                    new_price: 109,
                    old_price: 189,
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_info4.jpg",
                    info: "BGIRL指甲油套装12ml*3(M807+M814+M801)",
                    new_price: 33,
                    old_price: 49,
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_info5.jpg",
                    info: "UPLUS优家4色指甲油套装8ml*4瓶",
                    new_price: 49,
                    old_price: 59,
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_info6.jpg",
                    info: "UPLUS 优家4色指甲油套装 8ml*4瓶",
                    new_price: 39,
                    old_price: 67,
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_info7.jpg",
                    info:
                        "Sweet City/都市甜心油性指甲油美甲套装 魅影星期色系列7+1礼盒 TC01",
                    new_price: 39,
                    old_price: 59,
                    id: Math.random() * 2 + Math.random() * 3
                },
                {
                    img_url: "../../images/category/category_info8.jpg",
                    info: "UPLUS优家4色指甲油套装8ml*4瓶",
                    new_price: 49,
                    old_price: 99,
                    id: Math.random() * 2 + Math.random() * 3
                }
            ]
        };
    },
    props: ["goodsListInfoId"],
    methods: {
        //  发送请求获取数据
        getGoodsListInfoData() {
            this.$http.get("category/list/" + this.goodsListInfoId).then(
                resolve => {
                    if (resolve.body.statu === 0) {
                        this.goodsListInfoData = resolve.body.data;
                    } else {
                        Toast("请求分类页面商品列表信息失败");
                    }
                },
                srject => {
                    Toast("请求分类页面商品列表信息错误");
                }
                
            );
        }
    },
    watch :{
        //  监视传入id是否改变，改变则加载对应的商品列表
        'goodsListInfoId'(){
            this.getGoodsListInfoData();
        }
    }
};
</script>
<style  lang="less" scoped>
.goodsList_container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px 10px;
    justify-content: space-between;
    > div {
        width: 48.6%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        padding: 2px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
            width: 100%;
        }
        h4 {
            font-weight: normal;
            font-size: 14px;
            color: #5e6980;
        }
        .price {
            :first-child {
                color: red;
            }
            :last-child {
                color: #4d525d;
                font-size: 12px;
                text-decoration: line-through;
            }
        }
    }
}
</style>
