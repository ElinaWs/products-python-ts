import axios from 'axios'

export const axiosApi = axios.create(
    {
        baseURL: 'http://127.0.0.1:8000/api/v1'
    }
)

axiosApi.interceptors.request.use(request => {
    const token = localStorage.getItem('token');

    if(token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
}, error => {
    return Promise.reject(error)
})