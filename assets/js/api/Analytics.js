import Api from './Api'
import Csrf from './Csrf'

export default {
  async updateViews(formData) {
    await Csrf.getCookie()
    return Api.post('/analytics/update-views', formData)
  },
  async updateVisits(formData) {
    await Csrf.getCookie()
    return Api.post('/analytics/update-visits', formData)
  }
}
