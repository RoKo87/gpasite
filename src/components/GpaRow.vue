<script>
import { stringifyStyle } from '@vue/shared';

export default {
    props: {
        courses: Array
    },
    data() {
        return {
            selectedCourse: null,
            grade: null,
            gpa: null,
        };
    },
    watch: {
        selectedCourse() {
            alert(this.selectedCourse.name);
        },
        grade() {
            let actualgpa = this.selectedCourse.multiplier * this.grade
            this.gpa = Math.round(actualgpa * 100)/100
            this.$emit('gpaCount',this.gpa)
        }
    },
}
</script>
<template>
    <div class="p-fluid grid formgrid">
        <div class="field col-12 md:col-6">
            <Dropdown v-model="selectedCourse" :options="courses" optionLabel="name" placeholder="Select a Course" />
        </div>
        <div class="field col-12 md:col-3">
            <InputNumber maxlength="6" 
               maxValue="999999" 
               padControl="false" 
               thousandSeparator="" v-model="grade" />
        </div>
        <div class="field col-12 md:col-3">
            <Badge size="large">{{ gpa }}</Badge>
        </div>
    </div>
</template>