// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './style/main.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
Vue.use(ElementUI);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});

router.beforeEach((to, from, next) => {
	// chrome
	document.body.scrollTop = 0;
	// firefox
	document.documentElement.scrollTop = 0;
	// safari
	window.pageYOffset = 0;
	next();
});
