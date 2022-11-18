import Vue from 'vue'
import App from './App.vue'
// 导入vuex
// import Vuex from 'vuex'
// 引入store
import store from '@/store/index.js'

// // 把vuex注册为插件
// Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
