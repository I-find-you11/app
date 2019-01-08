<template>
    <div>
        <headerNavBar :title='"Paramater Settings"'></headerNavBar>
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

                <van-button class='submit_btn' plain round size="normal" @click='sendFn1'>send</van-button>
                
                <van-button class='submit_btn' plain round size="normal" @click='resetSsid'>重置配网</van-button>
            </van-collapse-item>
        </van-collapse>
        
        <van-collapse v-model="activeNames1" class='Settings' @change='server'>
            <van-collapse-item title="User Settings" name="Device">
                <van-cell-group>
                    <van-field
                        v-model="id"
                        required
                        clearable
                        label="ID"
                        disabled
                        placeholder="Please change Mode"
                    />
                    <van-field
                        v-model="xinhao"
                        required
                        clearable
                        label="信号强度"
                        disabled
                        placeholder="Please change Mode"
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
                <van-button class='submit_btn' plain round size="normal" @click='sendFn2'>send</van-button>
                <van-button class='submit_btn' plain round size="normal" @click='sendFn2'>提交上一次的数据</van-button>
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
                activeNames1: [],
                ipData:{
                    // ip:this.$store.state.hostIp,
                    ip:'35.239.35.110',
                    port:'12765'
                },
                user:{
                    Mode:'f1',
                    Min:'0.5',
                    Max:'3',
                    Sensitivity:'20',
                    Mounting:'5'
                },
                id:'4654646',
                xinhao:'50DB',
                deviceId:'',
                LED:false,
                isClient:false,
                device:this.$store.state.deviceInfor, 
                getDeviceParamBl:true
            }
        },
        methods:{
            toggle() {
                //console.log(11);
                this.LED = !this.LED;
            },
            server(e){
                if(!this.isClient){
                    e.splice(0,1)
                    this.$Toast('修改硬件目标IP后才能获取参数');
                    return false;
                }
                android.getDeviceId();   //获取设备ID
                android.getDeviceParam();  //获取设备参数
                
            },
            Reset(){
                
            },
            sendFn1(){
                this.isClient = true;
                // this.$Toast.loading({
                //     mask: true,
                //     message: 'Send...',
                //     duration:0
                // });
                try {
                    // alert(this.$store.state.deviceInfor.ip);
                    //android.sendServerIp(this.$store.state.deviceInfor.ip,this.ipData.ip,this.ipData.port);
                    //android.sendServerIp(this.ipData.ip,this.ipData.port);
                }catch(e) {
                    alert(e);
                }
            },
            sendFn2(){
                var led ='0' + (this.LED+0);
                var Mode = this.user.Mode.toUpperCase().toString();
                var Min = this.$hexFn.SingleToHexBatch('' + this.user.Min).toString();
                var Max = this.$hexFn.SingleToHexBatch('' + this.user.Max).toString();
                var Sensitivity = this.$hexFn.SingleToHexBatch('' + this.user.Sensitivity).toString();
                var Mounting = this.$hexFn.SingleToHexBatch('' + this.user.Mounting).toString();
                android.sendDeviceParam(led,Mode,Min,Max,Sensitivity,Mounting);
            },
            resetSsid(){
                android.resetSsid();
            },
            getDeviceParamBack(e){         //解析返回过来的16进制数据
                alert(1)
                var arrStr = e;
                var arr = arrStr.split(',');
                this.LED = parseInt(arr[0]);
                this.user.Mode = arr[1];
                this.user.Min = Math.round(this.$hexFn.HexToSingleBatch(arr[2])*10)/10;
                this.user.Max = Math.round(this.$hexFn.HexToSingleBatch(arr[3])*10)/10;
                this.user.Sensitivity = Math.round(this.$hexFn.HexToSingleBatch(arr[4])*10)/10;
                this.user.Mounting = Math.round(this.$hexFn.HexToSingleBatch(arr[5])*10)/10;
            },
            portVali(){
                if(parseInt(this.ipData.prot) > 65538) {
                    this.$Toast('Port cannot be greater than 65535');
                    this.ipData.prot = 65535;
                }

                if(parseInt(this.ipData.prot) < 8000) {
                    this.$Toast('Port cannot be Less than 8000');
                    this.ipData.prot = 8000;
                }
            },
            msgBack(e){
                if(e =='1') {
                    this.$Toast('Send successfully');
                }else {
                    this.$Toast('Failed successfully, try again');
                }
            }
        },
        mounted() {
            //console.log(this.$store.state.deviceId);
            if(this.$store.state.deviceId != '') {
                this.deviceId = this.$store.state.deviceId;
            }

            // if(this.deviceId == ''){
            //     this.$dialog.alert({
            //         message: 'No device selected, please select the device before proceeding'
            //     }).then(() => {
            //        this.$router.push({
            //             path: '/home/ScanningDevice',
            //             query: {redirect: this.$route.fullPath}                               //将即将跳转的路由path作为参数，登录成功后跳转到该路由
            //         })
            //     });
            // }else {
            //     console.log('存在设备ID'); 
            // }
            
        },
        components:{
            headerNavBar:headerNavBar
        },
        beforeCreate(){
            window.sendIpBackFN = (e)=>{
                this.msgBack(e)
            }
            

            window.resetSsidBack = (e)=>{
                this.$store.state.sacn.splice(this.device.index,0);
                this.$store.state.deviceInfor = {};
                this.$router.push({
                    path: '/home/'
                })
            }

            window.getDeviceIdBack = (id)=>{
                this.id = id;
            }

            window.getDeviceParamBack = (e)=>{
                this.getDeviceParamBl = false;
                this.getDeviceParamBack(e);
            }

            window.sendDeviceParamBack = (e) =>{
                this.msgBack(e)
            }
        },
        store
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