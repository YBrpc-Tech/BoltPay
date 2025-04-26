// src/utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://boltpay-backend-1.onrender.com', // Replace with your actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
