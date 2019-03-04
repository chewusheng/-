<template>
    <div class='swiper_container'>
        <mt-swipe :auto="4000" class='swiper'>
            <mt-swipe-item  v-for='item in swiperData' :key='item.img_id'><img :src="item.img_url" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            swiperData: [
                {img_url: '../../images/homeswiper.jpg', img_id : Math.random()*2 + Math.random()*3},
                {img_url: '../../images/homeswiper.jpg', img_id : Math.random()*2 + Math.random()*3},
                {img_url: '../../images/homeswiper.jpg', img_id : Math.random()*2 + Math.random()*3},
                 {img_url: '../../images/homeswiper.jpg', img_id : Math.random()*2 + Math.random()*3}
            ]
        }
    },
    methods: {
        getSwiperData(){
            this.$http.get('/')
            .then(resolve=>{
                if (resolve.body.statu === 0) {
                    this.swiperData = resolve.body.message 
                } else {
                    Toast('轮播图数据请求失败')
                }
            }, reject=>{
                    Toast('轮播图数据请求错误')
            })
        }
    },
    created(){
        this.getSwiperData();
    }
}
</script>
<style lang="less" >
.swiper_container {
    .swiper {
        height: 210px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
          
    }
     .mint-swipe-indicator{
         background-color: #ccc;
         opacity: .6;
        &.is-active {
             background: #FC605A !important;
             opacity: 1;
        }
     }
}
 
</style>


