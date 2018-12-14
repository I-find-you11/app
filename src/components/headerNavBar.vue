<template>
    <div>
        <van-nav-bar class='blue' :title="title" left-text="Back" left-arrow @click-left="onClickLeft">
            <van-icon @click="IconClick" :name="icon?icon:null" slot="right" />
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: ['title','icon'],
        methods:{
            onClickLeft(){
                this.$router.back(-1);
            },
            IconClick(){
                this.$emit('addDevice',true);
            }
        }
    }
</script>

<style scoped>
.blue {
    color: #1989fa;
}
</style>