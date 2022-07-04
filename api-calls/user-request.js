import { API } from "../constants/routes";
import axios from "../services/http";

export const postUserRequest = (formData) => {
    return axios.post(API.USER_REQUESTS, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};
