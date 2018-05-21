/*
 * Description: Vue路由
 * User: lilu
 * Date: 2017/04/06
*/

import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

// 首页
const index = () => import('@/components/index/index.vue');
const blackdetect = () => import('@/components/report/black.vue');
const blacklist = () => import('@/components/report/blacklist.vue');
const financialdetect = () => import('@/components/report/financial.vue');
const login = () => import('@/components/login/login.vue');
const enter = () => import('@/components/login/enter.vue');
const attorney = () => import('@/components/protocol/re.vue');
const service = () => import('@/components/protocol/service.vue');
const load = () => import('@/components/load/load.vue');




Vue.use(Router);
Vue.use(Resource);

export default new Router({
	mode: 'hash',
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/blackdetect',
			name: 'blackdetect',
			component: blackdetect
		 },
		 {
			 path: '/financialdetect',
			 name: 'financialdetect',
			 component: financialdetect
			},
			{
				path: '/login',
				name: 'login',
				component: login
			 },
			 {
				 path: '/enter',
				 name: 'enter',
				 component: enter
				},



		{
			path: '/attorney',
			name: 'attorney',
			component: attorney
		 },
		 {
			 path: '/service',
			 name: 'service',
			 component: service
			},
			{
				path: '/load',
				name: 'load',
				component: load
			 },
			 {
 				path: '/blacklist',
 				name: 'blacklist',
 				component: blacklist
 			 },

	]
})
