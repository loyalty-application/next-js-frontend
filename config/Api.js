import Axios from "axios";

let urls = {
    test: `http://35.187.241.140:8080`,
    development: 'https://go-gin-backend.itsag1t6.com',
    production: 'https://go-gin-backend.itsag1t6.com'
}
const api = Axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;

