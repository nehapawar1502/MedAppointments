// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000'  // Adjust this if your backend URL is different
});

export default instance;