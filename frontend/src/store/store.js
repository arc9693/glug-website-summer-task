
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.use(VueAuthenticate, {
  baseUrl: 'https://shrouded-retreat-61828.herokuapp.com/',

  providers: {
    facebook: {
      clientId: '1061104010703625',
      redirectUri: 'http://localhost:8080/'
    },
    google: {
      clientId: '622509555987-lu43jugeio9ar8bbm0osc4d110mfbrue.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8080/'
    },
    github: {
      clientId: 'de43051b347de9597c5f',
      redirectUri: 'http://localhost:8080/'
    }
  }
})

export default new Vuex.Store({

  strict: true,
  state: {
    user: {
      name: '',
      avatar: 'https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png'
    }
  },
  mutations: {
    UpdateUser (state, payload) {
      state.user.name = payload.name
      state.user.avatar = payload.avatar
    }
  }

})
