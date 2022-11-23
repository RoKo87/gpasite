<script>
import ButtonVK from './components/Button.vue'
export default {
    data() {
        return {
            name: "iphone14",
            h1c: "h1",
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
    components: {
        ButtonVK
    }
}
</script>
<template>
    <h1 :class="h1c"> GPA Calculator </h1>
    <!-- <ButtonVK title="Vamsee" />
    <ButtonVK />
    <Button label = "Save" class="p-button-secondary"></Button>
    <h1>Hello this is {{name}}</h1> -->
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
    <div class="grid">
        <div class="col-6">
        <Dropdown v-model="selectedCity" :options="courses" optionLabel="name" placeholder="Select a Course" />
        </div>
        <div class="col-3">
            <input />
        </div>
        <div class="col-3">
            <input />
        </div>
    </div>
</template>

<style>
.h1 {
    color: green;
}
</style>