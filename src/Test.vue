<script>
import GpaRow from './components/GpaRow.vue'
export default {
    components: {
        GpaRow
    },
    data() {
        return {
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
    <div v-for="stat in stats">
        <GpaRow :courses=courses />
    </div>
</template>