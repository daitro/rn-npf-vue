import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import newsModule from "./news";
import historyModule from "./history";

const store = new Vuex.Store({
  modules: {
    news: newsModule,
    history: historyModule,
  },
});

export default store;
