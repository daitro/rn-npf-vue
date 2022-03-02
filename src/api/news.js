import HTTP from "./http.js";

// На следующей строке объявляем ручку (дёргая метод, который прописан
// в router.news.js на серверной части)
// Этот метод возвращает массив
const getNewsList = () => {
  return HTTP.get("/api/news/list");
};

//Объявляем ручку для получения статьи по её id, НЕ ДЁРГАЕМ РУЧКУ, а просто объявляем
///article/:id
const getNewsArticleById = (id) => {
  return HTTP.get(`/api/news/article/${id}`);
};

const newsApi = {
  getNewsList,
  getNewsArticleById,
};

export default newsApi;
