<script lang="ts">
import Vue from "vue";
import TextComponent from "@/components/text.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    TextComponent,
  },
});
</script>

<template>
  <div>
    <TextComponent type="h1" text="Home Page" />
  </div>
</template>
