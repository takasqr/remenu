<template>
  <v-text-field
    outlined
    :rules="emailAddressRules"
    :label="this.$t('message.input_emailAddress')"
    required
    :value="emailAddress"
    @input="sendData"
  >
  </v-text-field>
</template>

<script>
export default {
  props: {
    emailAddress: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      emailAddressRules: [
        v => !!v || this.$t('message.input_error_require'),
        v => (v && v.length <= 100) || this.$t('message.input_error_count', { num: '100' }),
        v => /.+@.+/.test(v) || this.$t('message.input_error_email_valid')
      ]
    }
  },
  methods: {
    sendData: function (e) {
      this.$emit('update:emailAddress', e)
    }
  }
}
</script>
