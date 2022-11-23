<script>
export default {
  data() {
    return {
      azool: "azul"
    }
  },
  methods: {
      toggy() {
        this.condo = !this.condo
      }
  },
  props: {
    txtop: String
  },
  emits: ['response'],
  created () {
    this.$emit('response', 'ayo wassup g')
  }     
}
</script>

<template>
  <h2 :class="azool">{{ txtop || "wut? " }}</h2>
  <slot>E</slot>
</template>

<style>
.azul {
  color: blue;
}  
</style>