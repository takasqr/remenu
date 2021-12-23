<template>
  <v-card rounded="lg">
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="createTask"
      >
        <InputTaskName v-bind:taskName.sync="taskName"></InputTaskName>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import InputTaskName from '@/components/basic/InputTaskName.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      taskName: '',
      valid: true
    }
  },
  components: {
    InputTaskName
  },
  computed: {
    ...mapState('user',
      { user: state => state.user }
    )
  },
  methods: {
    ...mapActions('tasks', ['CREATE_TASK']),
    createTask () {
      this.CREATE_TASK({ uid: this.user.uid ,name: this.taskName, completed: false })

      // 入力をクリア
      this.taskName = null
    }
  }
}
</script>
