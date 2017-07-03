// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import config from '@/config'
// import Axios from 'axios'
// import axiosCon from '@/axiosCon'
// Axios.defaults = axiosCon
// import config from '@/config'
// import VueResource from 'vue-resource'
// Vue.use(Axios)
// Vue.use(VueResource)
// import Vuex from 'vuex'
// import ''
Vue.use(router)
Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created: function (argument) {
    config.axiosCon()
  }
})
