import Blog from '@/services/Blog'
export default {
  components: {
    'comment': () => import('@/components/NewComment')
  },
  data: () => ({
    post: '',
    items: null,
    commentShow: false
  }),
  methods: {
    findAvatar (id) {
      return 'http://graph.facebook.com/' + id + '/picture'
    },
    async getComments () {
      try {
        this.post = (await Blog.getEachPost(this.postID)).data
        this.items = this.post.comments
      } catch (e) {
        console.log(e.message)
        this.$router.push({name: 'errorPage'})
      }
    }

  },
  created () {
    this.getComments()
  },
  computed: {
    postID () {
      return this.$store.state.route.params.id
    }
  }
}
