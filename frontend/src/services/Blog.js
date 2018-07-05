import Api from './Api'

export default {

  getPosts () {
    return Api().get('blog/posts/')
  },
  getEachPost (id) {
    return Api().get(`blog/posts/${id}`)
  }
}
