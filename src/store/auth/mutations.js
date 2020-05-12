export default {
  setToken(state, token) {
    state.token = token
    sessionStorage.setItem('api_token', token)
  }
}
