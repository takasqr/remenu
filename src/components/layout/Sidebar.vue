<template>
  <v-navigation-drawer
    app
    v-model="DRAWER_STATE"
  >
    <v-list>
      <template v-for="(item, i) in items">
        <v-divider
          v-if="item.divider"
          :key="i"
        ></v-divider>
        <v-list-item
          v-else
          :key="i"
          :to="item.link === '#' ? '' : item.link"
          @click="item.action ? item.action() : null"
        >
          <v-list-item-action>
            <v-icon
            >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  computed: {
    ...mapState('layout', {
      drawer: state => state.drawer
    }),
    DRAWER_STATE: {
      get () {
        return this.drawer
      },
      set (newValue) {
        if (newValue === this.drawer) return
        this.TOGGLE_DRAWER()
      }
    },
    items () {
      return [
        { title: this.$t('message.home'), icon: 'mdi-home', link: '/home' },
        { title: this.$t('message.habit'), icon: 'mdi-home', link: '/habit' },
        { title: this.$t('message.setting'), icon: 'mdi-account-circle-outline', link: '/setting' },
        { divider: true },
        { title: 'LOGOUT', icon: 'mdi-exit-to-app', action: () => this.signOut() }
      ]
    }
  },
  methods: {
    ...mapActions('layout', ['TOGGLE_DRAWER']),
    signOut: function () {
      // Firebase ログアウト処理
      firebase.auth().signOut()

      //リダイレクト処理はApp.vue
    }
  }
}
</script>
