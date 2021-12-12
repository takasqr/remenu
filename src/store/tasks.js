import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  namespaced: true,
  state: {
    tasks: [],
  },
  mutations: {
    createTask (state, task) {
      firebase.firestore().collection('tasks')
        .add({
          name: task.name,
          uid: task.uid,
          completed: task.completed,
        })
        .then(() => {
          state.tasks.unshift(task)
        })
        .catch(error => {
          console.error(error)
        })
    },
    fetchTasks (state, uid) {
      firebase.firestore().collection('tasks')
        .where('uid', '==', uid)
        .where('completed', '==', false)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            state.tasks.push(doc.data())
          })
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  actions: {
    CREATE_TASK ({ commit }, value) {
      commit('createTask', value)
    },
    FETCH_TASKS ({ commit }, value) {
      commit('fetchTasks', value)
    }
  }
}
