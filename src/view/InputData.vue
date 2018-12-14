<template>
    <div>
        <headerNavBar :title='"Paramater Settings"'></headerNavBar>
        <van-collapse v-model="activeNames" class='Settings'>
            <van-collapse-item title="Networks" name="ip" class='Settings'>
                <van-cell-group>
                    <van-field
                        v-model="IpData.ip"
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
            </van-collapse-item>
            <van-collapse-item title="User Settings" name="Device">
                <van-cell-group>
                    <van-cell
                        clickable
                        title="LED"
                        >
                        <van-switch v-model="LED" />
                    </van-cell>
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="Data Mode"
                        placeholder="Please change Mode"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="Min Distance"
                        placeholder="Please enter Min Distance"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="Max Distance"
                        placeholder="Please enter Max Distance"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="Sensitivity"
                        placeholder="Please enter Sensitivity"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="Mounting height"
                        placeholder="Please enter Mounting height"
                    />
                </van-cell-group>
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
                IpData:{
                    Ip:'',
                    port:''
                },
                deviceId:'',
                LED:false
            }
        },
        methods:{
            toggle() {
                //console.log(11);
                this.LED = !this.LED;
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
</style>