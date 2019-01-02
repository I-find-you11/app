import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    isLogin : false,
    user : {
        name: '11'
    },
    a : '',
    deviceId:'',
    wifiName:'',
    hostIp:'',
    sacn:[],
    isFirstLoding:false
}

export default new Vuex.Store({
	state
})