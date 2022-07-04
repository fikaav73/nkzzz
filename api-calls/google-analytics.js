import { API } from "../constants/routes";
import { defaultLocale } from "../locales";
import axios from "../services/http";

export const fetchPageVisits = (path, locale) => {
    let paths = ["/" + locale + (path === "/" ? "" : path)];
    if (locale === defaultLocale.next) paths.push(path);

    return axios.post(API.VISITS, {
        paths
    });
};
