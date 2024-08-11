<script lang="ts">
import Vue from "vue";
import FormComponent from "@/components/form.vue";
import TextComponent from "@/components/text.vue";
import SubmitComponent from "@/components/submit.vue";
// import store from "@/store";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "FormView",
  components: {
    FormComponent,
    TextComponent,
    SubmitComponent,
  },
  computed: {
    ...mapGetters({
      userName: "firstName",
    }),
  },
});
</script>

<template>
  <div>
    <FormComponent>
      <template #title>
        <TextComponent type="h1" :text="`Welcome Back ${userName}`" />
      </template>
      <template v-slot:subtitle>
        <TextComponent type="h3" text="This is a new form." />
      </template>

      <template #submit>
        <SubmitComponent />
      </template>
    </FormComponent>
  </div>
</template>
