import axios from "axios";

const instance = axios.create({
    baseURL: 'http://nutty-fox-leather-jacket.cyclic.app/',
    withCredentials: true,
    
  });
  // http://localhost:8080

export default instance