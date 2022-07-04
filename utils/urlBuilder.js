import { API_URL } from "../constants";

export const cloudinary = (image) => image;

export const heroku = (image) => API_URL + image;

const buildURL = cloudinary;

export default buildURL;
