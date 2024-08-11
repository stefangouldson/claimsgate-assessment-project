<script lang="ts">
import Vue from "vue";
import FormComponent from "@/components/form.vue";
import TextComponent from "@/components/text.vue";
import InputComponent from "@/components/input.vue";
import SubmitComponent from "@/components/submit.vue";
// import store from "@/store";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "FormView",
  components: {
    FormComponent,
    TextComponent,
    InputComponent,
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
        <TextComponent
          type="h3"
          text="Enter your address history from the past 3 years in the form below"
        />
      </template>
      <template #question>
        <InputComponent
          label="Address line 1"
          placeholder="Enter your address"
        />
        <InputComponent
          label="Date Moved In"
          placeholder="Enter the date you moved into this address"
          type="date"
        />
        <InputComponent
          label="Postcode"
          placeholder="Enter the postcode of this address"
        />
      </template>
      <template #submit>
        <SubmitComponent />
      </template>
    </FormComponent>
  </div>
</template>
