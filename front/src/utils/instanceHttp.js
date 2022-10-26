import axios from "axios";

//! TODO mettre url dans un .env
const instance = axios.create({
    baseUrl: "http://localhost:8080/"
});

if(localStorage.getItem('jwt')) {
    instance.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
}

export default instance;