export const getLocale = (locale) => {
    const messages = require("./" + locale + ".json");
    return messages;
};

export const defaultLocale = {
    strapi: "sr-Cyrl-ME",
    next: "cyrl"
};

const strapiToNext = new Map([
    ["en", "eng"],
    ["sr-Latn-ME", "latn"],
    ["sr-Cyrl-ME", "cyrl"]
]);

const nextToStrapi = new Map([
    ["eng", "en"],
    ["latn", "sr-Latn-ME"],
    ["cyrl", "sr-Cyrl-ME"]
]);

export const nextToStrapiLocale = (locale) => nextToStrapi.get(locale);
export const strapiToNextLocale = (locale) => strapiToNext.get(locale);
