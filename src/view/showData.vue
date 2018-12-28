a<template>
    <div>
        <headerNavBar :title='"Data Show"'></headerNavBar>
        <div>
            <!-- <van-tabs v-model="active" swipeable>
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
            </van-tabs> -->
            <!-- <van-tabs v-model="active">
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 2">内容 2</van-tab>
                <van-tab title="标签 3">内容 3</van-tab>
                <van-tab title="标签 4">内容 4</van-tab>
            </van-tabs> -->
            <div>
                <VeLine :data="chartData1" :height='"250px"'></VeLine>
            </div>
            <div>
                <VeLine :data="chartData2" :height='"250px"'></VeLine>
            </div>     
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
                chartData1: {
                    columns: ['time', 'Breathe Rate','Heart Rate'],
                    rows: [
                        { 'time': '1/1', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/2', 'Breathe Rate': 14.0,'Heart Rate':51.0},
                        { 'time': '1/3', 'Breathe Rate': 10.0,'Heart Rate':51.0},
                        { 'time': '1/4', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/5', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/6', 'Breathe Rate': 14.0,'Heart Rate':51.0},
                        { 'time': '1/7', 'Breathe Rate': 17.0,'Heart Rate':51.0},
                        { 'time': '1/8', 'Breathe Rate': 17.0,'Heart Rate':51.0},
                        { 'time': '1/9', 'Breathe Rate': 17.0,'Heart Rate':57.0},
                        { 'time': '1/10', 'Breathe Rate': 17.0,'Heart Rate':57.0},
                        { 'time': '1/11', 'Breathe Rate': 16.0,'Heart Rate':57.0},
                        { 'time': '1/12', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/13', 'Breathe Rate': 14.0,'Heart Rate':51.0},
                        { 'time': '1/14', 'Breathe Rate': 10.0,'Heart Rate':51.0},
                        { 'time': '1/15', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/16', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/17', 'Breathe Rate': 14.0,'Heart Rate':51.0},
                        { 'time': '1/18', 'Breathe Rate': 17.0,'Heart Rate':51.0},
                        { 'time': '1/19', 'Breathe Rate': 17.0,'Heart Rate':51.0},
                        { 'time': '1/20', 'Breathe Rate': 17.0,'Heart Rate':57.0},
                        { 'time': '1/21', 'Breathe Rate': 17.0,'Heart Rate':57.0},
                        { 'time': '1/22', 'Breathe Rate': 16.0,'Heart Rate':57.0},
                        { 'time': '1/23', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/24', 'Breathe Rate': 14.0,'Heart Rate':51.0},
                        { 'time': '1/25', 'Breathe Rate': 10.0,'Heart Rate':51.0},
                        { 'time': '1/26', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/27', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/28', 'Breathe Rate': 14.0,'Heart Rate':51.0},
                        { 'time': '1/29', 'Breathe Rate': 17.0,'Heart Rate':51.0},
                        { 'time': '1/30', 'Breathe Rate': 17.0,'Heart Rate':51.0},
                        { 'time': '1/31', 'Breathe Rate': 17.0,'Heart Rate':57.0},
                        { 'time': '1/32', 'Breathe Rate': 17.0,'Heart Rate':57.0},
                        { 'time': '1/33', 'Breathe Rate': 16.0,'Heart Rate':57.0},
                        { 'time': '1/34', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/35', 'Breathe Rate': 14.0,'Heart Rate':51.0},
                        { 'time': '1/36', 'Breathe Rate': 10.0,'Heart Rate':51.0},
                        { 'time': '1/37', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/38', 'Breathe Rate': 11.0,'Heart Rate':51.0},
                        { 'time': '1/39', 'Breathe Rate': 14.0,'Heart Rate':51.0},
                        { 'time': '1/40', 'Breathe Rate': 17.0,'Heart Rate':51.0},
                        { 'time': '1/41', 'Breathe Rate': 17.0,'Heart Rate':51.0},
                        { 'time': '1/42', 'Breathe Rate': 17.0,'Heart Rate':57.0},
                        { 'time': '1/43', 'Breathe Rate': 17.0,'Heart Rate':57.0},
                        { 'time': '1/44', 'Breathe Rate': 16.0,'Heart Rate':57.0},
                    ]
                },
                chartData2: {
                    columns: ['time', 'Distance','State'],
                    rows: [
                        { 'time': '1/1', 'Distance': 43.0,'State':'4'},
                        { 'time': '1/2', 'Distance': 42.9,'State':'4'},
                        { 'time': '1/3', 'Distance': 42.5,'State':'4'},
                        { 'time': '1/4', 'Distance': 42.2,'State':'4'},
                        { 'time': '1/5', 'Distance': 42.0,'State':'4'},
                        { 'time': '1/6', 'Distance': 41.7,'State':'4'},
                        { 'time': '1/7', 'Distance': 41.1,'State':'4'},
                        { 'time': '1/8', 'Distance': 41.0,'State':'4'},
                        { 'time': '1/9', 'Distance': 39.4,'State':'4'},
                        { 'time': '1/10', 'Distance': 37.5,'State':'4'},
                        { 'time': '1/11', 'Distance': 35.6,'State':'4'},
                        { 'time': '1/12', 'Distance': 43.0,'State':'4'},
                        { 'time': '1/13', 'Distance': 42.9,'State':'4'},
                        { 'time': '1/14', 'Distance': 42.5,'State':'4'},
                        { 'time': '1/15', 'Distance': 42.2,'State':'4'},
                        { 'time': '1/16', 'Distance': 42.0,'State':'4'},
                        { 'time': '1/17', 'Distance': 41.7,'State':'4'},
                        { 'time': '1/18', 'Distance': 41.1,'State':'4'},
                        { 'time': '1/19', 'Distance': 41.0,'State':'4'},
                        { 'time': '1/20', 'Distance': 39.4,'State':'4'},
                        { 'time': '1/21', 'Distance': 37.5,'State':'4'},
                        { 'time': '1/22', 'Distance': 35.6,'State':'4'},
                        { 'time': '1/23', 'Distance': 43.0,'State':'4'},
                        { 'time': '1/24', 'Distance': 42.9,'State':'4'},
                        { 'time': '1/25', 'Distance': 42.5,'State':'4'},
                        { 'time': '1/26', 'Distance': 42.2,'State':'4'},
                        { 'time': '1/27', 'Distance': 42.0,'State':'4'},
                        { 'time': '1/28', 'Distance': 41.7,'State':'4'},
                        { 'time': '1/29', 'Distance': 41.1,'State':'4'},
                        { 'time': '1/30', 'Distance': 41.0,'State':'4'},
                        { 'time': '1/31', 'Distance': 39.4,'State':'4'},
                        { 'time': '1/32', 'Distance': 37.5,'State':'4'},
                        { 'time': '1/33', 'Distance': 35.6,'State':'4'},
                        { 'time': '1/34', 'Distance': 43.0,'State':'4'},
                        { 'time': '1/35', 'Distance': 42.9,'State':'4'},
                        { 'time': '1/36', 'Distance': 42.5,'State':'4'},
                        { 'time': '1/37', 'Distance': 42.2,'State':'4'},
                        { 'time': '1/38', 'Distance': 42.0,'State':'4'},
                        { 'time': '1/39', 'Distance': 41.7,'State':'4'},
                        { 'time': '1/40', 'Distance': 41.1,'State':'4'},
                        { 'time': '1/41', 'Distance': 41.0,'State':'4'},
                        { 'time': '1/42', 'Distance': 39.4,'State':'4'},
                        { 'time': '1/43', 'Distance': 37.5,'State':'4'},
                        { 'time': '1/44', 'Distance': 35.6,'State':'4'},
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