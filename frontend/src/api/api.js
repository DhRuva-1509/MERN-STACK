// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
//   baseURL: 'https://csci5709-tutorial.netlify.app/'  // matches Express setup
});

export default api;
