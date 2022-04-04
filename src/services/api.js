import axios from "axios";


const api = axios.create({
    baseURL: process.env.BASE_URL_API || 'http://localhost:3001/',
});

console.log(process.env);
console.log(process.env.BASE_URL_API);

export default api;