import Vue from 'vue'
import Vuex from 'vuex'
import plants from './plants'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    plants
  }
})
