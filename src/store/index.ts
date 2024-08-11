import Vue from "vue";
import Vuex from "vuex";
import { User, Address, Claim } from "@/types";
import { createClaim } from "@/core/createClaim";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null as User | null,
    addresses: null as Array<Address> | null,
    claim: null as Claim | null,
  },
  getters: {
    userData: (state) => state.user,
    firstName: (state) => state.user?.firstName,
    addressList: (state) => state.addresses,
    claimData: (state) => state.claim,
    hasAddress: (state) => {
      if (state.addresses) {
        return state.addresses.length > 0;
      } else return false;
    },
    // Only to be used of there is a 3 address limit
    has3Addresses: (state) => {
      if (state.addresses) {
        return state.addresses?.length < 3;
      } else {
        return true;
      }
    },
    has3Years: (state) => {
      const currentTime = Date.now();
      const threeYearsInMilliseconds = 3 * 365 * 24 * 60 * 60 * 1000; // Convert 3 years to milliseconds
      if (state.addresses) {
        for (const address of state.addresses) {
          const dateMoved = new Date(address.dateMoved).getTime(); // Convert dateMoved to a timestamp
          if (currentTime - dateMoved >= threeYearsInMilliseconds) {
            return true; // Found an address with a dateMoved longer than 3 years ago
          }
        }
      }
      return false; // No address found with dateMoved longer than 3 years ago
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
    set_claim(state, data: Claim) {
      state.claim = data;
    },
  },
  actions: {
    async createClaim({ state, commit }) {
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
          commit("set_claim", newClaim);
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
