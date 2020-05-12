import axios from '@/http'

export default {
  async getToken({ commit }) {
    const response = await axios.post(
      `https://trefle.io/api/auth/claim?token=${process.env.VUE_APP_PLANTS_API_TOKEN}&origin=${process.env.VUE_APP_URL}}`
    )
    commit('setToken', response.data)
  },
  async inspectToken({ dispatch, state }) {
    const token = state.token

    if (token) {
      const expiration = token.expiration
      const now = Date.now() / 1000
      if (expiration - now < 0) {
        await dispatch('getToken')
      }
    }
  }
}
