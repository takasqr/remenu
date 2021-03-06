import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../components/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: layout,
    children: [
      {
        path: '/signin',
        name: 'SignInPage',
        component: () => import(/* webpackChunkName: "sign" */ '../components/page/SignInPage.vue')
      },
      {
        path: '/signup',
        name: 'SignUpPage',
        component: () => import(/* webpackChunkName: "sign" */ '../components/page/SignUpPage.vue')
      },
      {
        path: '/home',
        name: 'HomePage',
        component: () => import(/* webpackChunkName: "main" */ '../components/page/HomePage.vue')
      },
      {
        path: '/setting',
        name: 'SettingPage',
        component: () => import(/* webpackChunkName: "main" */ '../components/page/SettingPage.vue')
      },
      {
        path: '/task/:taskId',
        name: 'TaskDetailPage',
        component: () => import(/* webpackChunkName: "main" */ '../components/page/TaskDetailPage.vue')
      },
      {
        path: '/habit',
        name: 'HabitPage',
        component: () => import(/* webpackChunkName: "main" */ '../components/page/HabitPage.vue')
      },
      {
        path: '/habit/:habitId',
        name: 'HabitDetailPage',
        component: () => import(/* webpackChunkName: "main" */ '../components/page/HabitDetailPage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
