<template>
    <div>
        <headerNavBar :title='"Device Scan"' @addDevice='sacn' :icon='"aim"'></headerNavBar>
        <van-list
            @load="onLoad"
            class='wifiList'
        >
        <van-cell
            v-for="(item,index) in deviceList"
            :key="index"
            :title="item.ip"
            icon="aim"
            @click='changeDevice(item.ip)'
        />
        </van-list>

        <!-- 这里是添加设备 目前app 是通过本地扫描ip去实现 先不需求 --> 
        <!-- <van-popup v-model="" class='popupDiv'>
            <van-cell-group>
                <van-field
                    v-model="addDevice.data.DeviceName"
                    placeholder="设备名"
                    input-align='center'
                />
                <van-field
                    v-model="addDevice.data.DeviceId"
                    input-align='center'
                    placeholder="设备ID"
                />
            </van-cell-group>
            <div class='submit'>
                <van-button class='submit_btn' plain round @click='addSubmit'>添加</van-button>
            </div>
        </van-popup> -->
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    import store from '@/vuex/store'
    export default {
        data(){
            return {
                deviceList:[{
                    ip:'35.239.35.104',
                    id:''
                }]
            }
        },
        methods:{
            onLoad(){

            },
            addDeviceFn(data){
                
            },
            addSubmit(){
                this.addDevice.show = false;
                //console.log('添加成功');
            },
            sacn(){
                this.deviceList = [];
                this.$Toast.loading({
                    mask: true,
                    message: 'Loding...',
                    duration:0
                });
                for(let i = 0; i<5; i++) {
                    setTimeout(()=>{
                        this.deviceList.push({
                            ip:'35.239.35.' + i,
                            id:''
                        });
                        this.$store.state.sacn.push({
                            ip:'35.239.35.' + i,
                            id:''
                        });
                        if(i == 4) {
                            this.$Toast('扫描结束');
                        }
                    },i*1000)
                }
            },
            changeDevice(ip){
                //console.log(this.$store.state.deviceId);
                //alert(ip);
                this.$store.state.deviceId = ip;
                this.$router.push({path: this.$route.query.redirect || '/home/InputData'});
            },
            GetIp(ip){
                alert(ip);
                this.deviceList.push({
                    ip:ip,
                    id:'1'
                })
            }
        },
        components:{
            headerNavBar:headerNavBar
        },
        store,
        mounted() {
            //函数执行时间过长 用异步加载
            console.log(this.$store.state.sacn.length);
            if(this.$store.state.sacn.length){
                this.deviceList = this.$store.state.sacn;
            }else {
                this.sacn();
            }
        },
        created() {
            window.GetIp = (ip) => {
                this.GetIp(ip);
            }
        }
    }
</script>

<style scoped>
.popupDiv {
    padding: 30px;
}
.submit {
    margin-top: 30px;
    text-align: center;
}

</style>