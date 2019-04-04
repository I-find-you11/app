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
                <div id='ScanEcharts1' class='echartsDiv' ref="ScanEcharts1"></div>
            </div>
            <div>
                <div id='ScanEcharts2' class='echartsDiv' ref="ScanEcharts2"></div>
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
                deviceId:this.$store.state.deviceInfor.ip,
                BreatheHeart: {
                    title: {
                        text: 'Breathe and Heart',
                        left: 'right'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}'
                    },
                    legend: {
                        left: 'left',
                        data: ['Breathe', 'Heart']
                    },
                    xAxis: {
                        type: 'category',
                        name: 'x',
                        splitLine: {show: false},
                        data: []
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        name: ''
                    },
                    series: [
                        {
                            name: 'Breathe',
                            type: 'line',
                            symbolSize :'3',
                            data: []
                        },
                        {
                            name: 'Heart',
                            type: 'line',
                            symbolSize :'3',
                            data: []
                        }
                    ]
                },
                visibilityState: {
                    title: {
                        text: 'distance and State',
                        left: 'right'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}'
                    },
                    legend: {
                        left: 'left',
                        data: ['distance', 'State']
                    },
                    xAxis: {
                        type: 'category',
                        name: 'x',
                        splitLine: {show: false},
                        data: []
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        name: ''
                    },
                    series: [
                        {
                            name: 'distance',
                            type: 'line',
                            symbolSize :'3',
                            data: []
                        },
                        {
                            name: 'State',
                            type: 'line',
                            symbolSize :'3',
                            data: []
                        }
                    ]
                },
                active:0,
            }
        },
        methods:{
            
        },
        components:{
            headerNavBar:headerNavBar,
            VeLine
        },
        store,
        mounted() {
            window.getDataFormDevice = (e) =>{
                var arrStr = e;
                var arr = arrStr.split(',');
                var distance = Math.round(this.$hexFn.HexToSingleBatch(arr[0])*10)/10;
                var breathe = Math.round(this.$hexFn.HexToSingleBatch(arr[1])*10)/10;
                var heart = Math.round(this.$hexFn.HexToSingleBatch(arr[2])*10)/10;
                var visibility = Math.round(this.$hexFn.HexToSingleBatch(arr[3])*10)/10;
                var state = Math.round(this.$hexFn.HexToSingleBatch(arr[4])*10)/10;
                if(this.BreatheHeart.series[0].data.length>39) {
                    this.BreatheHeart.series[0].data.splice(0,1);
                    this.BreatheHeart.series[1].data.splice(0,1);
                    this.visibilityState.series[0].data.splice(0,1);
                    this.visibilityState.series[1].data.splice(0,1);
                }
                this.BreatheHeart.series[0].data.push(breathe);
                this.BreatheHeart.series[1].data.push(heart);
                this.visibilityState.series[0].data.push(distance);
                this.visibilityState.series[1].data.push(state);
                console.log(distance);
                console.log(breathe);
                console.log(visibility);
                console.log(state);
                // this.visibilityState.series[0].data.push(breathe);
                // this.visibilityState.series[1].data.push(heart);
                this.myChart1.setOption(this.BreatheHeart);
                this.myChart2.setOption(this.visibilityState);
            }
            for(let i = 1; i<41; i++) {
                this.BreatheHeart.xAxis.data.push(i);
                this.visibilityState.xAxis.data.push(i);
            }
            this.myChart1.setOption(this.BreatheHeart);
            this.myChart2.setOption(this.visibilityState);
            
        },
        computed: {
            myChart1() {
                return this.$echarts.init(document.getElementById('ScanEcharts1'));
            },
            myChart2() {
                return this.$echarts.init(document.getElementById('ScanEcharts2'));
            }
        },
        created(){
            console.log(this.$route);
            if(this.deviceId == ''){
                this.$dialog.alert({
                    message: 'No device selected, please select the device before proceeding'
                }).then(() => {
                    this.$router.push({
                        path: '/home/ScanningDevice',
                        //query: {redirect: this.$route.fullPath}                               //将即将跳转的路由path作为参数，
                    })
                });
            }else {
                //console.log('存在设备ID');
            }

            //进入的时候默认开启自动开启数据通道
            if(this.$store.state.openDataBl){return false};
            setTimeout(()=>{
                android.openData();
            })
        },
        beforeCreate(){
            window.openDataBack = ()=>{};
        },
    }
</script>

<style scoped>
.echartsDiv{
    width:100%;
    height:200px;
    margin-top: 30px;
}
</style>