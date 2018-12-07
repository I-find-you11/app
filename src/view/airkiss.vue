<template>
    <div>
        <headerNavBar :title='"配网"'></headerNavBar>
        <van-cell-group>
            <van-field
                v-model="wifiInfor.wifiName"
                placeholder="请输入wifi名称"
                input-align='center'
            />

            <van-field
                v-model="wifiInfor.wifiPassword"
                type="password"
                placeholder="请输入wifi密码"
                input-align='center'
            />
        </van-cell-group>
        <van-popup v-model="AirkissOk" class='popup'>配网成功</van-popup>
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    export default {
        data(){
            return {
                wifiInfor:{
                    wifiName:'',
                    wifiPassword:''
                },
                AirkissOk:false
            }
        },
        methods:{
            onLoad(){
                //JsCallNative.callAirKissEncoder('ssid','password');
            },
            airkissCall(msg) {
                console.log(msg);
                this.AirkissOk = true;
            }
        },
        components:{
            headerNavBar:headerNavBar
        },
        created() {
            window.airkissCall = (msg) => {
                this.airkissCall(msg);
            }
        },
        mounted() {
            //window.airkissCall('hello');
        },
    }
</script>

<style scoped>
.popup {
    padding:20px 30px;
}
</style>