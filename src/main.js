import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import resetCss from "../src/styles/reset.css";
import generalCss from "../src/styles/general.css";
import gridCss from "../src/styles/grids.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
