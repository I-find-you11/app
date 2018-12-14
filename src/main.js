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

Locale.use('en-US', enUS);
Vue.use(vant);
Vue.use(Toast);
Vue.config.productionTip = false;
Vue.prototype.$Toast = Toast;


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
