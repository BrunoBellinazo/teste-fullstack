import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001' // endereço do backend
});

export default api;