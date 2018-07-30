import Blog from '@/services/Blog'
export default {

  props: ['postID', 'addComment'],
  data () {
    return {
      content: null,
      show: this.$auth.isAuthenticated()
    }
  },
  computed: {
    src () {
      return this.$store.state.user.avatar
    },
    name () {
      return this.$store.state.user.name
    }
  },

  methods: {
    async Addcomment () {
      try {
        await Blog.postComment({
          user_social_name: this.name,
          data: this.content,
          parent_id: 0,
          post: this.postID})
        this.addComment()
      } catch (e) {
        console.log(e)
      }
      this.content = null
    },
    authLogout: function () {
      this.$auth.logout().then(() => {
        if (!this.$auth.isAuthenticated()) {
          this.show = this.$auth.isAuthenticated()
          this.response = null
          this.$store.commit('UpdateUser', { name: '', avatar: 'https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png' })
        }
      })
    },
    auth: function (provider) {
      if (this.$auth.isAuthenticated()) {
        this.$auth.logout()
      }

      this.response = null

      var this_ = this
      this.$auth.authenticate(provider).then(function (authResponse) {
        this_.show = this_.$auth.isAuthenticated()
        if (provider === 'github') {
          this_.$http.get('https://api.github.com/user').then(function (response) {
            this_.response = response
            this_.$store.commit('UpdateUser', {name: response.data.name, avatar: response.data.avatar_url})
          })
        } else if (provider === 'facebook') {
          console.log(this_.$auth.isAuthenticated())
          this_.$http.get('https://graph.facebook.com/v2.5/me', {
            params: { access_token: this_.$auth.getToken() }
          }).then(function (response) {
            this_.response = response
            console.log(this_.$auth.getPayload())
            this_.$store.commit('UpdateUser', {name: response.data.name, avatar: 'http://graph.facebook.com/' + response.data.id + '/picture'})
          })
        } else if (provider === 'google') {
          this_.$http.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect').then(function (response) {
            this_.response = response
            this_.$store.commit('UpdateUser', {name: response.data.name, avatar: response.data.picture})
          })
        }
      }).catch(function (err) {
        this_.response = err
        console.log(err)
      })
    }
  },
  created () {
    console.log(this.response)
  //  console.log({'name': this.response.data.name, 'avatar': this.response.data.picture || this.response.data.avatar_url || 'http://graph.facebook.com/' + this.response.data.id + '/picture'})
  //  if (this.$auth.isAuthenticated()) { this.$store.commit('UpdateUser', {name: this.response.data.name, avatar: this.response.data.picture || this.response.data.avatar_url || 'http://graph.facebook.com/' + this.response.data.id + '/picture'}) }
  }
  /* eslint-enable */

}
