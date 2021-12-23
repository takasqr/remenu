import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  namespaced: true,
  state: {
    habits: [],
  },
  mutations: {
    createHabit (state, habit) {
      let batch = firebase.firestore().batch()
      // habit追加
      let newHabitRef = firebase.firestore().collection('habits').doc()
      batch.set(newHabitRef, {
          name: habit.name,
          uid: habit.uid,
          deleted: habit.deleted,
        })

      // task追加
      let newTaskRef = firebase.firestore().collection('tasks').doc()
      batch.set(newTaskRef, {
          name: habit.name,
          uid: habit.uid,
          habitId: newHabitRef.id,
          completed: false
        })

      batch.commit().then(() => {
          habit.id = newHabitRef.id
          state.habits.unshift(habit)
        })
        .catch(error => {
          console.error(error)
        })

    },
    fetchHabits (state, uid) {
      state.habits = []
      firebase.firestore().collection('habits')
        .where('uid', '==', uid)
        .where('deleted', '==', false)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let habit = doc.data()
            // idを追加
            habit.id = doc.id
            state.habits.push(habit)
          })
        })
        .catch(error => {
          console.error(error)
        })
    },
    async deleteHabit (state, habit) {
      let batch = firebase.firestore().batch()

      let deletdedHabitRef = firebase.firestore().collection('habits').doc(habit.id)
      batch.update(deletdedHabitRef, { deleted: true })

      await firebase.firestore()
        .collection('tasks')
        .where('habitId', '==', habit.id)
        .where('uid', '==', habit.uid)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let taskRef = firebase.firestore().collection('tasks').doc(doc.id)
            batch.update(taskRef, { habitId: '' })
          })
        })
        .catch(error => {
          console.error(error)
        })
      
      batch.commit()
        .then(() => {
          const index = state.habits.findIndex(el => el.id === habit.id)
          state.habits.splice(index, 1)
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  actions: {
    CREATE_HABIT ({ commit }, value) {
      commit('createHabit', value)
    },
    FETCH_HABITS ({ commit }, value) {
      commit('fetchHabits', value)
    },
    COMPLETE_HABIT ({ commit }, value) {
      commit('completeHabit', value)
    },
    DELETE_HABIT ({ commit }, value) {
      commit('deleteHabit', value)
    }
  }
}
