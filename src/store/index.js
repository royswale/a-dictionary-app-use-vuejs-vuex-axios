import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // json array of wordData
    words: []
  },
  getters: {
    wordsCount (state) {
      return state.words.length
    },
    lastWordData (state, getters) {
      return getters.wordsCount ? state.words[getters.wordsCount - 1] : ''
    },
    getWordDataByWord: (state) => (word) => {
      return state.words.find(w => w.headword === word)
    }
  },
  mutations: {
    // add wordData
    addWord (state, wordData) {
      if (state.words.filter(w => w.headword === wordData.headword).length === 0) {
        state.words.push(wordData)
      }
    },
    // delete word
    deleteWord (state, word) {
      state.words = state.words.filter(w => w.headword !== word)
    }
  },
  actions: {

  }
})
