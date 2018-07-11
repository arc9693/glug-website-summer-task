import Api from './Api'
import axios from 'axios'

export default {

  getPosts () {
    return Api().get('blog/posts/')
  },
  getEachPost (id) {
    return Api().get(`blog/posts/${id}`)
  },
  postComment (data) {
    return axios.post('https://sdxblog.ml/blog/comments/', data, {
      headers: {
        'Authorization': 'Token ' + process.env.AUTH_TOKEN
      }
    })
  }

}
