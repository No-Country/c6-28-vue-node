import axios from "axios";

const API_BASE_URL = 'https://c6-28.up.railway.app/api/v1';

export const ApiRequest = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

//const validResponseFormat = /[2]\d\d/;

// ApiRequest.interceptors.response.use((response, error) => {
//     if (!validResponseFormat.test(response.status)) {
//         return Promise.reject(error);
//     } else {
//         return response.data;
//     }
// });
