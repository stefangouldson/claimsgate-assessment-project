import Vue from "vue";
import Vuex from "vuex";
import { User } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null as User | null,
  },
  getters: {
    userData: (state) => state.user,
    firstName: (state) => state.user?.firstName,
  },
  mutations: {
    set_user(state, data: User) {
      state.user = data;
    },
  },
  actions: {},
  modules: {},
});
