import axios from "axios";

const instance=axios.create({
    baseURL:"https://nice-pear-peacock-tutu.cyclic.app",
    withCredentials:true
})
export default instance

// http://localhost:8080