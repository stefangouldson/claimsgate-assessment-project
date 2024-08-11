<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "SubmitComponent",
  methods: {
    handleSubmit() {
      this.$store.dispatch("createClaim");
    },
  },
  computed: {
    ...mapGetters({
      hasAddress: "hasAddress",
    }),
  },
});
</script>

<template>
  <b-button
    v-if="hasAddress"
    @click.prevent="handleSubmit"
    variant="primary"
    class="my-5"
  >
    Submit Claim
  </b-button>
</template>
