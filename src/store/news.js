import newsApi from "../api/news";

const newsModule = {
  namespaced: true,
  state: () => ({
    news: [],
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
  },
  actions: {
    getNewsList(context) {
      return newsApi
        .getNewsList()
        .then((response) => {
          context.commit("setNews", response.data);
        })
        .catch((err) => {
          //TODO: handle error
        });
    },
  },
};
export default newsModule;
