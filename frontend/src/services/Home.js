import Api from './Api'

export default {

  getAbout () {
    return Api().get('api/about/')
  },
  getContacts () {
    return Api().get('api/contacts/')
  }

}
