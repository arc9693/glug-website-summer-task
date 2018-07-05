import filter from 'lodash/filter'
import orderBy from 'lodash/orderBy'
import Blog from '@/services/Blog'

export default {
  name: 'HelloWorld',
  components:
  {
    'post': () => import('@/components/post'),
    'Recentpost': () => import('@/components/Recentpost')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: [],
      options: [{text: 'Recent', value: ['date_to_show', 'desc']},
        {text: 'Older', value: ['date_to_show', 'asc']},
        {text: 'A-Z', value: ['title', 'asc']},
        {text: 'Z-A', value: ['title', 'desc']}
      ],
      sortQuery: ['date_to_show', 'asc'],
      filter: ''
    }
  },
  computed: {
    PostsSorted: function () {
      return orderBy(this.posts, [this.sortQuery[0]], [this.sortQuery[1]])
    },
    RecentPosts: function () {
      return (filter(this.posts, function (o) {
        var oneDay = 1000 * 60 * 60 * 24
        var date1Ms = new Date().getTime()
        var date2Ms = new Date(o.date_to_show).getTime()
        var differenceMs = date1Ms - date2Ms
        return (differenceMs / oneDay <= 31)
      }))
    }
  },
  async created () {
    try {
      this.posts = (await Blog.getPosts()).data
    } catch (e) {
      console.log(e.message)
    }
  }

}
