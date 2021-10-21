import Cookie from 'js-cookie'
import Api from './Api'

export default {
  getCookie(reset) {
    if (reset) {
      return Api.get('/csrf-cookie')
    }
    const _token = Cookie.get('XSRF-TOKEN')
    if (_token) {
      return new Promise((resolve) => {
        resolve(_token)
      })
    }else{
      return Api.get('/csrf-cookie')
    }
  },
}
