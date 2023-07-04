import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.59.100:30081',
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default api;