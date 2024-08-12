<!-- eslint-disable -->
<script lang="ts">
import Vue from "vue";
import {
  BFormGroup,
  BFormInput,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";
import { getPostcodes } from "@/core/getPostcodes";

export default Vue.extend({
  name: "InputComponent",
  components: {
    BFormGroup,
    BFormInput,
    BListGroup,
    BListGroupItem,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      default: "text",
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    postcode: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      inputValue: this.value,
      errorMessage: "",
      showError: true,
      suggestions: [] as string[],
    };
  },
  watch: {
    value(newVal) {
      this.inputValue = newVal;
    },
    inputValue(newVal) {
      this.$emit("input", newVal);
      this.validateInput(newVal);
    },
  },
  methods: {
    validateInput(value: string){
      this.errorMessage = "";
      if(!value || value.length == 0){
        this.errorMessage = `${this.label} field is required`;
      } else if (this.postcode && value.length < 4) {
        this.errorMessage = "Postcode must be at least 4 characters"
      }
    },
    async getPostcodeSuggestions() {
      if (this.inputValue.length >= 4) {
        try {
          const postcodes = await getPostcodes(this.inputValue);
          this.suggestions = postcodes;
        } catch (error) {
          throw new Error("failed to fetch suggestions")
        }
      }
    },
    choosePostcode(postcode: string) {
      this.inputValue = postcode;
      this.suggestions = [];
      this.$emit("input", postcode);
    },
  },
});
</script>

<template>
  <b-form-group
    :label="label"
    class="my-2"
    :state="errorMessage ? false : null"
  >
    <b-form-input
      v-model="inputValue"
      :state="errorMessage ? false : null"
      :name="name"
      :placeholder="placeholder"
      :type="type || 'text'"
      required
      @input="getPostcodeSuggestions"
    />
    <b-list-group v-if="postcode == true && suggestions.length > 0">
      <b-list-group-item
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="choosePostcode(suggestion)"
        style="cursor: pointer"
      >
        {{ suggestion }}
      </b-list-group-item>
    </b-list-group>
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
  </b-form-group>
</template>
