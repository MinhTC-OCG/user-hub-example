import axios from "axios";
const instance = axios.create({
    baseURL: "https://randomuser.me/api",
});

instance.defaults.headers.post["Content-Type"] =
    "application/json; charset=UTF-8";

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default instance;
