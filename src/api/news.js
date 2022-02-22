import HTTP from "./http";

// На следующей строке дёргаем метод, который прописан
// в router.news.js на серверной части.
// Этот метод возвращает массив
const getNewsList = () => {
  return HTTP.get("/api/news/list");
};

const newsApi = {
  getNewsList,
};

export default newsApi;
