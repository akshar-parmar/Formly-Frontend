
import axios from 'axios';

const instance = axios.create({
  //custom baseURL 
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Modify the request config here, e.g., add an authorization header
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // Modify the response data or perform other tasks here
    return response;
  },
  (error) => {
    // Handle error responses globally, e.g., show a notification
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);
console.log(instance);

export default instance;

//reference link
//https://medium.com/geekculture/axios-interceptor-why-you-need-it-fb234a945749