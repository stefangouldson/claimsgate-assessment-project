<!-- eslint-disable -->
<script lang="ts">
import Vue from "vue";
import {
  BFormGroup,
  BFormInput,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";

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
  },
  data() {
    return {
      inputValue: this.value,
      errorMessage: "",
      showError: true
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
      if(!value || value.length == 0){
        this.errorMessage = `${this.label} field is required`;
      } else {
        this.errorMessage = "";
      };
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
    />
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
  </b-form-group>
</template>
