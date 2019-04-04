<template>
    <div>
        <headerNavBar :title='"Parameter Settings"' :icon='"close"' @addDevice='resetSsid'></headerNavBar>
        <van-collapse v-model="activeNames" class='Settings'>
            <van-collapse-item title="Networks" name="ip" class='Settings'>
                <van-cell-group>
                    <van-field
                        v-model="ipData.ip"
                        required
                        clearable
                        label="IP"
                        placeholder="Please enter IP"
                    />
                    <van-field
                        v-model="ipData.port"
                        required
                        clearable
                        label="PORT"
                        placeholder="Please enter PORT"
                        type='number'
                        @input='portVali'
                    />
                </van-cell-group>

                <van-button class='submit_btn'  plain round size="normal" @click='sendFn1'>send</van-button>
                
            </van-collapse-item>
        </van-collapse>

        <van-button class='submit_btn' style="margin-bottom:10px;" plain round size="normal" @click='closeData'>close data</van-button>

        <van-collapse v-model="activeNames1" class='Settings' @change='server'>
            <van-collapse-item title="User Settings" name="Device">
                <van-cell-group>
                    <van-field
                        v-model="id"
                        required
                        clearable
                        label="ID"
                        disabled
                        placeholder=""
                    />
                    <van-field
                        v-model="rssi"
                        required
                        clearable
                        label="WIFI RSSI"
                        disabled
                        placeholder=""
                    />
                    <van-cell
                        clickable
                        title="LED"
                        >
                        <van-switch v-model="LED" />
                    </van-cell>
                    <van-field
                        v-model="user.Mode"
                        required
                        clearable
                        label="Data Mode"
                        placeholder="Please change Mode"
                    />
                    <van-field
                        v-model="user.Min"
                        required
                        clearable
                        label="Min Distance"
                        placeholder="Please enter Min Distance"
                    />
                    <van-field
                        v-model="user.Max"
                        required
                        clearable
                        label="Max Distance"
                        placeholder="Please enter Max Distance"
                    />
                    <van-field
                        v-model="user.Sensitivity"
                        required
                        clearable
                        label="Sensitivity"
                        placeholder="Please enter Sensitivity"
                    />
                    <van-field
                        v-model="user.Mounting"
                        required
                        clearable
                        label="Mounting height"
                        placeholder="Please enter Mounting height"
                    />
                </van-cell-group>
                <van-button class='submit_btn' plain round size="normal" @click='sendParam'>send</van-button>
                <van-button class='submit_btn' plain round size="normal" @click='sendHistoryParam'>send previous param</van-button>
                <br>
                <van-button class='submit_btn' plain round size="normal" @click='openData'>openData</van-button>
                <van-button class='submit_btn' plain round size="normal" @click='regulate'>calibration</van-button>
                <van-button class='submit_btn' plain round size="normal" @click='getParam'>read param</van-button>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    import store from '@/vuex/store'
    export default {
        data(){
            return {
                activeNames: ['ip'],
                activeNames1: [''],
                ipData:{
                    ip:this.$store.state.hostIp,
                    //ip:'35.239.35.110',
                    port:'12765'
                },
                user:{
                    Mode:'',
                    Min:'',
                    Max:'',
                    Sensitivity:'',
                    Mounting:''
                },
                id:'',
                rssi:'',
                deviceId:'',                              //设备ID
                LED:false,
                device:this.$store.state.deviceInfor,     //当前选择设备的参数
                getDeviceParamBl:true,                                  //是否发送过参数
                deviceIsContent:this.$store.state.deviceIsContent
            }
        },
        methods:{
            /*
                前言：
                    1. 用定时器延时方式调用安卓函数，防止函数调用失败 APP卡死的情况
                    2. 获取设备信息的时候，一次性获取三个参数，可能会导致数据混淆，采用分段获取的方式 先获取设备ID 和信号强度，然后在成功的回调里面在获取设备的参数
                    3. 现在默认设备连接到APP就会自动获取参数，看情况后续在修改
            */


            toggle() {
                //console.log(11);
                this.LED = !this.LED;
            },
            server(e){
                if(!this.deviceIsContent) {
                    e.splice(0,2);
                    this.$Toast('please wait,device is not content to APP');
                    return false;
                }
            },
            Reset(){
                
            },
            getParam(){
                setTimeout(()=>{
                    android.getDeviceId(); 
                    android.getRSSI();
                },1*1000);
            },
            // getRSSI(){
            //     android.getRSSI();                                                           //获取设备ID
            // },
            loding(){
                this.$Toast.loading({
                    mask: true,
                    message: 'loding...',
                    duration:0
                });
            },
            sendFn1(){
                this.deviceIsContent = false;
                this.$Toast.loading({
                    mask: true,
                    message: 'Send...',
                    duration:0
                });
                
                setTimeout(()=>{
                    android.sendServerIp(this.ipData.ip,this.ipData.port);
                })
                
            },
            sendParam(){                                       //将表单的数据转换成16进制发送给安卓
            /*
                1.数据转换函数用的外部插件，在main.js 入口文件配置好的 下面发送参数的函数也一样
             */
                var led ='0' + (this.LED+0);
                var Mode = this.user.Mode.toUpperCase().toString();
                if(Mode.length < 2) {
                    Mode = '0' + Mode;
                }
                var Min = this.$hexFn.SingleToHexBatch('' + this.user.Min).toString();
                var Max = this.$hexFn.SingleToHexBatch('' + this.user.Max).toString();
                var Sensitivity = this.$hexFn.SingleToHexBatch('' + this.user.Sensitivity).toString();
                var Mounting = this.$hexFn.SingleToHexBatch('' + this.user.Mounting).toString();
                this.loding();
                setTimeout(()=>{
                    android.sendDeviceParam(led,Mode,Min,Max,Sensitivity,Mounting);
                    this.getHistoryParam(led,Mode,Min,Max,Sensitivity,Mounting);
                })
            },
            getHistoryParam(led,Mode,Min,Max,Sensitivity,Mounting){        //获取历史提交记录的数据 在 发送成功的成功回调里面执行此函数
                this.$store.state.historyParam = {                         //每次提交都会把当前提交的参数保存进vuex 当作历史提交记录
                    led,
                    Mode,
                    Min,
                    Max,
                    Sensitivity,
                    Mounting
                }
            },
            sendHistoryParam(){
                if(this.$store.state.historyParam.length){                //判断是否有历史提交记录 每次提交都会把当前提交的参数保存进vuex 当作历史提交记录
                    var led =this.$store.state.historyParam.led;
                    var Mode = this.$store.state.historyParam.Mode;
                    var Min = this.$store.state.historyParam.Min;
                    var Max = this.$store.state.historyParam.Max;
                    var Sensitivity = this.$store.state.historyParam.Sensitivity;
                    var Mounting = this.$store.state.historyParam.Mounting;
                    android.sendDeviceParam(led,Mode,Min,Max,Sensitivity,Mounting);
                }else{
                    this.$Toast('You have not sent historical parameters');
                }
            },
            resetSsid(){
                this.loding();
                setTimeout(()=>{
                    android.resetSsid();
                })
            },
            getDeviceParamBack(e){                        //解析返回过来的16进制数据
                try{
                    var arrStr = e;
                    var arr = arrStr.split(',');
                    this.LED = parseInt(arr[0]);
                    this.user.Mode = arr[1];
                    this.user.Min = Math.round(this.$hexFn.HexToSingleBatch(arr[2])*10)/10;
                    this.user.Max = Math.round(this.$hexFn.HexToSingleBatch(arr[3])*10)/10;
                    this.user.Sensitivity = Math.round(this.$hexFn.HexToSingleBatch(arr[4])*10)/10;
                    this.user.Mounting = Math.round(this.$hexFn.HexToSingleBatch(arr[5])*10)/10;
                }catch(e){
                    alert(e);
                }
            },
            portVali(){
                if(parseInt(this.ipData.prot) > 65538) {
                    this.$Toast('Port cannot be greater than 65535');
                    this.ipData.prot = 65535;
                }
            },
            msgBack(e){
                if(e =='1') {
                    this.$Toast('Send successfully');
                }else {
                    this.$Toast('Send Failed, try again');
                }
            },
            closeData(){
                if(!this.deviceIsContent){
                    this.$Toast('please wait,device is not content to APP');
                    return false;
                }
                this.loding();
                setTimeout(()=>{
                    android.closeData();
                })
            },
            regulate(){
                this.loding();
                setTimeout(()=>{
                    android.regulate();
                })
            },
            openData(){
                this.loding();
                setTimeout(()=>{
                    android.openData();
                })
            }
        },
        mounted() {
            //console.log(this.$store.state.deviceId);
            if(this.$store.state.deviceId != '') {
                this.deviceId = this.$store.state.deviceId;
            }

            if(this.device.ip == ''){
                this.$dialog.alert({
                    message: 'No device selected, please select the device before proceeding'
                }).then(() => {
                   this.$router.push({
                        path: '/home/ScanningDevice',
                        //query: {redirect: this.$route.fullPath}                               //将即将跳转的路由path作为参数，登录成功后跳转到该路由
                    })
                });
            }else {
                console.log('存在设备ID'); 
            }
            
        },
        components:{
            headerNavBar:headerNavBar
        },
        beforeCreate(){
            window.sendIpBackFN = (e)=>{                                    //修改服务端IP地址回调函数
                setTimeout(()=>{
                    this.msgBack(e)
                },6*1000)
            }
            
            window.resetSsidBack = (e)=>{                                   //重置配网回调函数
                this.$Toast('resetSsid successfully');
                this.$store.state.sacn.splice(this.device.index,1);
                this.$store.state.deviceInfor = {};
                this.$router.push({
                    path: '/home/'
                })
            }

            window.getDeviceIdBack = (id)=>{                                //获取设备ID回调函数
                this.id = id;
                this.$Toast('get ID successfully');
                setTimeout(()=>{
                    android.getDeviceParam();                                   //获取设备参数
                })
            }

            window.getDeviceParamBack = (e)=>{                              //获取设备参数回调函数
                this.getDeviceParamBack(e);   
                this.$Toast('get Parameter successfully');
            }

            window.sendDeviceParamBack = (e) =>{                            //发送参数回调函数
                this.msgBack(e);
                this.getDeviceParamBl = true;
            }

            window.closeDataBack = (e) =>{
                this.msgBack(e);
                this.$store.state.openDataBl = false;                       //数据通道关闭
            }

            window.regulateBack = (e) =>{
                this.msgBack(e);
            }

            window.openDataBack = (e) =>{
                this.msgBack(e);
                this.$store.state.openDataBl = true;                        //数据通道开启
            }

            window.deviceContent= (e) =>{
                //设备连接到app后，自动获取设备参数，并且提示用户 已经 连接到app可以进行操作` 
                this.$store.state.deviceIsContent = true;
                this.deviceIsContent = true;
                this.$Toast('OK! device content to APP');

                //先关闭数据通道然后自动获取设备信息
                let promise = new Promise((resolve, reject)=>{
                    this.closeData();
                    resolve("关闭数据成功");
                });

                promise.then(()=>{
                    this.getParam();
                },(error)=>{

                });
                
            }

            window.getRSSIBack= (e) =>{
                this.rssi = e;
            }
        },
        store,
        destroyed () {
            //函数绑定在window下全局有效  推出本组件之前清空函数 防止其他页面生效
            window.deviceContent = ()=>{};
            window.getDeviceIdBack = ()=>{};
        }
    }
</script>

<style>
.Settings .van-field .van-cell__title {
    max-width: none;
}
.Settings input {
    text-align: right;
}
.submit_btn {
    margin-top: 15px;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
}
</style>