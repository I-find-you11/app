// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vant from 'vant'
import { Toast } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import 'vant/lib/index.css';
import { Locale } from 'vant';
import axios from 'axios'
import hexFn from './assets/js/hextoFloat'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

Locale.use('en-US', enUS);        //vant 改成英文版本
Vue.use(vant);
Vue.use(Toast);
Vue.config.productionTip = false;
Vue.prototype.$Toast = Toast;
Vue.prototype.$http = axios;
Vue.prototype.$hexFn = hexFn;  // 16进制 和 浮点型互相转换函数
Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
