<script>
import child from "./compy.vue"
let l = 0


export default {
  data() {
    return {
      atypec: 'atype',
      red: 'red',
      count: 0,
      cuote: '',
      condo: true,
      lissy: [],
      yoform: "kiddo ona block",
      wkidsay: "Wachu seih?"
    }
  },
  methods: {
      addboi() {
          this.count++
      },
      copycat(e) {
          this.cuote = e.target.value
      },
      toggy() {
        this.condo = !this.condo
      },
      moreLiss() {
        this.lissy.push({ id: l++, says: this.cuote})  
      }
  },
  components: {
    child
  },
  mounted() {
    this.$refs.banana.textContent = 'banana!'
  }
}
</script>

<template>
  <h1 :class="atypec">I'm color</h1>
  <button @click="addboi">Yu {{count}} geclicken </button>
  <form @submit.prevent="moreLiss">
    <input v-model="cuote">
    <button>Add</button>
  </form>
  <ul>
      <li v-for="ite in lissy" :key="ite.id" :class="red">
      {{ite.says}}
      </li>
  </ul> 
  <p :class="red" v-if="condo">{{ cuote }}</p>
  <p :class="atypec" ref="banana">cuote</p>
  <button @click="toggy">toggle</button>
  <h1 :class="atypec" v-if="condo">ISA KREESMES! :)</h1>
  <h1 :class="red" v-else>EZNO KREESMES :(</h1>
  <child :txtop="yoform" @response="(msg) => wkidsay = msg" />
  <p :class="red">{{ wkidsay }}</p>
  
  <child>{{wkidsay}}</child>
</template>

<style>
.atype {
  color: green;
}
.red {
    color: red;
}
</style>