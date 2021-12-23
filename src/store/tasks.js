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
          habitId: '',
          completed: task.completed,
        })
        .then((doc) => {
          task.id = doc.id
          state.tasks.unshift(task)
        })
        .catch(error => {
          console.error(error)
        })
    },
    fetchTasks (state, uid) {
      state.tasks = []
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
    updateTask (state, task) {
      // バッチ処理作成
      let batch = firebase.firestore().batch()

      // 更新するタスク
      let updatedTaskRef = firebase.firestore().collection('tasks').doc(task.id)
      batch.update(updatedTaskRef, task)

      // 習慣だったら
      let updatedHabitRef
      if (task.habitId) {
        updatedHabitRef= firebase.firestore().collection('habits').doc(task.habitId)

        batch.update(updatedHabitRef, { uid: task.uid, name: task.name })
      }
      // バッチ処理実行
      batch.commit()
        .catch(error => {
          console.error(error)
        })
    },
    completeTask (state, task) {
      // バッチ処理作成
      let batch = firebase.firestore().batch()

      // 終了させるタスク
      let completedTaskRef = firebase.firestore().collection('tasks').doc(task.id)
      batch.update(completedTaskRef, { completed: true })

      // 習慣の再追加
      let newTaskRef
      if (task.habitId) {
        newTaskRef = firebase.firestore().collection('tasks').doc()

        batch.set(newTaskRef, {
            name: task.name,
            uid: task.uid,
            habitId: task.habitId,
            completed: task.completed
          })
      }
      batch.commit()
        .then(() => {
          const index = state.tasks.findIndex(el => el.id === task.id)
          state.tasks.splice(index, 1)

          if (task.habitId) {
            task.id = newTaskRef.id
            newTaskRef.get().then(doc => {
              let newTask = doc.data()
              newTask.id = doc.id
              state.tasks.unshift(newTask)
            })
          }
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
    UPDATE_TASK ({ commit }, value) {
      commit('updateTask', value)
    },
    COMPLETE_TASK ({ commit }, value) {
      commit('completeTask', value)
    }
  }
}
