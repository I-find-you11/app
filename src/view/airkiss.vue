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
                }
            }
        },
        methods:{
            onLoad(){
                //JsCallNative.callAirKissEncoder('ssid','password');
            },
            airkissCall(msg) {
                console.log(this.loading);
                this.loading = true;
                console.log(msg);
            }
        },
        components:{
            headerNavBar:headerNavBar
        },
        created() {
            var this_ = this;
            window.airkissCall = function (msg) {
                this_.airkissCall(msg);
            }
        },
        mounted() {
            //window.airkissCall('hello');
        },
    }
</script>

<style scoped>

</style>