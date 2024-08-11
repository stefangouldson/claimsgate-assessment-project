<script lang="ts">
import Vue from "vue";
import FormComponent from "@/components/form.vue";
import TextComponent from "@/components/text.vue";
import InputComponent from "@/components/input.vue";
import SubmitComponent from "@/components/submit.vue";
import AddressListComponent from "@/components/addressList.vue";
import ClaimComponent from "@/components/claim.vue";
import { mapGetters } from "vuex";
import { Address } from "@/types";
const emptyAddress: Address = {
  line1: "",
  dateMoved: "",
  postcode: "",
};

export default Vue.extend({
  name: "FormView",
  components: {
    AddressListComponent,
    FormComponent,
    TextComponent,
    InputComponent,
    SubmitComponent,
    ClaimComponent,
  },
  data() {
    return {
      form: { ...emptyAddress },
      fields: [
        {
          name: "line1",
          type: "text",
          label: "Address Line 1",
          placeholder: "Enter your address",
        },
        {
          name: "dateMoved",
          type: "date",
          label: "Date Moved In",
        },
        {
          name: "postcode",
          type: "text",
          label: "Postcode",
          placeholder: "Enter the postcode of this address",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      userName: "firstName",
      // hasThree: "has3Addresses",
      claim: "claimData",
      has3Years: "has3Years",
    }),
  },
  methods: {
    addAddress() {
      this.$store.commit("add_address", { ...this.form });
      this.form = { ...emptyAddress };
    },
    handleSubmit() {
      console.log("submitted");
    },
  },
});
</script>

<template>
  <div>
    <FormComponent @submitted="handleSubmit" v-if="!claim">
      <template #title>
        <TextComponent type="h1" :text="`Welcome Back ${userName}`" />
      </template>
      <template #subtitle>
        <TextComponent
          type="h3"
          text="Please provide you address history for the past 3 years"
        />
      </template>
      <template #list>
        <AddressListComponent />
      </template>
      <template #question v-if="!has3Years">
        <form @submit.prevent="addAddress">
          <InputComponent
            v-for="(field, index) in fields"
            v-model="form[field.name]"
            :key="index"
            :name="field.name"
            :type="field.type"
            :label="field.label"
            :placeholder="field?.placeholder"
          />
          <b-button type="submit" variant="success" class="my-2">
            Save Address
          </b-button>
        </form>
      </template>
      <template #submit>
        <SubmitComponent v-if="has3Years" />
      </template>
    </FormComponent>
    <ClaimComponent v-else :claim="claim" />
  </div>
</template>
