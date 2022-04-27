import newsApi from "../api/news";
import { format, compareAsc } from "date-fns";

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
			let sortNews = state.news.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			});

			return sortNews.map((obj) => {
				return {
					date: format(new Date(obj.date), "MM/dd/yyyy"),
					id: obj.id,
					title: obj.title,
				};
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
			context.commit("setLoadingFlag", true);
			return newsApi
				.getNewsList()
				.then((response) => {
					context.commit("setNews", response.data);
				})
				.catch((err) => {
					console.error("Ошибка:", error);
				})
				.finally(() => {
					context.commit("setLoadingFlag", false);
				});
		},
	},
};
export default newsModule;
