import axios from 'axios';

const clientAPI = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  // responseType: 'json',
});

// clientAPI.interceptors.request.use((request) => {
//   request.headers['Content-Type'] = 'application/json';
//   request.headers.Authorization = localStorage.access_token;
//   request.headers.withCredentials = true;
//   return request;
// });

// clientAPI.interceptors.response.use((response) => response, (error) => {
//   if (error && error.response) {
//     if (error.response.status === 404) {
//       console.log(404 + "Suka!!!")
//     }
//     console.log(error + " aaaaaaaaaa");
//     return Promise.reject(error);
//   }

//   return Promise.resolve();
// });

export default clientAPI;