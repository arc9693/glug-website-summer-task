import Api from './Api'

export default {

  getEvents () {
    return Api().get('api/events/')
  }

}
