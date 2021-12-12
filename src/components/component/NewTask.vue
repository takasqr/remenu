<template>
  <div>
    <v-card rounded="lg">
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit="createTask"
        >
          <v-text-field
            v-model="taskName"
            :rules="taskNameRules"
            :label="this.$t('message.input_new_task')"
            required
            validate-on-blur
            clearable
          />
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      taskName: null,
      valid: true,
      taskNameRules: [
        v => !!v || this.$t('message.input_error_require'),
        v => (v && v.length <= 50) || '50文字以内で入力してください。'
      ]
    }
  },
  computed: {
    ...mapState('user',
      { user: state => state.user }
    )
  },
  methods: {
    ...mapActions('tasks', ['CREATE_TASK']),
    createTask (e) {
      e.preventDefault()

      this.CREATE_TASK({ name: this.taskName, completed: false })

      // 入力をクリア
      this.taskName = null
    }
  }
}
</script>
