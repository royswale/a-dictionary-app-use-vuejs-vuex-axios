<template>
  <div class="wordlist-container">
    <div class="wordlist-columns">
      <h2>
        {{ word }}
        <span v-if="partOfSpeech">[{{ partOfSpeech }}]</span>
        <br>
        <span v-for="(pronunciation, index) in pronunciations" :key="index">{{ pronunciation.ipa }}</span>
      </h2>
      <div class="word-info">
        <ul class="words" v-if="senses">
          <li v-for="(sense, index) in senses" :key="index">
            <div class="word-definition">
              <h3>Definition #{{ index + 1 }}</h3>
              <blockquote><p>{{ sense.definition }}</p></blockquote>
              <div class="example" v-if="sense.examples">
                <h4>Examples: </h4>
                <ul class="examples">
                  <li v-for="(example, index) in sense.examples" :key="index">
                    {{ example.text }}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-links">
      <router-link v-bind:to="{ name: 'home'}">Home</router-link>
      <router-link v-bind:to="{ name: 'wordlist'}">Word List</router-link>
    </div>
  </div>
</template>

<script>
import WordService from '@/services/WordService'

export default {
  name: 'Word',
  data () {
    return {
      word: this.$route.params.id,
      wordId: this.$route.params.data.id,
      wordURL: this.$route.params.data.url,
      // "url": "/v2/dictionaries/entries/cqARDzbb90"
      partOfSpeech: '',
      senses: '',
      pronunciations: ''
    }
  },
  mounted () {
    this.getWordDetails({ url: this.wordURL })
  },
  methods: {
    async getWordDetails (params) {
      const response = await WordService.getWordDetails(params)
      let data = response.data.result
      this.partOfSpeech = data.part_of_speech
      this.senses = data.senses
      this.pronunciations = data.pronunciations
      // console.log(response)
    }
  }

}
</script>

<style lang="scss" scoped>
.wordlist-container {
  margin-top: 60px;

  .wordlist-columns {
    width: 100%;
    display: flex;
    margin: 0 auto;
    text-align: left;
    align-items: center;

    h2 {
      flex: 0 0 15%;
      margin-top: 10px;
      text-align: center;
    }

    .wordlist {
      overflow: auto;
      flex: 0 0 85%;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: calc(100vh-84px);
        display: flex;
        flex-wrap: wrap;
        margin-left: -10px;
        margin-top: -10px;

        li {
          text-align: center;
          background: cadetblue;
          padding: 10px;
          margin: 5px;
          flex: 1 0 auto;
          box-sizing: border-box;
          padding: 10px;
          margin-left: 10px;
          margin-top: 10px;

          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
  .nav-links {
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 62px;
    left: 0;
    justify-content: space-between;

    a {
      padding: 20px 50px;
      text-align: center;
      background-color: royalblue;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 48%;
      flex: 0 0 48%;
      margin: 0 20px;
      box-sizing: border-box;
      display: block;
      text-decoration: none;
      color: white;
    }
  }
}
</style>
