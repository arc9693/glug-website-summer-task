export default {
  name: 'Pageheader',
  data () {
    return {
      drawer: null,
      isActive: true
    }
  },
  methods: {
    navigateTo (routes) {
      if (this.$route.name === routes.name) location.reload()
      else {
        this.$router.push(routes)
        window.pageYOffset = 0
      }
    },
    onScroll (e) {
      var count = window.pageYOffset || document.documentElement.scrollTop
      if (count > 300) { this.isActive = false } else this.isActive = true
    }
  }
}
