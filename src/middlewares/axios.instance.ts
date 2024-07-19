import axios, {type AxiosInstance, type AxiosRequestConfig, type AxiosRequestHeaders} from "axios";
import { getValidaitonError } from "../utils/get-validation-error";

interface headers extends AxiosRequestHeaders {
    "Content-Type": string;
    Accept: string;
    Authorization?: string;
}

function createAxiosInstance() {
    const base_url = import.meta.env.BACK_END_URL
    const instance = axios.create({
        baseURL: base_url,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        } as headers,
    });
    instance.interceptors.request.use((request) => {
        return request;
    }, (error) => {
        return Promise.reject(error);
    })
    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        const customError = getValidaitonError(error.response.data.code)
        if (customError){
            return Promise.reject(customError)
        }
        return Promise.reject(error);
    })
    return instance
}

export const customAxios: AxiosInstance = createAxiosInstance();