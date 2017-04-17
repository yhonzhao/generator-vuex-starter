// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import userStore from './store/stroe'
import 'element-ui/lib/theme-default/index.css'
import './style.css'

Vue.use(ElementUI)
Vue.use(Vuex);
const store = new Vuex.Store(userStore)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})


