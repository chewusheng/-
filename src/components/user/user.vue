<template>
    <div class="user_container">
        <!-- 用户中心头部 -->
        <div class="user_top">
            <div class="head">
                <img src="../../images/user/index/top_touxiang.png" alt>
                <p>张**</p>
            </div>
            <div class="body">
                <div>
                    <span>我的佣金</span>
                    <p>0.00</p>
                </div>
                <div>
                    <span>我的积分</span>
                    <p>0</p>
                </div>
                <div>
                    <span>我的足迹</span>
                    <p>0</p>
                </div>
            </div>
        </div>
        <!-- 订单卡片 -->
        <div class="user_all_order">
            <div class="padding order_top">
                <div>
                    <img src="../../images/user/index/icon_green1.png" alt>
                    <span>全部订单</span>
                </div>
                <span class="mui-icon mui-icon-arrowright arrowright"></span>
            </div>
            <div class="order_body">
                <router-link tag='div' to='/user/unPayment'>
                    <img src="../../images/user/index/order-icon02.png" alt>
                    <p>待付款</p>
                </router-link>
                <router-link tag='div' to='/user/waitOrder'>
                    <img src="../../images/user/index/order-icon01.png" alt>
                    <p>待发货</p>
                </router-link>
                <router-link tag='div' to='/user/waitGoods'>
                    <img src="../../images/user/index/order-icon03.png" alt>
                    <p>待收货</p>
                </router-link>
                <div>
                    <img src="../../images/user/index/order-icon04.png" alt>
                    <p>待评价</p>
                </div>
            </div>
        </div>
        <!-- 个人账号信息 -->
        <div class="user_self_info">
            <div class="padding user_info_cell">
                <div>
                    <img src="../../images/user/index/icon_green2.png" alt>
                    <span>个人信息</span>
                </div>
                <span class="mui-icon mui-icon-arrowright arrowright"></span>
            </div>
            <div class="padding user_info_cell">
                <div>
                    <img src="../../images/user/index/icon_green7.png" alt>
                    <span>修改密码</span>
                </div>
                <span class="mui-icon mui-icon-arrowright arrowright"></span>
            </div>
            <div class="padding user_info_cell">
                <div>
                    <img src="../../images/user/index/icon_green8.png" alt>
                    <span>账号绑定</span>
                </div>
                <span class="mui-icon mui-icon-arrowright arrowright"></span>
            </div>
        </div>
        <!-- 个人更多信息 -->
        <div class="user_self_info_more">
            <div class="padding user_info_cell">
                <div>
                    <img src="../../images/user/index/icon_green3.png" alt>
                    <span>我的收藏</span>
                </div>
                <span class="mui-icon mui-icon-arrowright arrowright"></span>
            </div>
            <div class="padding user_info_cell">
                <div>
                    <img src="../../images/user/index/icon_green4.png" alt>
                    <span>消费记录</span>
                </div>
                <span class="mui-icon mui-icon-arrowright arrowright"></span>
            </div>
            <div class="padding user_info_cell">
                <div>
                    <img src="../../images/user/index/icon_green5.png" alt>
                    <span>地址管理</span>
                </div>
                <span class="mui-icon mui-icon-arrowright arrowright"></span>
            </div>
            <div class="padding user_info_cell">
                <div>
                    <img src="../../images/user/index/icon_green6.png" alt>
                    <span>我的分销</span>
                </div>
                <span class="mui-icon mui-icon-arrowright arrowright"></span>
            </div>
        </div>
        <!-- 退出按钮 -->
        <div class="logout_btn">
            <mt-button type="danger" size="large" class="btn" @click.native="logoutBtn">退出</mt-button>
        </div>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
    methods: {
        // 登出事件
        logoutBtn() {
            mui.confirm(
                "即将推出登录，确认？",
                "退出登录",
                ["确定", "取消"],
                e => {
                    if (e.index == 0) {
                        this.$router.push("/user/login");
                    } else {
                    }
                }
            );
        }
      
    }
};
</script>
<style lang="less" scoped>
.user_container {
    padding-bottom: 55px;
    // 用户界面头部样式
    .user_top {
        padding-top: 30px;
        height: 210px;
        text-align: center;
        background: url("../../images/user/index/top_bc.jpg") no-repeat;
        background-size: cover;
        .head {
            height: 110px;
            img {
                height: 80px;
            }
            p {
                margin: 0;
                color: #fff;
                font-size: 18px;
            }
        }
        .body {
            height: 70px;
            display: flex;
            font-size: 18px;
            background-color: rgba(0, 0, 0, 0.4);
            color: #fff;
            div {
                width: 33.33%;
                // overflow: hidden;
                padding-top: 15px;
                p {
                    font-size: 20px;
                    color: #fff;
                    margin-top: 5px;
                }
            }
        }
    }
    //  添加一个公共padding
    .padding {
        padding: 4% 5%;
    }
    //  全部订单、个人信息、更多个人信息使用相同样式
    .user_all_order,
    .user_self_info,
    .user_self_info_more {
        background-color: #fff;
        margin-top: 15px;
        .order_top,
        .user_info_cell {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            //  左侧图标与字样式
            div {
                display: flex;
                align-items: center;
                width: 70%;
                img {
                    width: 8%;
                }
                span {
                    padding: 0 10px;
                    font-size: 30px;
                }
            }
            .arrowright {
                font-size: 40px;
                color: #999;
            }
        }
        .order_body {
            display: flex;
            padding: 20px 0px;
            div {
                width: 25%;
                text-align: center;
                p {
                    font-size: 20px;
                    margin: 0;
                }
            }
        }
    }
    // 单独修改用户页面body中图片大小
    .user_self_info,
    .user_self_info_more {
        .user_info_cell {
            // 字体图标
            div {
                img {
                    width: 15%;
                }
            }
        }
    }
    //  登出按钮
    .logout_btn {
        display: flex;
        justify-content: center;
        padding: 30px 40px;
        .btn {
            // width: 80%;
            height: 55px;
            font-size: 30px;
        }
    }
}
</style>


