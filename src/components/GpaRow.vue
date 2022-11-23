<script>
import { stringifyStyle } from '@vue/shared';

export default {
    props: {
        courses: Array
    },
    data() {
        return {
            selectedCity: null,
            grade: null,
            gpa: null,
        };
    },
    watch: {
        selectedCity() {
            alert(this.selectedCity.name);
        },
        grade() {
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
            <input v-model="grade" />
        </div>
        <div class="col-3">
            <input v-model="gpa" />
        </div>
    </div>
</template>