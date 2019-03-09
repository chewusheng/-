<template>
    <div class="shopcar_container">
        <!-- 登录头部 -->
        <div class="login_top">
            <span class="mui-icon mui-icon-arrowleft back" @click="goBack"></span>
            <span class="register">注册</span>
            <span class="login" @click='goLogin'>登录</span>
        </div>
        <!-- 登录主体 -->
        <div class="login_body">
            <div class="user_name">
                <img src="../../images/user/login_register/user_name.png" alt>
                <span>账号:</span>
                <input type="text" placeholder="请输入密码"  v-model="user_name">
            </div>
            <div class="user_password">
                <img src="../../images/user/login_register/user_password.png" alt>
                <span>密码:</span>
                <input type="password" placeholder="请输入密码" v-model="user_password">
            </div>
            <div class="user_zhanghao">
                <mt-button type="danger" size="large" class="btn" @click.native="login">注册</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            user_name : '',
            user_password : ''
        }
    },
    methods: {
        // 后退函数
        goBack() {
            this.$router.back();
        },
        // 登录事件
        login(){
             if ( this.user_name.trim.length != 0 && this.user_password.trim.length != 0){
                   Toast({
                       message: '注册成功',
                       position : 'bottom'
                   });
                     this.$router.push('/');
             } else {
                  Toast('用户名或密码不能为空');
             }
        },
        // 跳向登录页面
        goLogin(){
            this.$router.push('/user/login')
        }
    }
};
</script>
<style lang="less" scoped>
.shopcar_container {
    .login_top {
        display: flex;
        text-align: center;
        height: 80px;
        align-items: center;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        .back {
            width: 20%;
            font-size: 40px;
            color: #999;
        }
        .register {
            width: 60%;
            font-size: 34px;
        }
        .login {
            width: 20%;
            font-size: 24px;
            color: #fc605a;
            //  padding-right: 20px;
        }
    }
    .login_body {
        margin-top: 30px;

        .user_name,
        .user_password {
            display: flex;
            padding: 4% 5%;
            align-items: center;
            background-color: #fff;
            img {
                width: 8%;
                padding: 0 3px;
            }
            span {
                width: 22%;
                text-align: center;
                font-size: 24px;
            }
            input {
                margin: 0;
                border: none;
                font-size: 24px;
                padding: 0;
            }
        }
        .user_password {
            margin-top: 10px;
        }
        .user_zhanghao {
            margin-top: 35px;
            padding: 0 20px;
            .btn {
                height: 60px;
                font-size: 34px;
            }
        }
    }
}
</style>


