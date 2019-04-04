<template>
    <div>
        <p v-for='(item,index) in list' :key='index'>
            <span v-for='(listItem,listIndex) in item.listD' :key='listIndex'>
                {{all?'1':item.bl?'1':listItem?'1':'0'}}<br>
            </span>
            <span @click='item.bl = !item.bl'>选择/取消 局部全选   {{item.bl}}</span>
            <br>
            <br>
            <br>
            <br>
        </p>
        <span @click='all = !all'>选择/取消 全部全选   {{all}}</span>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                all:true,
                list:[
                    {
                        bl:true,
                        listD:[
                            true,
                            false,
                            true,
                            false,
                            true,
                        ]
                    },
                    {
                        bl:false,
                        listD:[
                            true,
                            false,
                            true,
                            false,
                            true,
                        ]
                    },
                ]
            }
        },
        metheds:{
            num(){
                var json = [
                    {
                        x: 1,     //x系数      
                        y:2,      //y系数
                        r:20,     //方程的尾数             //方程表达式为  x+2y=20;   下面同理
                    },
                    {
                        x: 5,
                        y:6,
                        r:50,
                    },
                ]
                var x = null;       //x值
                var y = null;       //y值
                var rAll = null;    //两方程的尾数相减值
                var beishu = json[0].x / json[1].x;         //获取两个方程之间x相差倍数
                json[1].y = json[1].y * beishu;             //扩大相同倍数 然后 两个方程相减可以 去掉x 
                json[1].r = json[1].r * beishu;
                rAll = json[1].r - json[0].r;               //两个方程相减  得到 相减后的尾数 
                y =rAll  / (json[1].y - json[0].y);                 // 两个方程相减得到 然后得到单纯的 一元一次方程然后直接进行运算得到y值
                x = (json[0].r - json[0].y * y) / json[0].x;        // 根据y 带入第一个方程进求出x
            }
        },
        computed:{
            arrAll(){
                return function (arr) {
                    var num = 0;
                    for(let i in arr) {
                        num = num + arr[i];
                    }
                    return num;
                }
            }
        }
    }
</script>

<style scoped>

</style>