<template>
  <v-text-field
    :rules="taskNameRules"
    :label="this.$t('message.input_new_task')"
    required
    :value="taskName"
    @input="sendData"
    validate-on-blur
    clearable
  />
</template>

<script>
export default {
  props: {
    taskName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      taskNameRules: [
        v => !!v || this.$t('message.input_error_require'),
        v => (v && v.length <= 50) || '50文字以内で入力してください。'
      ]
    }
  },
  methods: {
    sendData: function (e) {
      this.$emit('update:taskName', e)
    }
  }
}
</script>
