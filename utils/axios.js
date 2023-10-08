import axios from "axios";

const instance=axios.create({
    baseURL:"http://nice-pear-peacock-tutu.cyclic.app",
    withCredentials:true
})
export default instance