<template>
  <v-app-bar
    fixed
    dark
  >
    <v-btn icon @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon>mdi-arrow-left</v-icon>
      </template>
      <template v-else>
        <v-icon>mdi-menu</v-icon>
      </template>
    </v-btn>
    <router-link to="/home">
      <v-toolbar-title>Remenu</v-toolbar-title>
    </router-link>
    <v-spacer />
    <v-btn @click="clickLang">{{ lang }}</v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState('layout',
      { drawer: state => state.drawer }
    ),
    DRAWER_STATE: {
      get () {
        return this.drawer
      }
    },
    lang () {
      if (this.$i18n.locale === 'en-US') {
        return '日本語'
      } else {
        return 'English'
      }
    }
  },
  methods: {
    ...mapActions('layout', ['TOGGLE_DRAWER']),
    clickLang () {
      // 言語変更
      if (this.$i18n.locale === 'en-US') {
        this.$i18n.locale = 'ja-JP'
      } else {
        this.$i18n.locale = 'en-US'
      }
    }
  }
}
</script>
