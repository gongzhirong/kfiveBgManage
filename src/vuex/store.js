import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  count: 20,
  name: 'gongzhijie'
}

const getters = {
  count: state => {
    return (state.count += 100)
  }
}

const mutations = {
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
  }
}

Vue.use(Vuex)

const moduleA = {state, getters, mutations, actions}

export default new Vuex.Store({
  modules: {commonInfo: moduleA}
})
