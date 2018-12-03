<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <WordInput msg="Add Word" />
  </div>
</template>

<script>
// @ is an alias to /src
import WordInput from '@/components/WordInput.vue'

export default {
  name: 'home',
  components: {
    WordInput
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
}
</style>
