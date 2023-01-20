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
                { name: 'Math', multiplier: '1.0' },
                { name: 'Science', multiplier: '1.1' },
                { name: 'English', multiplier: '1.2' }
            ],
            stats: [{
                selectedCourse: null,
                grade: null,
                gpa: null,
            },
            {
                selectedCourse: null,
                grade: null,
                gpa: null,
            }
            ],
            totalGpa: 0
        }
    },
    methods: {
        gpaCount(gpa){
            alert(this.totalGpa+=gpa)
        }
    }
}
</script>
<template>
    <h1 :class="h1c">GPA Site</h1>
    <div v-for="stat in stats">
        <GpaRow :courses=courses @gpaCount="gpaCount"/>
    </div>
</template>

<style>
    .h1 {
        color: green;
    }
</style>