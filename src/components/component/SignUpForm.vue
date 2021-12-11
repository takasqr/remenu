<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <InputEmailAddress v-model="emailAddress" />
    <InputPassword v-model="password" />
    <v-btn block :disabled="!valid" x-large @click="SignUp">{{ $t('message.signup_button') }}</v-btn>
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
    SignUp: function () {
      try {
        // バリデーションチェック
        if (this.$refs.form.validate()) {
          firebase.auth().createUserWithEmailAndPassword(this.emailAddress, this.password)
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
