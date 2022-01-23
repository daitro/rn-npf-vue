import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import newsModule from './news';

const store = new Vuex.Store({
  modules: {
    news: newsModule,
  },
});

export default store;
