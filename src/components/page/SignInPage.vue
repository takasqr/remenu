<template>
  <v-container>
    <div>
      <h2>{{ $t('message.signin_title') }}</h2>
    </div>

    <v-card>
      <v-card-title>
        <v-divider></v-divider>
        <div>{{ $t('message.signin_sub') }}</div>
        <v-divider></v-divider>
      </v-card-title>
      <v-card-text>
        <SignInForm />

        <div>
          <v-responsive>
            <div>
              {{ $t('message.agree') }}
            </div>
            <div>
              <router-link to="#">{{ $t('message.terms') }}</router-link> &amp; <router-link to="#">{{ $t('message.privacy') }}</router-link>
            </div>
            <div>
              <router-link to="signup">{{ $t('message.signup_sub') }}</router-link>
            </div>
          </v-responsive>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import SignInForm from '@/components/component/SignInForm.vue'

export default {
  components: {
    SignInForm,
  }
}
</script>
