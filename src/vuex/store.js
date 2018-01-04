import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  count: 20,
  name: 'gongzhijie',
  loginStatus: false,
  backgroundColor: 'rgba(0, 0, 0, 0.60)'
}

const getters = {
  count: state => {
    return (state.count += 100)
  }
}

const mutations = {
  loginSuccess (state) {
    state.loginStatus = true
  },
  add (state) {
    state.count += 1
  },
  reduce (state) {
    state.count -= 1
  },
  changeName (state) {
    if (state.name === 'gongzhijie') {
      state.name = 'gongzhirong'
    } else {
      state.name = 'gongzhijie'
    }
  }
}

const actions = {
  addAction (context) {
    context.commit('add')
  },
  reduceAction ({commit}) {
    commit('reduce')
  },
  loginSuccess (context) {
    context.commit('loginSuccess')
  }
}

Vue.use(Vuex)

const publicInfo = {state, getters, mutations, actions}

export default new Vuex.Store({
  modules: {publicInfo: publicInfo}
})
