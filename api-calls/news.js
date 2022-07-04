import { API } from "../constants/routes";
import axios from "../services/http";

export const fetchNews = async ({ page, perPage, sortBy, sortDir, locale, all } = {}) => {
    if (all) {
        const res = await axios.get(API.NEWS, {
            params: {
                "pagination[pageSize]": 1,
                locale: locale || "all"
            }
        });
        perPage = res.data.meta.pagination.total;
    }

    return axios
        .get(API.NEWS, {
            params: {
                "pagination[pageSize]": perPage || 10,
                "pagination[page]": page || 1,
                sort: `${sortBy || "publishedAt"}:${sortDir || "desc"}`,
                locale: locale || "all"
            }
        })
        .then((news) => {
            return {
                data: news.data.data,
                meta: news.data.meta
            };
        });
};

export const fetchNewsItem = async (slug, locale) => {
    return axios
        .get(API.NEWS, {
            params: {
                "filters[slug][$eq]": slug,
                locale
            }
        })
        .then((newsItem) => {
            if (newsItem.data.data.length === 0)
                throw new Error(slug + " " + locale + " not found");

            return {
                data: newsItem.data.data[0],
                meta: newsItem.data.meta
            };
        });
};

export const fetchNewsItemWithAdjacent = async (slug, locale) => {
    const news = await fetchNews({
        all: true,
        locale
    });

    const index = news.data.findIndex((newsItem) => newsItem.attributes.slug === slug);
    if (index === -1)
        return Promise.reject({
            status: 404,
            message: "News " + slug + " not found"
        });

    return {
        prevNews: index > 0 && news.data[index - 1],
        news: news.data[index],
        nextNews: index < news.data.length - 1 && news.data[index + 1]
    };
};
