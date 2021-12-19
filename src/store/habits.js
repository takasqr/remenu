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
          completed: habit.completed,
        })

      // task追加
      let newTaskRef = firebase.firestore().collection('tasks').doc()
      batch.set(newTaskRef, {
          name: habit.name,
          uid: habit.uid,
          habitId: newHabitRef.id,
          completed: habit.completed
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
      firebase.firestore().collection('habits')
        .where('uid', '==', uid)
        .where('completed', '==', false)
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
    completeHabit (state, id) {
      firebase.firestore().collection('habits').doc(id)
        .update({ completed: true })
        .then(() => {
          const index = state.habits.findIndex(el => el.id === id)
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
    }
  }
}
