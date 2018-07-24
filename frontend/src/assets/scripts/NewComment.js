import store from '@/store/store.js'
import Blog from '@/services/Blog'
export default {

  props: ['postID', 'addComment'],
  data () {
    return {
      content: null
    }
  },
  computed: {
    src () {
      return this.$store.state.user.image || 'https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png'
    },
    name () {
      return this.$store.state.user.name || ''
    },
    id () {
      return this.$store.state.user.id || null
    },
    show () {
      return store.state.status === 'connected'
    }
  },

  methods: {
    async Addcomment () {
      try {
        await Blog.postComment({
          user_social_id: this.id,
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
    login () {
      /* eslint-disable */

      FB.login(function (response) {
        if(response.status==='connected')
        {
          store.commit('updateStatus', response.status)
          FB.api('/me', function (response) {
            store.commit('Adduser', {image: 'http://graph.facebook.com/' + response.id + '/picture', name: response.name ,id: response.id})

          })
        }
        else console.log('Authorisation denied');
      }, {
        scope: '',
        return_scopes: true
      },
      { auth_type: 'reauthenticate' })
    },
    logout () {
      FB.logout(function (response) {
        store.commit('updateStatus', response.status)
        store.commit('Adduser', {image: false, name: false})
      })
    }
  /* eslint-enable */
  }
}
