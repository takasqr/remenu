<template>
  <div>
    <v-card rounded="lg">
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit="addTask"
        >
          <v-text-field
            v-model="inputTask"
            :rules="inputTaskRules"
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
export default {
  data () {
    return {
      inputTask: null,
      valid: true,
      inputTaskRules: [
        v => !!v || this.$t('message.input_error_require'),
        v => (v && v.length <= 50) || '50文字以内で入力してください。'
      ]
    }
  },
  methods: {
    addTask (e) {
      e.preventDefault()
    }
  }
}
</script>
