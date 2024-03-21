import axios from "axios";
import {API_URL, APP_ID, APP_KEY} from "../env";

const instance = axios.create({
    baseURL: API_URL
});

instance.interceptors.request.use(config => {
    const params = new URLSearchParams(config.params || {});

    params.append('app_id', APP_ID);
    params.append('app_key', APP_KEY);

    config.params = params;
    return config;
}, error => {
    return Promise.reject(error);
});

export default instance;