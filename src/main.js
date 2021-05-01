// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import * as APIs from './APIs'

import echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.prototype.$echarts = echarts
Vue.prototype.APIs = APIs
Vue.prototype._GLOBAL = {
  userID: 1,
  projectID: 1,
  imgBaseUrl: 'http://39.97.175.119:8080/imgs/',
  baseUrl: '/api', // 'http://39.97.175.119:8801'
  userObj: {
    ID: 0,
    name: '',
    avatar: ''
  },
  ProjectList: [],
  projectIndex: 0
}
Vue.prototype.$bus = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
