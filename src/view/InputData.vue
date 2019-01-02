<template>
    <div>
        <headerNavBar :title='"Paramater Settings"'></headerNavBar>
        <van-collapse v-model="activeNames" class='Settings'>
            <van-collapse-item title="Networks" name="ip" class='Settings'>
                <van-cell-group>
                    <van-field
                        v-model="IpData.Ip"
                        required
                        clearable
                        label="IP"
                        placeholder="Please enter IP"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="PORT"
                        placeholder="Please enter PORT"
                    />
                </van-cell-group>

                <van-button class='submit_btn' plain round size="normal" @click='sendFn1'>send</van-button>
                
                <van-button class='submit_btn' plain round size="normal" @click='Reset'>重置配网</van-button>
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
                IpData:{
                    Ip:this.$store.state.hostIp,
                    port:''
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
            }
        },
        methods:{
            toggle() {
                //console.log(11);
                this.LED = !this.LED;
            },
            server(e){
               
            },
            Reset(){
                
            },
            sendFn1(){
                this.isClient = true;
                andriod.sendServerIp(IpData.ip,IpData.port);
                this.$Toast.loading({
                    mask: true,
                    message: 'Send...',
                    duration:0
                });
            },
            sendFn2(){
                this.$Toast('发送成功');
            }
        },
        mounted() {
            //console.log(this.$store.state.deviceId);
            if(this.$store.state.deviceId != '') {
                this.deviceId = this.$store.state.deviceId;
            }
            if(this.deviceId == ''){
                this.$dialog.alert({
                    message: 'No device selected, please select the device before proceeding'
                }).then(() => {
                   this.$router.push({
                        path: '/home/ScanningDevice',
                        query: {redirect: this.$route.fullPath}                               //将即将跳转的路由path作为参数，登录成功后跳转到该路由
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
            window.sendIpBackFN = ()=>{
                this.$Toast('Send successfully');
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