<template>
    <div>
        <headerNavBar :title='"扫描设备"' @addDevice='addDeviceFn' :icon='"add-o"'></headerNavBar>
        <van-list
            :loading='loading'
            @load="onLoad"
            class='wifiList'
        >
        <van-cell
            v-for="(item,index) in deviceList"
            :key="index"
            :title="item.name"
            icon="aim"
            @click='changeDevice(item.id)'
        />
        </van-list>

        <van-popup v-model="addDevice.show" class='popupDiv'>
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
        </van-popup>
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    import store from '@/vuex/store'
    export default {
        data(){
            return {
                addDevice:{
                    show:false,
                    data:{
                        DeviceName:'',
                        DeviceId:''
                    }
                },
                loading: false,
                deviceList:[{
                    name:'设备1',
                    id:1
                },{
                    name:'设备2',
                    id:2
                },{
                    name:'设备3',
                    id:3
                },{
                    name:'设备4',
                    id:4
                },{
                    name:'设备5',
                    id:5
                },{
                    name:'设备6',
                    id:6
                },{
                    name:'设备7',
                    id:7
                }]
            }
        },
        methods:{
            onLoad(){

            },
            addDeviceFn(data){
                console.log(data)
                this.addDevice.show = data;
            },
            addSubmit(){
                this.addDevice.show = false;
                console.log('添加成功');
            },
            changeDevice(id){
                console.log(this.$store.state.deviceId);
                this.$store.state.deviceId = id;
                this.$router.push({path: this.$route.query.redirect || '/home/InputData'});
            }
        },
        components:{
            headerNavBar:headerNavBar
        },
        store,
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