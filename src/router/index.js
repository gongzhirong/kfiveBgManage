import Vue from 'vue'
import Router from 'vue-router'
import Authentication from '@/app/authentication'
import MainPage from '@/app/mainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'authentication',
      component: Authentication
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: MainPage
    }
  ]
})
