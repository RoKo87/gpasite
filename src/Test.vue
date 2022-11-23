<script>
import GpaRow from './components/GpaRow.vue'
export default {
    components: {
        GpaRow
    }
}
</script>
<template>
<div v-for="n in 5">
    <GpaRow />
</div>
</template>