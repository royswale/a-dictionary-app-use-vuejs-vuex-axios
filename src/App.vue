<template>
  <div id="app">
    <div id="header-nav" class="nav-bars">
      <router-link :to="{ name: 'home' }">Home</router-link>|
      <router-link v-bind:to="{ name: 'wordlist' }">Words</router-link>|
      <router-link v-if="lastWordData" :to="{ name: 'word', params: { word: lastWordData.headword } }">{{ lastWordData.headword }}</router-link>
    </div>

    <router-view/>

    <div id="footer-nav" class="nav-bars">
      My Dictionary 2018 - {{ wordsCount }} words has been added.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'wordsCount',
      'lastWordData'
    ])
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .nav-bars {
    background: cornflowerblue;
    position: fixed;
    width: 100%;
    padding: 10px;
    color: white;

    a {
      color: white;
      text-decoration: none;
    }
  }

  #header-nav {
    top: 0;
    left: 0;
  }

  #footer-nav {
    bottom: 0;
    left: 0;
  }
}
</style>
