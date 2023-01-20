<script>
import GpaRow from './components/GpaRow.vue'
export default {
    components: {
        GpaRow
    },
    data() {
        return {
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
    <div v-for="stat in stats">
        <GpaRow :courses=courses @gpaCount="gpaCount"/>
    </div>
</template>