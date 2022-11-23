<script>
import GpaRow from './components/GpaRow.vue'
export default {
    components: {
        GpaRow
    },
    data() {
        return {
            h1c: "h1",
            courses: [
                { name: 'Math', code: '4.0' },
                { name: 'Science', code: '3.5' },
                { name: 'English', code: '3.0' }
            ],
            stats: [{
                selectedCity: null,
                grade: null,
                gpa: null,
            },
            {
                selectedCity: null,
                grade: null,
                gpa: null,
            }
            ]
        }
    }
}
</script>
<template>
    <h1 :class="h1c">GPA Site</h1>
    <div v-for="stat in stats">
        <GpaRow :courses=courses />
    </div>
</template>

<style>
    .h1 {
        color: green;
    }
</style>