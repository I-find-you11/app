<template>
    <div>
        <headerNavBar :title='"输入数据"'></headerNavBar>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="输入IP/PORT" name="ip">
                <van-cell-group>
                    <van-field
                        v-model="IpData.ip"
                        required
                        clearable
                        label="IP"
                        placeholder="请输入IP"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="PORT"
                        placeholder="请输入PORT"
                    />
                </van-cell-group>
            </van-collapse-item>
            <van-collapse-item title="输入/查看雷达设备信息参数" name="Device">
                <van-cell-group>
                    <van-field
                        v-model="IpData.ip"
                        required
                        clearable
                        label="LED"
                        placeholder="请输入LED"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="模式"
                        placeholder="请输入模式"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="最小距离"
                        placeholder="请输入最小距离 "
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="最大距离"
                        placeholder="请输入最大距离 "
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="灵敏度"
                        placeholder="请输入灵敏度"
                    />
                    <van-field
                        v-model="IpData.port"
                        required
                        clearable
                        label="模块安装高度"
                        placeholder="请输入模块安装高度"
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
                deviceId:''
            }
        },
        methods:{
            
        },
        mounted() {
            console.log(this.$store.state.deviceId);
            if(this.$store.state.deviceId != '') {
                this.deviceId = this.$store.state.deviceId;
            }
            if(this.deviceId == ''){
                this.$dialog.alert({
                    message: '没有选择设备，请先选择设备再进行操作'
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

<style scoped>

</style>