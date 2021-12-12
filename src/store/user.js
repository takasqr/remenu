export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser (state, value) {
      state.user = value
    }
  },
  actions: {
    SET_USER ({ commit }, value) {
      commit('setUser', value)
    }
  }
}
