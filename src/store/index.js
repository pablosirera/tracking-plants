import Vue from 'vue'
import Vuex from 'vuex'
import plants from './plants'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    plants,
    auth
  }
})
