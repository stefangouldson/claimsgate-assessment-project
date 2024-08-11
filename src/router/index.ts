import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import FormView from "@/views/FormView.vue";
import HomeView from "@/views/HomeView.vue";
import ErrorView from "@/views/ErrorView.vue";
import { getUserDataById } from "@/core/getUserDataById";
import store from "@/store";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:userId",
    name: "address",
    component: FormView,
    beforeEnter: async (to, from, next) => {
      // TODO load the user data from getUserDataById and store it with VueX
      const userId = to.params.userId;
      // If userId is not a number, return error page
      if (isNaN(Number(userId))) {
        return next({
          name: "error",
          params: { errorMessage: "Invalid user ID" },
        });
      }
      try {
        const [user, error] = await getUserDataById(userId);
        if (error) throw error;
        console.log(user);
        store.commit("set_user", user);
        next();
      } catch (error) {
        next({
          name: "error",
          params: { message: "Failed to fetch user data" },
        });
      }
    },
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
    props: (route) => ({ message: route.params.message }),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
