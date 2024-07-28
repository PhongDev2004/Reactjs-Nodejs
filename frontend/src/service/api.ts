import axios from 'axios';

const jwt = document.cookie;
const token = jwt.split('=')[1];

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  // baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  timeout: 5000,
});

export default instance;
