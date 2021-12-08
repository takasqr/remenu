<template>
  <v-text-field
    outlined
    v-model="emailAddress"
    :rules="emailAddressRules"
    :label="this.$t('message.input_emailAddress')"
    required
    :value="emailAddress"
    @change="sendData"
  >
  </v-text-field>
</template>

<script>
export default {
  model: {
    prop: 'emailAddressProp',
    event: 'inputField'
  },
  props: {
    emailAddressProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      emailAddress: this.emailAddressProp,
      emailAddressRules: [
        v => !!v || this.$t('message.input_error_require'),
        v => (v && v.length <= 100) || this.$t('message.input_error_count', { num: '100' }),
        v => /.+@.+/.test(v) || this.$t('message.input_error_email_valid')
      ]
    }
  },
  methods: {
    sendData: function (e) {
      this.$emit('inputField', e)
    }
  },
  watch: {
    emailAddressProp: {
      handler: function (newValue) {
        this.emailAddress = newValue
      }
    }
  }
}
</script>
