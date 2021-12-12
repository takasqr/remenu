export default {
  namespaced: true,
  state: {
    tasks: [
      {
        name: 'ランニング',
        completed: false
      },
      {
        name: '本を読む',
        completed: false
      }
    ],
  },
  mutations: {
    tasks (state, value) {
      state.tasks = value
    }
  },
  actions: {
    USER ({ commit }, value) {
      commit('tasks', value)
    }
  }
}
