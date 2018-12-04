<template>
    <div>
        <headerNavBar :title='"配网"'></headerNavBar>
        <van-list
            :loading='loading'
            @load="onLoad"
            class='wifiList'
        >
        <van-cell
            v-for="(item,index) in wifiList"
            :key="index"
            :title="item.name"
            icon="share"
        />
        </van-list>
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    export default {
        data(){
            return {
                loading: false,
                wifiList:[{
                    name:'360wifi'
                },{
                    name:'361wifi'
                },{
                    name:'362wifi'
                },{
                    name:'363wifi'
                },{
                    name:'364wifi'
                },{
                    name:'365wifi'
                },{
                    name:'366wifi'
                }]
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