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

            }
        },
        components:{
            headerNavBar:headerNavBar
        }
    }
</script>

<style scoped>

</style>