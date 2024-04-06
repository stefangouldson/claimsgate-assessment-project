<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Submit',
    methods: {
        submit() {
            // TODO: Trigger form submission using Vuex
        }
    }
})
</script>
<template>
    <b-button @click="submit">Submit</b-button>
</template>

