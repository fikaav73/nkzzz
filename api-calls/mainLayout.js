import { API } from "../constants/routes";
import { strapiToNextLocale } from "../locales";
import axios from "../services/http";
import { fetchPageVisits } from "./google-analytics";

export const fetchMainLayoutProps = async ({ path, locale }) => {
    return Promise.all([
        axios.get(API.CONFIGURATION),
        path && fetchPageVisits(path, strapiToNextLocale(locale)),
        axios.get(API.FOOTER_USEFUL_LINK, {
            params: {
                populate: "link",
                locale
            }
        }),
        axios.get(API.MAIN_MENU, {
            params: {
                populate: ["menuItems", "menuItems.children", "menuItems.children.children"],
                locale
            }
        })
    ]).then(([configuration, visits, footerLinks, navigation]) => ({
        configuration: configuration.data.data,
        footerLinks: footerLinks.data.data,
        navigation: navigation.data.data,
        visits: visits ? visits.data : false
    }));
};
