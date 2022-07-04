import { API } from "../constants/routes";
import axios from "../services/http";
import { fetchNews } from "./news";

export const fetchPages = async ({ all, page, perPage, locale }) => {
    if (all) {
        const res = await axios.get(API.PAGES, {
            params: {
                "pagination[pageSize]": 1,
                locale: locale || "all"
            }
        });
        perPage = res.data.meta.pagination.total;
    }
    return axios
        .get(API.PAGES, {
            params: {
                "pagination[pageSize]": perPage || 10,
                "pagination[page]": page || 1,
                locale: locale || "all"
            }
        })
        .then((pages) => ({
            data: pages.data.data,
            meta: pages.data.meta
        }));
};

export const fetchPageWithComponents = ({ locale, pageSlug }) => {
    return axios
        .get(API.PAGES, {
            params: {
                "filters[slug][$eq]": pageSlug,
                locale,
                populate: [
                    "content.slide.image",
                    "content.Link.Page",
                    "content.largeImage",
                    "content.leftImage",
                    "content.rightImage",
                    "content.externalLinks.cover",
                    "content.numericalInfo",
                    "content.background",
                    "content.profilePicture",
                    "content.links",
                    "content.pages",
                    "content.boxLinks.page",
                    "content.links.Page",
                    "content.pages",
                    "content.icon",
                    "content.icon.Page",
                    "content.fields.file",
                    "content.contacts",
                    "content.files.formFile",
                    "content.municipality",
                    "content.category.phone_numbers",
                    "content.row",
                    "content.latestNews",
                    "content.backgroundImage"
                ]
            }
        })
        .then(async (res) => {
            if (res.data.data.length === 0) throw new Error(pageSlug + " not found");

            const page = res.data.data[0];

            let content = [];

            for (let i = 0; i < page.attributes.content.length; i++) {
                let component = page.attributes.content[i];
                switch (component.__component) {
                    case "slider.news-slider": {
                        const latestNews = await fetchNews({
                            page: 1,
                            perPage: component.latestNews.numOfLatestNews,
                            sortBy: "publishedAt",
                            sortDir: "desc",
                            locale
                        });
                        component.perStack = component.latestNews.numOfStackedNews;
                        component.latestNews = latestNews.data;
                        content.push(component);
                        break;
                    }

                    case "list.list": {
                        let table = {
                            id: component.id,
                            __component: "list.list",
                            data: []
                        };
                        do {
                            table.data.push({
                                id: component.id,
                                label: component.label,
                                fields: component.fields
                            });
                            i++;
                            if (i === page.attributes.content.length) break;
                            component = page.attributes.content[i];
                        } while (component.__component === "list.list");
                        i--;
                        content.push(table);
                        break;
                    }

                    default: {
                        content.push(component);
                        break;
                    }
                }
            }

            page.attributes.content = content;

            return {
                data: page,
                meta: res.data.meta
            };
        });
};
