import axios from 'axios';
/*
export default axios.create({
    baseURL: 'https://d218-103-102-117-52.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning" : "true"}
});*/

export default axios.create({
    baseURL: 'http://localhost:8080/'
});