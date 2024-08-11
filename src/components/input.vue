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
    type: {
      default: 'text'
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
      default: ""
    }
  },
  data(){
    return {
      inputValue: this.value
    }
  },
  watch: {
    value(newVal) {
      this.inputValue = newVal;
    },
  }
});
</script>

<template>
  <b-form-group :label="label" class="my-4" :state="errorMsg ? false : null">
    <b-form-input
      v-model="inputValue"
      :state="errorMsg ? false : null"
      :name="label"
      :label="label"
      :placeholder="placeholder"
      :type="type || 'text'"
      required="required"
    />
    <p v-if="errorMsg" class="text-danger">{{ errorMsg }}</p>
  </b-form-group>
</template>
