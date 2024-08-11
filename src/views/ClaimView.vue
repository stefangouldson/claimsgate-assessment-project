<script lang="ts">
import Vue from "vue";
import TextComponent from "@/components/text.vue";

export default Vue.extend({
  name: "ClaimView",
  components: {
    TextComponent,
  },
  computed: {
    claim() {
      return this.$store.getters["claimData"];
    },
  },
});
</script>

<template>
  <section>
    <TextComponent
      type="h1"
      :text="`Claim created for ${claim.userData.firstName}  ${claim.userData.lastName}`"
      class="mb-3"
    />
    <p>Status: {{ claim.status }}</p>
    <p>IP Address: {{ claim.creationIpAddress }}</p>
    <p>Created Date: {{ claim.createdDate }}</p>
    <p>{{ claim.data }}</p>
  </section>
</template>
