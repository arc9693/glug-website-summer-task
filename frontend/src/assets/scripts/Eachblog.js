import Blog from '@/services/Blog'
export default {
  components: {
    'comment': () => import('@/components/NewComment')
  },
  data: () => ({
    post: '',
    items: [
      { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Archana', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },

      { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Ranvir', subtitle: "&mdash; Wish I could come, but I'm out of town this weekend." },

      { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Oui oui', subtitle: ' &mdash; Do you have Paris recommendations? Have you e Paris recommendations? Have you eve Paris recommendations? Have you ever beeDo you have Paris recommenDo you have Paris recommendations? Hr beeDo you have Paris recommenDo you have Paris recommendations? Her beeDo you have Paris recommenDo you have Paris recommendations? Have you ever beedations? Have you ever been?' },

      { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Blah', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },

      { avatar: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg', title: 'Arnav', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
    ],
    commentShow: false
  }),
  async created () {
    try {
      var id = this.$store.state.route.params.id
      this.post = (await Blog.getEachPost(id)).data
      // console.log('IT IS THIS POST',this.post);
    } catch (e) {
      console.log(e.message)
    }
  }
}
