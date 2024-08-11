<template>
  <!-- TODO provide a responsive container for all views so the form renders on mobile and desktop appropriately -->
  <div id="app" class="px-3">
    <router-view :key="$route.path" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
});
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
