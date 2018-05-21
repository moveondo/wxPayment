// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import App from './App';
import store from './store/index.js';

import axios from 'axios';

Vue.prototype.$axios = axios;
// axios.defaults.withCredentials = true;
//axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.config.productionTip = false;

window.vueEvent = new Vue(); // 专门用作单一事件管理而初始化的全局Vue对象
//axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
	store,
	el: '#app',
	template: '<App/>',
	components: { App },
	router
})
