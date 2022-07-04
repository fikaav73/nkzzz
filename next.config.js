const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["eng", "latn", "cyrl"],
        defaultLocale: "cyrl"
    },
    async redirects() {
        return [
            {
                source: "/news",
                destination: "/news/page/1",
                permanent: true
            },
            {
                source: "/news/page",
                destination: "/news/page/1",
                permanent: true
            }
        ];
    },
    images: {
        domains: ["res.cloudinary.com", "niksic-api.herokuapp.com", "localhost"]
    }
};

module.exports = nextConfig;
