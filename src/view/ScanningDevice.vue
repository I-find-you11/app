<template>
    <div>
        <headerNavBar :title='"扫描设备"' :icon='"search"'></headerNavBar>
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
                deviceList:[{
                    name:'设备1'
                },{
                    name:'设备2'
                },{
                    name:'设备3'
                },{
                    name:'设备4'
                },{
                    name:'设备5'
                },{
                    name:'设备6'
                },{
                    name:'设备7'
                }]
            }
        },
        methods:{
            onLoad(){

            }
        },
        components:{
            headerNavBar:headerNavBar
        },
    }
</script>

<style scoped>

</style>