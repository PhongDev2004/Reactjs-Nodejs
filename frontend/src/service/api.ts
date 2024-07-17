import axios from 'axios';

const jwt = document.cookie;
const token = jwt.split('=')[1];

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  timeout: 3000,
});

export default instance;
