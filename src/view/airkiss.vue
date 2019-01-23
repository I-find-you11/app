<template>
    <div>
        <headerNavBar :title='"WIFI Config"'></headerNavBar>
        <van-cell-group>
            <van-field
                v-model="wifiInfor.wifiName"
                placeholder="Please enter WIFI SSID"
                input-align='center'
                icon='success'
                :disabled='wifiInfor.NameD'
                @click-icon="changeWifiName"
            />

            <van-field
                v-model="wifiInfor.wifiPassword"
                :type="passWordShowBl?'':'password'"
                placeholder="Please enter WIFI Password"
                input-align='center'
                icon='password-view'
                @click-icon="passWordShow"
            />
        </van-cell-group>
        <div class='submit'>
            <van-button class='submit_btn' plain round size="normal" @click='submit'>Connect</van-button>
        </div>
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
                passWordShowBl:false                         //是否显示wifi密码
            }
        },
        methods:{
            passWordShow(){
                this.passWordShowBl = ! this.passWordShowBl;
            },
            //配置成功,安卓回调函数
            airkissCall(msg) {
                clearTimeout(this.timer);
                this.$Toast('Connect Successfully Done!');
            },
            submit(){
                if(this.wifiInfor.wifiName && this.wifiInfor.wifiPassword) { 
                    android.showToast(this.wifiInfor.wifiName,this.wifiInfor.wifiPassword);
                    //开启配网连接的loding动画
                    this.$Toast.loading({
                        mask: true,
                        message: 'Loding...',
                        duration:0
                    });
                    this.timer = setTimeout(()=>{
                        this.$Toast('Connect Successfully Done!');
                    },15*1000);          //配网超时 由前端控制 超过定时器设置的时间 显示配网超时
                }else {
                    this.$Toast('Wifi name and password cannot be empty');
                }
            },
            getWifiName(msg) {
                this.$store.state.wifiName = msg;         //由于页面跳转会导致重绘 所以把 安卓传过来的wifi名称保存进 vuex 再进入页面的时候就直接 从vuex 获取
                this.wifiInfor.wifiName=msg;
                this.wifiInfor.NameD=true;
            },
            changeWifiName(){
                this.wifiInfor.wifiName='';
                this.wifiInfor.NameD=false;
                this.$store.state.wifiName = '';
            }
        },
        components:{
            headerNavBar:headerNavBar
        },
        beforeCreate() {

            //这是设置配网成功后给安卓的回调函数
            window.airkissCall = (msg) => {
                this.airkissCall(msg);
            }
            

            //这是给安卓返回wifi密码的回调函数
            window.getWifiName = (msg) => {
                this.getWifiName(msg);
            }

            //
            window.getHostIp = (e)=>{
               this.$store.state.hostIp = e;
            }
        },
        created () {
            if(this.$store.state.wifiName) {           //判断vuex有没有保存wifi的名称 如果存在wifi的名称就直接放进页面
                this.wifiInfor.wifiName=this.$store.state.wifiName;      
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