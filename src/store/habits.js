import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  namespaced: true,
  state: {
    habits: [],
  },
  mutations: {
    createHabit (state, habit) {
      firebase.firestore().collection('habits')
        .add({
          name: habit.name,
          uid: habit.uid,
          completed: habit.completed,
        })
        .then((doc) => {
          habit.id = doc.id
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
