<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SubmitComponent",
  methods: {
    handleSubmit() {
      this.$store.dispatch("createClaim");
    },
  },
});
</script>
<template>
  <b-button @click.prevent="handleSubmit" variant="primary" class="my-5">
    Submit Claim
  </b-button>
</template>
