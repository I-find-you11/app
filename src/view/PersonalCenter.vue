<template>
    <div>
        <headerNavBar :title='"个人中心"'></headerNavBar>
        <div class='userImg'>
            <img src=''>
            <span>用户名</span>
        </div>
        <div class='loginOut'>
            <van-button size="large" round  class='submit'>退出登录</van-button>
        </div>
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    export default {
        data() {
            return {

            }
        },
        components:{
            headerNavBar:headerNavBar
        },
    }
</script>

<style scoped>
.userImg {
    height: 50px;
    line-height: 50px;
    padding: 15px;
    background: white;
    margin-top: 30px;
    font-size: 0;
}
.userImg img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 30px;
}
.userImg span,.userImg img {
    font-size: 16px;
    vertical-align: middle;
}
.loginOut {
    width: 80%;
    margin: 30px auto;
    overflow: hidden;
}
.submit{
    background: #d49f4c;
}
</style>