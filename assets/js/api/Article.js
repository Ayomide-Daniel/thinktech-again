import Api from './Api'
import Csrf from './Csrf'

export default {
  async getTrending() {
    await Csrf.getCookie()
    return Api.get('/articles/trending')
  },
  async getArticles() {
    await Csrf.getCookie()
    return Api.get('/articles')
  },
  async getAuthor(data) {
    await Csrf.getCookie()
    return Api.get(
      `/articles/author?filter_by=${data.filter_by}&q=${data.q}`
    )  },
  async getTag(tag) {
    await Csrf.getCookie()
    return Api.get('/articles/tag/' + tag)
  },
  async getTitle(title) {
    await Csrf.getCookie()
    return Api.get('/articles/' + title)
  },
}
