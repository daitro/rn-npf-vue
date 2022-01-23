import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import "../src/styles/reset.css";
import "../src/styles/general.css";
import "../src/styles/grids.css";

Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
