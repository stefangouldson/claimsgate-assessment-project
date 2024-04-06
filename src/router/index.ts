import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:userId",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      // TODO load the user data from getUserDataById and store it with VueX
      next(); 
    },
  },
  // TODO add the route /complete using the component CompleteView
];

const router = new VueRouter({
  routes,
});

export default router;
