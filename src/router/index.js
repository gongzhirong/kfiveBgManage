import Vue from 'vue'
import Router from 'vue-router'
import Authentication from '@/app/authentication'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'authentication',
      component: Authentication
    }
  ]
})
