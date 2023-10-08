import axios from "axios";

const instance = axios.create({
    baseURL: 'https://findxbac.onrender.com/',
    withCredentials: true,
  });

export default instance