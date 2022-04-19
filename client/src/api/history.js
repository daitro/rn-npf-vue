import HTTP from "./http.js";

const getHistoryList = () => {
  return HTTP.get("/api/history/list");
};

const historyApi = {
  getHistoryList,
};

export default historyApi;
