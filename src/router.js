import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import WordList from './views/WordList.vue'
import Word from './views/Word.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/words',
      name: 'wordlist',
      component: WordList
    },
    {
      path: '/words/word/:id',
      name: 'word',
      component: Word
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
