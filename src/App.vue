<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import initializeApp from '@/js/firebase.js'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'App',
  created: function () {
    // firebaseを初期化
    initializeApp()

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // ログインしていてかつ、 /signin 、 /signup 、 / だったら
        if (this.$route.path === '/signin' || this.$route.path === '/signup' || this.$route.path === '/') {
          this.$router.push({ path: '/home' })
        }
      } else {
        // ログインしていなくてかつ、 /signin 、 /signup どちらでもなかったら /signin へリダイレクト
        if (this.$route.path !== '/signin' && this.$route.path !== '/signup') {
          this.$router.push({ path: '/signup' })
        }
      }
    })
  }
};
</script>
