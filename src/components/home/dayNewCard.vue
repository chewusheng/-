<template>
    <div class="mui-card dayNewCard_container">
				<div class="mui-card-content">
					<div class="mui-card-content-inner content">
                        <div class='body'>
                            <img src="../../images/home_new_tit1.jpg" alt="">
                            <div class='goods_img'> 
                                 <div class='left'>
                                     <img :src="dayNewCardData[0].big_img_url" alt="">
                                 </div>
                                <div class='right'>
                                    <img :src="dayNewCardData[0].small_img1_url" alt="">
                                    <img :src="dayNewCardData[0].small_img2_url" alt="">
                                    <img :src="dayNewCardData[0].small_img3_url" alt="">
                                </div>
                            </div>
                            <img src="../../images/home_new_tit2.jpg" alt="" class='body_foot'>
                        </div>
						<div class='foot'>
                            <div>
                                    <img src="../../images/home_new_footer.jpg" alt="">
                                    <span>情侣穿搭</span>
                            </div>
                            <div>
                                    <img src="../../images/home_new_footer.jpg" alt="">
                                    <span>约会美搭</span>
                            </div>
                            <div>
                                    <img src="../../images/home_new_footer.jpg" alt="">
                                    <span class='active'>全部新款</span>
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
            dayNewCardData: [
                {big_img_url:'../../images/home_new_goods1.jpg', small_img1_url:'../../images/home_new_goods2.jpg',small_img2_url:'../../images/home_new_goods2.jpg', small_img3_url:'../../images/home_new_goods2.jpg',
                id : Math.random()*2+Math.random()*3}
            ]
        }
    },
    methods : {
        getDayNewCardData(){
            this.$http.get('goods/dayNew')
            .then(resolve=>{
                if (resolve.body.statu === 0) {
                    this.dayNewCardData = resolve.body.data;
                } else {
                    Toast('请求每次更新卡片数据失败')
                }
            }, reject=>{
                    Toast('请求每次更新卡片数据错误')
            })
        }
    },
    created(){
        this.getDayNewCardData();
    }
    
}
</script>
<style lang="less" scoped>
.dayNewCard_container {
      margin: 12px 0 0;
      padding-bottom: 15px;
      .content {
          padding: 0 6px;
          .body {
              max-width: 477px;
              width: 100%;
              margin: 0 auto;
              :first-child {
                  display: block;
                  width: 100%;
              }
              .goods_img {
                  display: flex;
                .left {
                    width: 70%;
                    img {
                        width: 100%;
                    }
                }
                .right {
                    width: 30%;
                    img {
                        display: block;
                        width: 100%;
                        height: 33.33%;
                    }
                }
              }
           .body_foot {
            //    height: 55px;
               width: 100%;
               display: block;
           }
          }
          .foot {
              display: flex;
              justify-content: space-around;
              div {
                  width: 30%;
                  position: relative;
                  img {
                      width: 100%;
                      display: block;
                  }
                  span {
                      position: absolute;
                      left: 50%;
                      bottom: 10px;
                    //   margin-left: -50%
                    background-color: #FC605A;
                    //  margin-top: -5px;
                    color: #fff;
                    padding: 0 2px;
                    transform: translate(-50%, -50%);
                    font-size: 13px;
                    &.active {
                        background-color: #fff;
                        color: #363636;
                    }
                  }
                  
              }
          }
      }
      
  }
</style>


