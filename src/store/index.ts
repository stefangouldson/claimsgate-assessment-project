import Vue from "vue";
import Vuex from "vuex";
import { User, Address } from "@/types";
import { createClaim } from "@/core/createClaim";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null as User | null,
    addresses: null as Array<Address> | null,
  },
  getters: {
    userData: (state) => state.user,
    firstName: (state) => state.user?.firstName,
    addressList: (state) => state.addresses,
    has3Addresses: (state) => {
      if (state.addresses) {
        return state.addresses?.length < 3;
      } else {
        return true;
      }
    },
  },
  mutations: {
    set_user(state, data: User) {
      state.user = data;
    },
    add_address(state, data: Address) {
      console.log(data);
      if (state.addresses) {
        state.addresses.push(data);
      } else {
        state.addresses = [data];
      }
    },
  },
  actions: {
    async createClaim({ state }) {
      try {
        if (!state.user) throw new Error("No user data provided");
        if (state.addresses) {
          // fetch IP Address
          const ipResponse = await fetch("https://api.ipify.org?format=json");
          const ipData = await ipResponse.json();
          if (!ipData.ip) throw new Error("Failed to fetch IP address");
          // Create Claim
          const [newClaim, error] = await createClaim(
            state.user?.id,
            ipData.ip,
            [...state.addresses]
          );
          if (error || !newClaim) throw error;
        } else {
          throw new Error("No address data provided");
        }
        console.log("Claim Created");
      } catch (error) {
        console.error("Failed to create claim", error);
        throw error;
      }
    },
  },
  modules: {},
});
