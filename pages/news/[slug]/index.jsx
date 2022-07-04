import { Box, Divider, styled, Typography } from "@mui/material";
import { useMemo } from "react";
import { fetchMainLayoutProps } from "../../../api-calls/mainLayout";
import { fetchNews, fetchNewsItemWithAdjacent } from "../../../api-calls/news";
import Flex from "../../../components/styled/Flex.styled";
import TimeIcon from "../../../components/styled/icons/Time.styled";
import { getLocale, nextToStrapiLocale, strapiToNextLocale } from "../../../locales";
import NewsNavigation from "../../../components/molecules/NewsNavigation";
import ShareArticle from "../../../components/organisms/ShareArticle";
import { BASE_URL } from "../../../constants";
import Markdown from "../../../components/molecules/Markdown";
import { ROUTES } from "../../../constants/routes";

const NewsItem = (props) => {
    const date = props.newsItem.news.attributes.publishedAt;
    const [day, month, year] = useMemo(() => {
        const tempDate = new Date(date);
        return [tempDate.getDate(), tempDate.getMonth() + 1, tempDate.getFullYear()];
    }, [date]);

    return (
        <Container>
            <Flex display="flex" gap="0.5rem" alignItems="center">
                <TimeIcon />
                <Typography variant="body2">{day + "/" + month + "/" + year}</Typography>
            </Flex>
            <Typography
                variant="h3"
                sx={{
                    wordBreak: "break-word"
                }}
            >
                {props.newsItem.news.attributes.title}
            </Typography>
            <Box sx={{ maxWidth: "100%" }}>
                {props.newsItem.news.attributes.content && (
                    <Markdown text={props.newsItem.news.attributes.content} />
                )}
            </Box>
            <Divider orientation="horizontal" flexItem />
            <ShareArticle
                url={BASE_URL + `${ROUTES.NEWS}/${props.newsItem.news.attributes.slug}`}
                title={props.newsItem.news.attributes.title}
            />
            <NewsNavigation prev={props.newsItem.prevNews} next={props.newsItem.nextNews} />
        </Container>
    );
};

const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    margin: "3rem 5%",
    "& img": { maxWidth: "100%" }
});

export const getStaticProps = async (context) => {
    try {
        const messages = getLocale(context.locale);
        const strapiLocale = nextToStrapiLocale(context.locale);
        const slug = context.params.slug;

        const [newsItem, mainLayout] = await Promise.all([
            fetchNewsItemWithAdjacent(slug, strapiLocale),
            fetchMainLayoutProps({ locale: strapiLocale, path: "/news/" + slug })
        ]);

        return {
            props: {
                newsItem,
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

export const getStaticPaths = async () => {
    let paths = [];

    try {
        const news = await fetchNews({
            all: true
        });

        for (let newsItem of news.data) {
            paths.push({
                params: {
                    slug: newsItem.attributes.slug
                },
                locale: strapiToNextLocale(newsItem.attributes.locale)
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

export default NewsItem;
