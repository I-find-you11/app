<template>
    <div>
        <headerNavBar :title='"login"'></headerNavBar>
        <div class='loginFrom'>
            <div>
                <van-cell-group>
                    <van-field
                        v-model="userInfor.name"
                        placeholder="请输入用户名"
                        input-align='center'
                    />

                    <van-field
                        v-model="userInfor.password"
                        type="password"
                        placeholder="请输入密码"
                        input-align='center'
                    />
                </van-cell-group>
                <div class='submit'>
                   <van-button class='submit_btn' plain round size="large" @click='submit'>登陆</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    import store from '@/vuex/store'
    export default {
        data(){
            return {
                userInfor:{
                    name:'',
                    password:''
                }
            }
        },
        methods : {
            submit(){
                this.$store.state.isLogin = true;
                this.$router.push({path: this.$route.query.redirect || '/home/'});
            }
        },
        components:{
            headerNavBar:headerNavBar
        },
        store
    }
</script>

<style scoped>
.loginFrom {
    display: flex;
    margin-top: 80px;
}
.loginFrom>div{
    width: 100%;
}
.submit {
    margin: 30px auto 0;
    width: 95%;
    text-align: center;
}
.submit_btn {
    background: #1989fa;
}
</style>