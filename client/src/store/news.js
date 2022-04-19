import newsApi from "../api/news";

const newsModule = {
  namespaced: true,
  state: () => ({
    news: [],
    isLoading: false,
    isSuccessFetched: false,
    hasError: false,
  }),
  getters: {
    sortedByDateNews(state) {
      return state.news.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    },
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },

    setLoadingFlag(state, flag) {
      state.isLoading = flag;
    },
  },
  actions: {
    getNewsList(context) {
      context.commit("setLoadingFlag", true); //Инициируем обработку мутации, для этого
      //вызываем store.commit("название мутации", значение которое хотим передать)
      return newsApi
        .getNewsList()
        .then((response) => {
          context.commit("setNews", response.data);
        })
        .catch((err) => {
          //TODO: handle error
        })
        .finally(() => {
          context.commit("setLoadingFlag", false);
        });
    },
  },
};
export default newsModule;
