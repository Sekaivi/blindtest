import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.deezer.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Erreur API => ', error);
        return Promise.reject(error);
    }
);

export default api;