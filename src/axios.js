import axios from 'axios'; //its a promise based library when you make request to a server

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance;