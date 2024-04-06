import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Form from "@/components/form.vue";
import Text from "@/components/text.vue";
import 'bootstrap/dist/css/bootstrap.css';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  router,
  store,
  render: (h) => h(App),
  components: {
    App,
    Form,
    Text,
  },
}).$mount("#app");
