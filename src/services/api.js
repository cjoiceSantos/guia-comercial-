import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.190.12.58/api'
    //'http://18.190.12.58/api'
});


api.interceptors.request.use(async config => {
    const token = localStorage.getItem('guia@token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default api;
