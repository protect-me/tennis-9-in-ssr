export default {
  async onAuthStateChanged({ commit }, { authUser }) {
    let unsubscribe = null
    if (!authUser) {
      commit('SET_USER', null)
      if (unsubscribe) unsubscribe()
      return
    }
    commit('SET_FIRE_USER', authUser)

    const subscribe = (authUser) => {
      const ref = this.$fire.firestore.collection('users').doc(authUser.uid)
      unsubscribe = ref.onSnapshot((doc) => {
        if (doc.exists) commit('SET_USER', doc.data())
      }, console.error)
    }
    subscribe(authUser)
  },
}
