import HTTP from "./http.js";

// На следующей строке объявляем ручку (дёргая метод, который прописан
// в router.news.js на серверной части)

const getNewsList = () => {
  return HTTP.get("/api/news/list");
};

const getNewsArticleById = (id) => {
  return HTTP.get(`/api/news/article/${id}`);
};

const newsApi = {
  getNewsList,
  getNewsArticleById,
};

export default newsApi;
