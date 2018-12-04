<template>
  <div class="input-container">
    <div class="input-group">
      <input type="text" v-model="word" v-on:keydown.enter="getWord">
      <button @click="getWord" type="submit">{{ msg }}</button>
    </div>
    <div class="word-meaning">
      {{ wordMeaning || error }}
      <div class="word-links" v-if="wordData">
        <router-link v-bind:to="{ name: 'word', params: { id: word, word: word, data: wordData } }">Read More</router-link>
        <router-link v-bind:to="{ name: 'wordlist' }">Word List</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import WordService from '@/services/WordService'

export default {
  name: 'WordInput',
  data () {
    return {
      word: '',
      wordData: '',
      error: ''
    }
  },
  computed: {
    wordMeaning () {
      if (this.wordData) {
        return this.wordData.senses[0].definition
      }
      return ''
    }
  },
  methods: {
    async getWord () {
      if (this.word === '') {
        this.error = 'Please enter a word.'
        this.wordData = ''
        return false
      }
      const response = await WordService.getWord({ word: this.word })

      let results = response.data.results

      if (results.length === 0) {
        this.error = 'Your word could not be found and was not added.'
        this.wordData = ''
        return false
      }

      this.wordData = results[0]
      // console.log(response)
      // this.wordData
    //   {
    //   "datasets": [
    //     "wordwise",
    //     "dictionary"
    //   ],
    //   "headword": "outdated",
    //   "id": "cqARDzbb90",
    //   "part_of_speech": "adjective",
    //   "senses": [
    //     {
    //       "definition": "not modern or useful any more",
    //       "examples": [
    //         {
    //           "text": "outdated equipment."
    //         }
    //       ],
    //       "synonym": "out-of-date"
    //     }
    //   ],
    //   "url": "/v2/dictionaries/entries/cqARDzbb90"
    // }
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.input-container {
  max-width: 500px;
  width: 100%;

  .input-group {
    display: flex;
    justify-content: space-between;

    input {
      box-sizing: border-box;
      width: calc(100% - 150px);
      padding: .5rem;
      border: 2px solid cornflowerblue;
      font-size: 1rem;
      border-radius: 0;
      -webkit-appearance: none;
    }

    button {
      width: 150px;
      height: 50px;
      -webkit-appearance: none;
      background: cornflowerblue;
      color: white;
      text-transform: uppercase;
      border: none;
      font-weight: bold;
      font-size: 12pt;
    }
  }

  .word-meaning {
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;

    .word-links {
      margin: 30px 0 20px 0;
      font-size: 14px;

      a {
        border: 1px solid royalblue;
        text-decoration: none;
        padding: 5px 12px 3px 12px;
        margin: 0 10px;
        text-transform: uppercase;

        &:focus {
          color: royalblue;
        }

        &:hover {
          background: royalblue;
          color: white;
        }
      }
    }
  }
}
</style>
