// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import {sync} from 'vuex-router-sync'
var SocialSharing = require('vue-social-sharing')

Vue.use(SocialSharing)

sync(store, router)

Vue.config.productionTip = false
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created () {
    /* eslint-disable */
    window.fbAsyncInit = function () {
      
      FB.init({
        appId: process.env.APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v3.0'
      })

      FB.getLoginStatus(function (response) {
        store.commit('updateStatus', response.status)
        if (store.state.status === 'connected') {
          FB.api('/me', function (response) {
            store.commit('Adduser', {image: 'http://graph.facebook.com/' + response.id + '/picture', name: response.name})
          })
        }
      })
    };

    (function (d, s, id) {
      var js; var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return }
      js = d.createElement(s); js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
    /* eslint-enable */
  },
  template: '<App/>'
})
