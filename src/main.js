// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUi from 'element-ui'
import myPlugin from './myPlugin'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)
Vue.config.productionTip = false

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.directive('focus', {
  inserted (el) {
    el.focus()
  }
})
// 插入我的插件
Vue.use(myPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
