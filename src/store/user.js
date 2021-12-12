export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    user (state, value) {
      state.user = value
    }
  },
  actions: {
    USER ({ commit }, value) {
      commit('user', value)
    }
  }
}
