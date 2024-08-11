<script lang="ts">
import Vue from "vue";
// import store from "@/store";

export default Vue.extend({
  name: "AddressListComponent",
  computed: {
    addresses() {
      return this.$store.getters["addressList"];
    },
  },
});
</script>
<template>
  <section class="my-5">
    <ul v-for="(address, index) in addresses" :key="index">
      <li>
        <span class="fw-bold">Address {{ index + 1 }} - </span>
        Line 1: {{ address.line1 }}, Date Moved In: {{ address.dateMoved }},
        Postcode: {{ address.postcode }}
      </li>
    </ul>
  </section>
</template>
