import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    isLogin : false,
    user : {
        name: '11'
    },
    a : ''
}

export default new Vuex.Store({
	state
})