import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles'
import './configFirebase'
import vClickOutside from 'v-click-outside'

Vue.config.productionTip = false

Vue.use(vClickOutside)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
