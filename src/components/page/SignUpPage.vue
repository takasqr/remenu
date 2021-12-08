<template>
  <v-container>
    <div>
      <h2>{{ $t('message.signup_title') }}</h2>
    </div>

    <v-card>
      <v-card-title>
        <v-divider></v-divider>
        <div>{{ $t('message.signup_sub') }}</div>
        <v-divider></v-divider>
      </v-card-title>
      <v-card-text>
        <SignUpForm />

        <div>
          <v-responsive>
            <div>
              {{ $t('message.agree') }}
            </div>
            <div>
              <router-link to="#">{{ $t('message.terms') }}</router-link> &amp; <router-link to="#">{{ $t('message.privacy') }}</router-link>
            </div>
            <div>
              <router-link to="signin">{{ $t('message.signin_sub') }}</router-link>
            </div>
          </v-responsive>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import SignUpForm from '@/components/component/SignUpForm.vue'

export default {
  components: {
    SignUpForm
  }
}
</script>
