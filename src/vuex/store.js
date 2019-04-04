import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    isLogin : false,
    user : {
        name: '11'
    },
    a : '',
    deviceInfor:{
        ip:'',
        index:''
    },
    wifiName:'',
    hostIp:'',                            //本机IP地址
    sacn:[],                              //扫描到的设备
    isFirstLoding:false,                  //扫描设备页面是不是第一次扫描设备
    historySetting:{},                    //设备参数设置页面  上一次提交过的参数，如果用户曾经提交过一次参数 保存上一次的参数  可以让下一台设备直接提交不需要重复设置
    deviceIsContent:false,                //是否连接到设备    如果曾经将本机的IP和端口发送到设备让设备连接到APP以后   开启 服务端的 页面权限。 在重新选择设备以后重置
    openDataBl:false                      // 是否开启数据通道 
}

export default new Vuex.Store({
	state
})