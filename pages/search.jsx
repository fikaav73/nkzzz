import { CircularProgress, styled, Typography } from "@mui/material";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

import { getLocale, nextToStrapiLocale } from "../locales";
import { BASE_URL } from "../constants";
import { fetchMainLayoutProps } from "../api-calls/mainLayout";
import SearchItem from "../components/molecules/SearchItem";
import { API } from "../constants/routes";

const Search = () => {
    const t = useTranslations("search");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const search = router.query.query;
        if (search === undefined) return;
        (async () => {
            const res = await axios.get(BASE_URL + API.SEARCH, {
                params: {
                    search,
                    locale: nextToStrapiLocale(router.locale)
                }
            });
            setData(res.data.data);
            setLoading(false);
        })();
        return () => {
            setLoading(true);
            setData([]);
        };
    }, [router.query.query, setLoading, router.locale]);

    return loading ? (
        <Loading>
            <CircularProgress />
        </Loading>
    ) : (
        <Container>
            <Typography variant="h4">
                {t.rich("results")}: {router.query.query}
            </Typography>
            {!data.length && <Typography>{t.rich("noResults")}</Typography>}
            {data.map((data, index) => (
                <SearchItem key={index} data={data} />
            ))}
        </Container>
    );
};

const Container = styled("div")({
    display: "flex",
    margin: "4rem 10% ",
    width: "80%",
    flexDirection: "column",
    gap: "2rem"
});

const Loading = styled("div")(({ theme }) => ({
    color: theme.color.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh"
}));

export const getStaticProps = async (context) => {
    try {
        const messages = getLocale(context.locale);
        const strapiLocale = nextToStrapiLocale(context.locale);

        const mainLayout = await Promise.resolve(fetchMainLayoutProps({ locale: strapiLocale }));

        return {
            props: {
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

export default memo(Search);
