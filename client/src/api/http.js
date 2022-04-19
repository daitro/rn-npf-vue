import axios from "axios";

const SERVER_DOMEN = "http://localhost:3000";

const HTTP = {
  // read
  get(url) {
    return axios.get(SERVER_DOMEN + url);
  },
  //МЕТОД ВОЗВРАЩАЮТ РЕЗУЛЬТАТ ВЫЗОВА МЕТОДА БИБЛИОТЕКИ AXIOS
  // а он в свою очередь возвращает промис
  // create
  post(url, data) {
    return axios.post(SERVER_DOMEN + url, data);
  },
  // update
  put(url, data) {
    return axios.put(SERVER_DOMEN + url, data);
  },
  // delete
  delete(url) {
    return axios.delete(SERVER_DOMEN + url);
  },
};

// create + read + update + delete = CRUD
// get, post, put, delete - это методы HTTP

export default HTTP;
