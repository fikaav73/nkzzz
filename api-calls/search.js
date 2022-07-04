import { API } from "../constants/routes";
import axios from "../services/http";

export const search = async ({ sortDir, query, locale } = {}) => {
    const newsRequest = axios.get(API.NEWS, {
        params: {
            "filters[$or][0][title][$containsi]": query,
            "filters[$or][1][content][$containsi]": query,
            locale,
            sort: `publishedAt:${sortDir || "desc"}`
        }
    });
    const pageRequest = axios.get(API.PAGES, {
        params: {
            "filters[title][$containsi]": query,
            locale,
            sort: `publishedAt:${sortDir || "desc"}`
        }
    });
    return axios.all([newsRequest, pageRequest]).then((response) => {
        return {
            data: [...response[0].data.data, ...response[1].data.data]
        };
    });
};
