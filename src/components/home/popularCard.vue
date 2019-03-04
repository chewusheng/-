<template>
    <div class="mui-card popularCard_container">
        <div class="mui-card-content">
            <div class="mui-card-content-inner content">
                <div class="header">
                    <img src="../../images/home_popular_tit1.jpg" alt>
                    <img src="../../images/home_popular_tit2.jpg" alt>
                </div>
                <div class="body">
                    <div v-for='item in popularCardData' :key='item.id'>
                        <img :src="item.img_url" alt>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            popularCardData : [
                {name: '印花卫衣', img_url: '../../images/home_popular_goods.jpg',id:Math.random()*2+Math.random()*3},
                 {name: '印花卫衣', img_url: '../../images/home_popular_goods.jpg', id:Math.random()*2+Math.random()*3},
                {name: '印花卫衣', img_url: '../../images/home_popular_goods.jpg', id:Math.random()*2+Math.random()*3},
                {name: '印花卫衣', img_url: '../../images/home_popular_goods.jpg', id:Math.random()*2+Math.random()*3},
                {name: '印花卫衣', img_url: '../../images/home_popular_goods.jpg', id:Math.random()*2+Math.random()*3},
                {name: '印花卫衣', img_url: '../../images/home_popular_goods.jpg', id:Math.random()*2+Math.random()*3},
            ]
        }
    },
    methods : {
        getPopularCardData(){
            this.$http.get('goods/popular')
            .then(resolve=>{
                if (resolve.body.statu === 0) {
                    this.popularCardData = resolve.body.data;
                } else {
                    Toast('请求流行卡片数据失败')
                }
            }, reject=>{
                    Toast('请求流行卡片数据错误')
            })
        }
    },
    created(){
        this.getPopularCardData();
    }
};
</script>
<style lang="less" scoped>
.popularCard_container {
    margin: 12px 0 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
    .content {
        padding: 0 8px;
        .header {
            //   text-align: center;
            //   height: auto;
            :first-child {
                width: 80%;
            }
            :last-child {
                width: 100%;
            }
            img {
                display: block;
                margin: 0 auto;
            }
        }
        .body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            div {
                width: 32.5%;
                margin-top: 8px;
                position: relative;
                border: 1px solid #ccc;
                img {
                    width: 100%;
                    display: block;
                }
                p {
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    margin: 0;
                    font-size: 13px;
                    color: #3f3f3f;
                    background-color: rgba(255, 255, 255, 0.7);
                }
            }
        }
    }
}
</style>


