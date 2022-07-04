import { getLocale, nextToStrapiLocale } from "../locales";
import { fetchMainLayoutProps } from "../api-calls/mainLayout";
import { fetchPageWithComponents } from "../api-calls/pages";
import PageBuilder from "../components/templates/PageBuilder";

const Home = (props) => {
    return <PageBuilder page={props.page} />;
};

export const getStaticProps = async (context) => {
    try {
        const messages = getLocale(context.locale);
        const strapiLocale = nextToStrapiLocale(context.locale);

        const [page, mainLayout] = await Promise.all([
            fetchPageWithComponents({
                locale: strapiLocale,
                pageSlug: "home-page"
            }),
            fetchMainLayoutProps({
                locale: strapiLocale,
                path: "/"
            })
        ]);

        return {
            props: {
                mainLayout,
                page: page.data,
                messages
            },
            revalidate: 1800 // 30min
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true
        };
    }
};

export default Home;
