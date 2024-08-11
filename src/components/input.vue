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
    errorMsg: {
      type: String,
      default: "",
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
    };
  },
  watch: {
    value(newVal) {
      this.inputValue = newVal;
    },
    inputValue(newVal) {
      this.$emit("input", newVal);
    },
  },
});
</script>

<template>
  <b-form-group :label="label" class="my-2" :state="errorMsg ? false : null">
    <b-form-input
      v-model="inputValue"
      :state="errorMsg ? false : null"
      :name="name"
      :placeholder="placeholder"
      :type="type || 'text'"
      required
    />
    <p v-if="errorMsg" class="text-danger">{{ errorMsg }}</p>
  </b-form-group>
</template>
