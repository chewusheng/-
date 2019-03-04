<template>
    <div class="search_container">
        <div class="search_title">
            <div @click="goBack" class="mui-icon mui-icon-back back"></div>
            <div class="search_key">
                <input type="text"  placeholder="连衣裙就是你的女人味">
            </div>
            <div class="search_btn">
                <span>搜索</span>
            </div>
        </div>
        <div class="search_body">
            <div class="old_key" v-if='oldSearchFlag'>
                <div class="title">
                    <span>最近搜索</span>
                    <span class="mui-icon mui-icon-trash" @click='clearOldSearch'></span>
                </div>
                <div class="body">
                    <span v-for='item in oldSearchData' :key='item.id'>
                        {{ item.title }}
                    </span>
                </div>
            </div>
            <div class="hot_key">
                 <div class="title">
                    <span>热门搜索</span>
                    <span class="mui-icon mui-icon-eye"></span>
                </div>
                <div class="body">
                    <span v-for='item in hotSearchData' :key='item.id'>
                        {{ item.title }}
                    </span>
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
            hotSearchData:[
                { title:'连衣裙', id:Math.random()*2+Math.random()*3},
                { title:'外套', id:Math.random()*2+Math.random()*3},
                { title:'红色高跟鞋', id:Math.random()*2+Math.random()*3},
                { title:'护手霜', id:Math.random()*2+Math.random()*3},
                { title:'洗面奶', id:Math.random()*2+Math.random()*3},
                { title:'护发素', id:Math.random()*2+Math.random()*3},
                { title:'兰蔻小黑瓶', id:Math.random()*2+Math.random()*3},
                { title:'mac口红', id:Math.random()*2+Math.random()*3},
                { title:'补水面膜', id:Math.random()*2+Math.random()*3}
            ],
            oldSearchData: [
                 { title:'连衣裙', id:Math.random()*2+Math.random()*3},
                { title:'手提包', id:Math.random()*2+Math.random()*3},
                { title:'红色高跟鞋', id:Math.random()*2+Math.random()*3},
                { title:'护手霜', id:Math.random()*2+Math.random()*3},
                { title:'洗面奶', id:Math.random()*2+Math.random()*3},
                { title:'护发素', id:Math.random()*2+Math.random()*3},
                { title:'兰蔻小黑瓶', id:Math.random()*2+Math.random()*3},
                { title:'mac口红', id:Math.random()*2+Math.random()*3},
                { title:'补水面膜', id:Math.random()*2+Math.random()*3}
            ],
            oldSearchFlag : true
        }
    },
    methods : {
        goBack(){
            this.$router.go(-1)
        },
        getHotSearchData(){
            this.$http.get('search/hot')
            .then(resolve=>{
                if (resolve.body.statu === 0) {
                    this.hotSearchData = resolve.body.data
                } else {
                    Toast('请求热门搜索数据失败')
                }
            }, reject=>{
                    Toast('请求热门搜索数据错误')
            })
        },
         getOldSearchData(){
            this.$http.get('search/old')
            .then(resolve=>{
                if (resolve.body.statu === 0) {
                    this.oldSearchData = resolve.body.data
                } else {
                    Toast('请求历史搜索数据失败')
                }
            }, reject=>{
                    Toast('请求历史搜索数据错误')
            })
        },
        clearOldSearch(){
            this.oldSearchFlag = false;
        }
    },
    created(){
        this.getHotSearchData();
        this.getOldSearchData();
    }
};
</script>
<style lang="less" scoped>
.search_container {
    position: relative;
    z-index: 1001;
    background-color: #fff;
    height: 100%;
    .search_title {
        background-color: #fc605a;
        display: flex;
        align-items: center;
        height: 55px;
        text-align: center;
        // color: #fff;
        //  font-size: 30px;
        .back {
            width: 10%;
            font-size: 40px;
            color: #fff;
            //  font-weight: lighter;
        }
        .search_key {
            width: 70%;
            input {
                margin: 0;
                height: 38px;
                border-radius: 19px;
                padding: 8px 15px 8px 20px;
                // width: 90%;
            }
        }
        .search_btn {
            width: 20%;
            span {
                background-color: #ff395c;
                font-size: 20px;
                padding: 9px 16px;
                border-radius: 19px;
                color: #fff;
            }
        }
    }
  
    .search_body {
        padding-left: 18px;
        width: 100%;
        .hot_key, .old_key {
            padding: 20px 0;
            .title {
                display: flex;
                justify-content: space-between;
                :first-child {
                    color: #000;
                    font-size: 20px;
                    
                }
                  :last-child {
                    color: #999;
                    padding: 0 20px;
                }
            }
            .body {
                display: flex;
                flex-wrap: wrap;
                span {
                    color: #666;
                    background-color: #f4f4f4;
                    padding: 4px 8px;
                    font-size: 18px;
                    border-radius: 12px;
                    margin: 15px 10px 0;
                }
            }
        }
        .old_key {
            border-bottom: 1px solid #ccc;
            .title {
                :last-child {
                    color: #333;
                }
            }
        }
      
    }
}
</style>


