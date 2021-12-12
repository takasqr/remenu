import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout'
import user from './user'
import tasks from './tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout,
    user,
    tasks
  }
})
