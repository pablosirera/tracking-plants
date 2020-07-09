import firebase from 'firebase'

export default {
  async registerUser({ commit }, { email, password, name }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)

      await firebase.auth().currentUser.updateProfile({ displayName: name })
      const user = firebase.auth().currentUser

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
      commit('setUser', user.user)
    } catch (error) {
      console.error(error)
    }
  }
}
