import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-9wdp.onrender.com/'
});
