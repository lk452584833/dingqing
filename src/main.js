// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router.js'
import iView from 'iview'
import axios from 'axios'

import 'babel-polyfill'
import 'iview/dist/styles/iview.css'
// import commonHeader from './components/main/header'
// import commonFooter from './components/main/footer'
import plugin from './assets/js/plugin.js'

Vue.use(plugin)
Vue.use(iView)


Vue.config.productionTip = false



// Vue.component('commonHeader', commonHeader)
// Vue.component('commonFooter', commonFooter)


Vue.prototype.href="http://127.0.0.1/php/laoman/"
Vue.prototype.axios=axios

new Vue({
  el: '#app',
  data(){
  	return{
      personalHref:''
  	}
  },
  router,
  components: { App },
  template: '<App/>',
  created(){
    
  }
})