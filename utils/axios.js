import axios from "axios";

const instance = axios.create({
    baseURL: 'https://findxbac.onrender.com/',
    withCredentials: true,
  });
  
  // http://localhost:8080

export default instance