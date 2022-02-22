import axios from "axios";

const DOMEN = "http://localhost:3000";

const HTTP = {
  // read
  get(url) {
    return axios.get(DOMEN + url);
  },
  // create
  post(url, data) {
    return axios.post(DOMEN + url, data);
  },
  // update
  put(url, data) {
    return axios.put(DOMEN + url, data);
  },
  // delete
  delete(url) {
    return axios.delete(DOMEN + url);
  },
};

// create + read + update + delete = CRUD
// get, post, put, delete - это методы HTTP

export default HTTP;
