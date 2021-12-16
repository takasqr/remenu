<template>
  <ul>
    <li>{{ task.name }}</li>
  </ul>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

import { mapState } from 'vuex'

export default {
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      task: null
    }
  },
  computed: {
    ...mapState('user',
      { user: state => state.user }
    )
  },
  watch: {
    user (newValue, oldValue) {
      if (newValue && !oldValue) {
        firebase.firestore()
          .collection('tasks')
          .doc(this.taskId)
          .get()
          .then(doc => {
            this.task = doc.data()
        })
      }
    }
  }
}
</script>