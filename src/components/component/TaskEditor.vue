<template>
  <div>task editor</div>
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
  created: function () {
      console.log(this.taskId)
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
            console.log(doc.data())
        })
      }
    }
  }
}
</script>