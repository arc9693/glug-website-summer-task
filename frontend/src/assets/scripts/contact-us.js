import Home from '@/services/Home'
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 15) || 'Name must be less than 15 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    messageRules: [
      v => !!v || 'Please type in a message',
      v => (v && v.length >= 10) || 'Message must be greater than 10 characters'
    ],
    contacts: [{name: 'Narendra modi', post: 'President', phone: 'XXXXXXX', email: 'xxx@gmail.com'}]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  async created () {
    try { this.contacts = (await Home.getContacts()).data } catch (e) { console.log(e.message) }
  }

}
