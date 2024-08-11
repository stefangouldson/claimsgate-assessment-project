<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FormComponent",
  methods: {
    handleSubmit() {
      this.$emit("submitted");
    },
  },
});
</script>
<template>
  <div>
    <slot name="title"></slot>
    <slot name="subtitle"></slot>
    <slot name="list"></slot>
    <slot name="question"></slot>

    <slot name="submit"></slot>
  </div>
</template>
