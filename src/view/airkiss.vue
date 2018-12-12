<template>
    <div>
        <headerNavBar :title='"配网"'></headerNavBar>
        <van-cell-group>
            <van-field
                v-model="wifiInfor.wifiName"
                placeholder="请输入wifi名称"
                input-align='center'
                :disabled='wifiInfor.NameD'
            />

            <van-field
                v-model="wifiInfor.wifiPassword"
                type="password"
                placeholder="请输入wifi密码"
                input-align='center'
            />
        </van-cell-group>
        <div class='submit'>
            <van-button class='submit_btn' plain round size="normal" @click='submit'>连接</van-button>
        </div>
        <!-- <van-popup v-model="AirkissOk" class='popup'>配网成功</van-popup>
        <van-popup v-model="AirkissFailure" class='popup'>配网失败</van-popup> -->
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    import store from '@/vuex/store'
    export default {
        data(){
            return {
                wifiInfor:{
                    wifiName:'',
                    wifiPassword:'',
                    NameD:false
                },
                timer:null,                                  //配置链接过程loding显示定时器
            }
        },
        methods:{
            onLoad(){
                //JsCallNative.callAirKissEncoder('ssid','password');
            },
            //配置成功,安卓回调函数
            airkissCall(msg) {
                clearTimeout(this.timer);
                this.$Toast('配置成功');
            },
            submit(){
                if(this.wifiInfor.wifiName && this.wifiInfor.wifiPassword) { 
                    android.showToast(this.wifiInfor.wifiName,this.wifiInfor.wifiPassword);
                    //开启配网链接的loding动画
                    this.$Toast.loading({
                        mask: true,
                        message: '加载中...',
                        duration:0
                    });
                    this.timer = setTimeout(()=>{
                        this.$Toast('配置失败');
                    },30*1000);                               //失败由前端控制 超过定时器设置的时间 显示配置失败
                }else {
                    this.$Toast('wifi名称和密码不能为空');
                }
            },
            getWifiName(msg) {
                if(msg){
                    this.$store.state.wifiName = msg;         //由于页面跳转会导致重绘 所以把 安卓传过来的wifi名称保存进 vuex 再进入页面的时候就直接 从vuex 获取
                    this.wifiInfor.wifiName=msg;
                    this.wifiInfor.NameD=true;
                }
            }
        },
        components:{
            headerNavBar:headerNavBar
        },
        beforeCreate() {
            window.airkissCall = (msg) => {
                this.airkissCall(msg);
            }

            window.getWifiName = (msg) => {
                this.getWifiName(msg);
            }
        },
        created () {
            if(this.$store.state.wifiName) {
                this.wifiInfor.wifiName=this.$store.state.wifiName;             //判断vuex有没有保存wifi的名称 如果存在wifi的名称就直接放进页面
                this.wifiInfor.NameD=true;
            }
        },
        store
    }
</script>

<style scoped>
.popup {
    padding:20px 30px;
}
.submit {
    text-align: center;
    margin-top: 30px;
}
.submit_btn {
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
}
</style>