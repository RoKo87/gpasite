<script>
export default {
  data() {
    return {
      message: 'Yo g wagood.',
      attrib: 'rubii',
      count: 0,
      textput: '',
      conding: true
    }
  },
  methods: {
      increment() {
          this.count++
      },
      toggle() {
        this.conding = !this.conding
    }
  }
}
</script>

<template>
  <h1 :class="attrib">{{ message }}</h1>
  <button @click="increment">count is: {{ count }}</button>
  <input v-model="textput" placeholder="bruh type on me pls">
  <p :class="attrib">{{ textput }}</p>
  <button @click="toggle">the togg</button>
  <h2 v-if="conding" :class="attrib">Man we bussin!</h2>
  <h2 v-else :class="attrib">Man we cappin!</h2>
</template>

<style>
.rubii {
    color: red;
}
.yee {
    color: yellow;
}
</style>