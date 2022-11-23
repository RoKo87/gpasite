<script>
export default{
    props:{

    },
    data() {
        return {
            name: "iphone14",
            selectedCity: null,
		    courses: [
                {name: 'Math', code: '4.0'},
                {name: 'Science', code: '3.5'},
                {name: 'English', code: '3.0'}
		    ],
            grade: null,
            gpa: null,
        };
    },
    watch: {
        selectedCity(){
            alert(this.selectedCity.name);
        },
        grade(){
            this.gpa = this.selectedCity.code * this.grade
        }
    },
}
</script>
<template>
    <div class="grid">
        <div class="col-6">
        <Dropdown v-model="selectedCity" :options="courses" optionLabel="name" placeholder="Select a Course" />
        </div>
        <div class="col-3">
            <input v-model="grade"/>
        </div>
        <div class="col-3">
            <input v-model="gpa"/>
        </div>
    </div>
</template>