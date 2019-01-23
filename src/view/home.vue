<template>
    <div>
        <div class='homePage'>   
            <transition name="fade" mode='out-in' v-if='$route.meta.cache'>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </transition>

            <transition name="fade" mode='out-in' v-else>
                <router-view/>
            </transition>
        </div>
        
        <van-tabbar v-model="nav_active" :change='nav_click()'>
            <van-tabbar-item to='/home/' icon="setting">WIFI Config</van-tabbar-item>
            <van-tabbar-item to='/home/ScanningDevice' icon="aim">Device Scan</van-tabbar-item>
            <van-tabbar-item to='/home/InputData' icon="records">Settings</van-tabbar-item>
            <van-tabbar-item to='/home/showData' icon="wap-nav">Data Show</van-tabbar-item>
            <!-- <van-tabbar-item to='/home/PersonalCenter' icon="location">个人中心</van-tabbar-item> -->
        </van-tabbar>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    export default {
        data () {
            return {
                nav_active:this.$route.meta.index  //获取路由上自定义下标用来防止刷新导致响应下标被重置
            }
        },
        methods: {
            nav_click(){
                //console.log(this.nav_active);
            }
        },
        watch:{
            $route(to,from){
                if(to.meta.index) {
                    this.nav_active = to.meta.index;   //监听路由跳转  实时刷新底部页面
                }
            }
        },
        created(){
            
        },
        beforeCreate() {
            
        },
        store
    }
</script>

<style scoped>
/* 路由过度动画 */
.fade-enter {
    opacity:0;
}
.fade-leave{
    opacity:1;
}
.fade-enter-active{
    transition:opacity .5s;
}
.fade-leave-active{
    opacity:0;
    transition:opacity .5s;
}
.homePage {
    padding-bottom: 50px;
}
</style>