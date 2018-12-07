a<template>
    <div>
        <headerNavBar :title='"数据展示"'></headerNavBar>
    </div>
</template>

<script>
    import headerNavBar from '@/components/headerNavBar'
    import store from '@/vuex/store'
    export default {
        data(){
            return {
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
                    this.$router.push({path:'/home/ScanningDevice'})
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