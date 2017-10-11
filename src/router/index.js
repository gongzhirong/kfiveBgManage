import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/app/HelloWorld'
import VuexTest from '@/app/test_vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/vux_test',
      name: 'vux_test',
      component: VuexTest
    }
  ]
})
