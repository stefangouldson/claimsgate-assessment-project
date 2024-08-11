<script lang="ts">
import Vue from "vue";
import TextComponent from "@/components/text.vue";

export default Vue.extend({
  name: "ErrorView",
  props: {
    message: {
      type: String,
      default: "An error occurred",
    },
  },
  components: {
    TextComponent,
  },
});
</script>

<template>
  <div>
    <TextComponent type="h1" text="Oops, something went wrong" />
    <p class="text-danger">{{ message }}</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
