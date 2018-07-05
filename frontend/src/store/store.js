import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  strict: true,

  state: {
    status: 'notconnected',
    user: {
      image: false,
      name: false
    }
  },
  mutations: {
    updateStatus (state, Status) {
      state.status = Status
    },
    Adduser (state, info) {
      state.user = info
    }
  }

})
