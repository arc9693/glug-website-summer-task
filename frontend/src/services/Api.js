import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://165.227.229.27:4550/`
  })
}
