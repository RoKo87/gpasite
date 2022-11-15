<script>
import ButtonVK from './components/Button.vue'
export default {
    data() {
        return {
            name: "iphone14",
            selectedCity: null,
		    courses: [
                {name: 'Math', gpa: '4.0'},
                {name: 'Science', code: '3.5'},
                {name: 'English', code: '3.0'}
		    ]
        };
    },
    watch: {
        selectedCity(){
            alert(this.selectedCity.name);
        }
    },
    components: {
        ButtonVK
    }
}
</script>
<template>
    <ButtonVK title="Vamsee" />
    <ButtonVK />
    <Button label = "Save" class="p-button-secondary"></Button>
    <h1>Hello this is {{name}}</h1>
    <Dropdown v-model="selectedCity" :options="courses" optionLabel="name" placeholder="Select a Course" />
</template>