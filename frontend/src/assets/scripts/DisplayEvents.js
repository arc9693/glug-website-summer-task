import Events from '@/services/Events'

export default {
  data () {
    return {
      visible: false,
      events: []
    }
  },
  methods: {
    fetchData: async function () {
      try {
        this.events = (await Events.getEvents()).data
      } catch (e) {
        console.log(e.message)
      }
    }
  },
  created () {
    this.fetchData()
  }
}
