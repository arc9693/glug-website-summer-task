
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import store from '@/store/store.js'
import {quillEditor} from 'vue-quill-editor'
export default {
  components: {
    quillEditor
  },
  props: ['comments'],
  data () {
    return {
      content: null,

      editorOption: {
        modules: {
          toolbar: {
            container: '#toolbar'}

        },
        placeholder: 'Compose an epic...'
      }

    }
  },
  computed: {
    src () {
      return this.$store.state.user.image || 'https://d30y9cdsu7xlg0.cloudfront.net/png/17241-200.png'
    },
    name () {
      return this.$store.state.user.name || ''
    },
    show () {
      return store.state.status === 'connected'
    }
  },

  methods: {
    onEditorChange ({ quill, html, text }) {
      this.content = html
    },
    Addcomment () {
      this.comments.push({ avatar: this.src, title: this.name, subtitle: this.content })
      this.content = null
    },
    login () {
      /* eslint-disable */

      FB.login(function (response) {
        if(response.status==='connected')
        {
          store.commit('updateStatus', response.status)
          FB.api('/me', function (response) {
            store.commit('Adduser', {image: 'http://graph.facebook.com/' + response.id + '/picture', name: response.name})
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
