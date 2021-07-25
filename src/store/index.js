import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connect: false,
    modal: false,
  },
  mutations: {
    updateConnect(state, data) {
      state.connect = data
    },
    updateModal(state, data) {
      console.log('ffff', data)
      state.modal = data
    },
  },
  actions: {
  },
  modules: {
  }
})
