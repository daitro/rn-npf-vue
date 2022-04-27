import axios from "axios";

const SERVER_DOMEN = "http://localhost:3000";

const HTTP = {
	// read
	get(url) {
		return axios.get(SERVER_DOMEN + url);
	},
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

export default HTTP;
