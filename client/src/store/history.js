import historyApi from "../api/history";

const historyModule = {
  namespaced: true,
  state: () => ({
    historyList: [],
  }),
  getters: {
    historyListYear(state) {
      return state.historyList.map((element) => {
        return {
          year: String(new Date(element.year).getFullYear()),
          text: element.text,
        };
      });
    },
  },
  mutations: {
    setHistoryList(state, res) {
      state.historyList = res;
    },
  },
  actions: {
    getHistoryList(context) {
      return historyApi
        .getHistoryList()
        .then((response) => {
          context.commit("setHistoryList", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

export default historyModule;
