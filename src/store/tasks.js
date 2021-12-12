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
            let task = doc.data()
            // idを追加
            task.id = doc.id
            state.tasks.push(task)
          })
        })
        .catch(error => {
          console.error(error)
        })
    },
    completeTask (state, id) {
      console.log(id)
      firebase.firestore().collection('tasks').doc(id)
        .update({ completed: true })
        .then(() => {
          const index = state.tasks.findIndex(el => el.id === id)
          state.tasks.splice(index, 1)
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
    },
    COMPLETE_TASK ({ commit }, value) {
      commit('completeTask', value)
    },
  }
}
