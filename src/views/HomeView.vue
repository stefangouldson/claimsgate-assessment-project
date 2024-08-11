<script lang="ts">
import Vue from "vue";
import TextComponent from "@/components/text.vue";
import userData from "@/core/userData.json";

export default Vue.extend({
  name: "HomeView",
  components: {
    TextComponent,
  },
  data() {
    return {
      users: userData,
    };
  },
});
</script>

<template>
  <div>
    <TextComponent type="h1" text="Home Page" />
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/${user.id}`">
          {{ user.firstName }} {{ user.lastName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
