a<template>
    <div>
        <headerNavBar :title='"数据展示"'></headerNavBar>
        <div>
            <van-tabs v-model="active" swipeable>
                <van-tab title="Breathe Rate">
                    <VeLine :data="chartData"></VeLine>
                </van-tab>
                <van-tab title="Heart Rate">
                    <VeLine :data="chartData"></VeLine>
                </van-tab>
                <van-tab title="Distance">
                    <VeLine :data="chartData"></VeLine>
                </van-tab>
                <van-tab title="State">
                    <VeLine :data="chartData"></VeLine>
                </van-tab>
            </van-tabs>
            <!-- <van-tabs v-model="active">
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 2">内容 2</van-tab>
                <van-tab title="标签 3">内容 3</van-tab>
                <van-tab title="标签 4">内容 4</van-tab>
            </van-tabs> -->
        </div>
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    import store from '@/vuex/store'
    import VeLine from 'v-charts/lib/line.common'
    export default {
        data(){
            return {
                deviceId:'',
                chartData: {
                    columns: ['日期', '访问用户'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393,},
                        { '日期': '1/2', '访问用户': 3530,},
                        { '日期': '1/3', '访问用户': 2923,},
                        { '日期': '1/4', '访问用户': 1723,},
                        { '日期': '1/5', '访问用户': 3792,},
                        { '日期': '1/6', '访问用户': 4593,}
                    ]
                },
                active:0
            }
        },
        methods:{
            
        },
        mounted() {
            //console.log(this.$route);
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
                //console.log('存在设备ID');
            }
        },
        components:{
            headerNavBar:headerNavBar,
            VeLine
        },
        store
    }
</script>

<style scoped>

</style>