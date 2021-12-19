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
            v-model="habitName"
            :rules="habitNameRules"
            :label="this.$t('message.input_new_habit')"
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
      habitName: null,
      valid: true,
      habitNameRules: [
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
    ...mapActions('habits', ['CREATE_HABIT']),
    createTask (e) {
      e.preventDefault()

      this.CREATE_HABIT({ uid: this.user.uid ,name: this.habitName, deleted: false })

      // 入力をクリア
      this.habitName = null
    }
  }
}
</script>
