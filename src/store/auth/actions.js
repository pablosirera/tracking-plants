import firebase from 'firebase'

export default {
  async registerUser({ commit }, { email, password }) {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      commit('setUser', user)
    } catch (error) {
      // TODO: remove this console
      console.error(error)
    }
  },
  async loginUser({ commit }, { email, password }) {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      commit('setUser', user)
    } catch (error) {
      console.error(error)
    }
  }
}