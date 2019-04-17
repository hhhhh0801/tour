import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home';
import Spot from '@/pages/spot';
import Rout from '@/pages/router';
import Guide from '@/pages/guide';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Search from '@/pages/search';







Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/spot',
			name: 'Spot',
			component: Spot
		},
		{
			path: '/router',
			name: 'Rout',
			component: Rout
		},
		{
			path: '/guide',
			name: 'Guide',
			component: Guide
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		}

	]


});
