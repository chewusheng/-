<template>
    <div class="shopcar_container">
        <!-- 登录头部 -->
        <div class="login_top">
            <span class="mui-icon mui-icon-arrowleft back" @click="goBack"></span>
            <span class="login">登录</span>
            <span class="register" @click="goRegister">注册</span>
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
                <mt-button type="danger" size="large" class="btn" @click.native="login">登录</mt-button>
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
             if ( (this.user_name.trim().length != 0) && (this.user_password.trim().length != 0)){
                   Toast({
                       message: '欢迎回来',
                       position : 'bottom'
                   });
                     this.$router.push('/');
             } else {
                  Toast('用户名或密码不能为空');
                //   console.log(this.user_name.trim())
             }
        },
        // 跳转至注册页面
        goRegister(){
            this.$router.push('/user/register')
        }
    }
};
</script>
<style lang="less" scoped>
.shopcar_container {
    .login_top {
        display: flex;
        height: 80px;
        text-align: center;
        align-items: center;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        .back {
            width: 20%;
            font-size: 40px;
            color: #999;
        }
        .login {
            width: 60%;
            font-size: 34px;
        }
        .register {
            width: 20%;
            font-size: 24px;
            color: #fc605a;
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


