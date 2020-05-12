import Axios from 'axios'
import Vue from 'vue'

const instance = Axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

Vue.prototype.$http = instance

instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.VUE_APP_PLANTS_API_TOKEN}`

export default instance
