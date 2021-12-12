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
    createTask (state, value) {
      state.tasks.unshift(value)
    }
  },
  actions: {
    CREATE_TASK ({ commit }, value) {
      commit('createTask', value)
    }
  }
}
