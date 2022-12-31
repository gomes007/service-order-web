import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080" });

const defaultHeaders = {
    "Content-Type": "application/json",
};

api.interceptors.request.use((reqConfig) => {
    reqConfig.headers = {
        ...defaultHeaders,
    };
    return reqConfig;
});

export default api;
