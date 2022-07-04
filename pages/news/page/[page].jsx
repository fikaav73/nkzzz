import { Pagination, styled } from "@mui/material";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { fetchMainLayoutProps } from "../../../api-calls/mainLayout";
import { fetchNews } from "../../../api-calls/news";
import NewsBox from "../../../components/molecules/NewsBox";
import { ROUTES } from "../../../constants/routes";
import { getLocale, nextToStrapiLocale } from "../../../locales";

const News = (props) => {
    const router = useRouter();
    const page = useMemo(() => Number.parseInt(router.query.page), [router.query]);
    const t = useTranslations("news");
    const newsPage = useMemo(() => t.rich("newsPage"), [t]);

    const NewsItems = useMemo(
        () => (
            <NewsContainer>
                {props.news.map((newsItem) => (
                    <NewsBox key={newsItem.attributes.slug} news={newsItem} />
                ))}
            </NewsContainer>
        ),
        [props.news]
    );

    const handleChange = useCallback(
        (e, nextPage) => {
            if (page === nextPage) return;
            router.push({
                pathname: `${ROUTES.NEWS_PAGE}/[page]`,
                query: { page: nextPage }
            });
        },
        [router.push]
    );

    return (
        <>
            <Head>
                <title>
                    {newsPage}: {page}
                </title>
            </Head>
            <PageContainer>
                {NewsItems}
                <Pagination page={page} count={props.pageCount} onChange={handleChange} />
            </PageContainer>
        </>
    );
};

export const getStaticProps = async (context) => {
    try {
        const page = context.params.page;
        const messages = getLocale(context.locale);
        const strapiLocale = nextToStrapiLocale(context.locale);

        const [news, mainLayout] = await Promise.all([
            fetchNews({
                page: page,
                locale: strapiLocale
            }),
            fetchMainLayoutProps({ locale: strapiLocale, path: "/news/page/" + page })
        ]);

        return {
            props: {
                news: news.data,
                page,
                pageCount: news.meta.pagination.pageCount,
                messages,
                mainLayout
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

export const getStaticPaths = async (context) => {
    let paths = [];
    try {
        for (let locale of context.locales) {
            const news = await fetchNews({
                locale: nextToStrapiLocale(locale)
            });

            for (let i = 1; i <= news.meta.pagination.pageCount; i++) {
                paths.push({
                    params: {
                        page: i.toString()
                    },
                    locale
                });
            }
        }
    } catch (error) {
        console.error(error);
    }
    return {
        paths,
        fallback: "blocking"
    };
};

const PageContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    margin: "2rem"
});

const NewsContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    margin: "2rem",
    flexWrap: "wrap",
    "& > *": { flexBasis: "400px" }
});

export default News;
