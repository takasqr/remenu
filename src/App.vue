<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
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
        // storeにuserを入れる
        this.USER(user)

        // ログインしていてかつ、 /signin 、 /signup 、 / だったら
        if (this.$route.path === '/signin' || this.$route.path === '/signup' || this.$route.path === '/') {
          this.$router.push({ path: '/home' })
        }
      } else {
        // storeのuserを削除
        this.USER(null)
        // ログインしていなくてかつ、 /signin 、 /signup どちらでもなかったら /signin へリダイレクト
        if (this.$route.path !== '/signin' && this.$route.path !== '/signup') {
          this.$router.push({ path: '/signup' })
        }
      }
    })
  },
  methods: {
    ...mapActions('user', ['USER'])
  }
};
</script>
