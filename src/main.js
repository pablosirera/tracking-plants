import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles'
import './configFirebase'
import vClickOutside from 'v-click-outside'
import * as rules from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(vClickOutside)
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_UA
})

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
