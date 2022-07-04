import { fetchPages, fetchPageWithComponents } from "../../api-calls/pages";
import { fetchMainLayoutProps } from "../../api-calls/mainLayout";
import { getLocale, nextToStrapiLocale, strapiToNextLocale } from "../../locales";
import PageBuilder from "../../components/templates/PageBuilder";

const Page = (props) => {
    return <PageBuilder page={props.page} />;
};

export const getStaticProps = async (context) => {
    try {
        const messages = getLocale(context.locale);
        const strapiLocale = nextToStrapiLocale(context.locale);
        const pageSlug = context.params.pageSlug;

        const [page, mainLayout] = await Promise.all([
            fetchPageWithComponents({
                locale: strapiLocale,
                pageSlug
            }),
            fetchMainLayoutProps({ locale: strapiLocale, path: "/" + pageSlug })
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
        return {
            notFound: true
        };
    }
};

export const getStaticPaths = async () => {
    let paths = [];

    try {
        const pages = await fetchPages({
            all: true
        });

        for (let page of pages.data) {
            paths.push({
                params: {
                    pageSlug: page.attributes.slug
                },
                locale: strapiToNextLocale(page.attributes.locale)
            });
        }
    } catch (error) {
        console.error(error);
    }

    return {
        paths,
        fallback: "blocking"
    };
};

export default Page;
