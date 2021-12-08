<template>
  <v-app>
    <Header v-if="isLogin" />
    <Sidebar v-if="isLogin" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'

import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  components:
    {
      Header,
      Sidebar
    },
  data () {
    return {
      isLogin: false
    }
  },
  created: function () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // ログインしていたら
        this.isLogin = true
      } else {
        // ログインしていなかったら
        this.isLogin = false
      }
    })
  }
}
</script>
