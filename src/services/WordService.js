import Api from '@/services/Api'

export default {
  getWord (params) {
    // TODO:
    // 自己扩展课程，获取多条解释
    // 多条解释的展示 和 存储
    return Api().get('/v2/dictionaries/wordwise/entries?limit=1&headword=' + params.word)
  },
  getWordDetails (params) {
    return Api().get(params.url)
  }
}
