<template>
  <div>
    <TaskViewer v-show="!editSwitch" :task="task" />
    <TaskEditor v-show="editSwitch" :task="task" />
    <v-btn @click="clickEditSwitch">編集</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import TaskViewer from '@/components/component/TaskViewer'
import TaskEditor from '@/components/component/TaskEditor'
export default {
  components: {
    TaskViewer,
    TaskEditor
  },
  data: function () {
    return {
      editSwitch: false,
      task: {},
      taskId: null
    }
  },
  created: function () {
    this.taskId = this.$route.params['taskId']
    if (!this.task.name) {
      this.fetchTask(this.taskId)
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
    fetchTask: function (taskId) {
      firebase.firestore()
        .collection('tasks')
        .doc(taskId)
        .get()
        .then(doc => {
          this.task = doc.data()
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  watch: {
    user (newValue, oldValue) {
      if (newValue && !oldValue) {
        this.fetchTask(this.taskId)
      }
    }
  }
}
</script>
