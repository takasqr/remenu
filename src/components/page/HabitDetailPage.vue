<template>
  <div>
    <HabitViewer v-show="!editSwitch" :habit="habit" />
    <HabitEditor v-show="editSwitch" :habit="habit" />
    <v-btn @click="clickEditSwitch">編集</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import HabitViewer from '@/components/component/HabitViewer'
import HabitEditor from '@/components/component/HabitEditor'
export default {
  components: {
    HabitViewer,
    HabitEditor
  },
  data: function () {
    return {
      editSwitch: false,
      habit: {},
      habitId: null
    }
  },
  created: function () {
    this.habitId = this.$route.params['habitId']
    if (!this.habit.name) {
      this.fetchHabit(this.habitId)
    }
  },
  methods: {
    clickEditSwitch: function () {
      if (this.editSwitch) {
        this.editSwitch = false
      } else {
        this.editSwitch = true
      }
    },
    fetchHabit: function (habitId) {
      firebase.firestore()
        .collection('habits')
        .doc(habitId)
        .get()
        .then(doc => {
          this.habit = doc.data()
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  watch: {
    user (newValue, oldValue) {
      if (newValue && !oldValue) {
        this.fetchHabit(this.habitId)
      }
    }
  }
}
</script>
