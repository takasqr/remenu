<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="SignIn"
  >
    <InputEmailAddress v-bind:emailAddress.sync="emailAddress" />
    <InputPassword v-bind:password.sync="password" />
    <v-btn type="submit" block :disabled="!valid" x-large>{{ $t('message.signin_button') }}</v-btn>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

import InputEmailAddress from '@/components/basic/input/InputEmailAddress.vue'
import InputPassword from '@/components/basic/input/InputPassword.vue'

export default {
  data () {
    return {
      emailAddress: '',
      password: '',
      valid: false
    }
  },
  components: {
    InputEmailAddress,
    InputPassword
  },
  methods: {
    SignIn: function () {
      try {
        // バリデーションチェック
        if (this.$refs.form.validate()) {
          firebase.auth().signInWithEmailAndPassword(this.emailAddress, this.password)
            .then(() => {
              // App.vueのcreatedでリダイレクト
            })
            .catch(() => {
              alert(this.$t('message.alert_auth_error'))
            })
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
