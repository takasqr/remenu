<template>
  <v-text-field
    outlined
    :rules="passwordRules"
    :label="this.$t('message.input_password')"
    :type="show ? 'text' : 'password'"
    required
    :value="password"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    @input="sendData"
    @click:append="show = !show"
  >
  </v-text-field>
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      passwordRules: [
        v => !!v || this.$t('message.input_error_require'),
        v => (v && v.length <= 100) || this.$t('message.input_error_count', { num: '100' })
      ],
      show: false
    }
  },
  methods: {
    sendData: function (e) {
      this.$emit('update:password', e)
    }
  }
}
</script>
