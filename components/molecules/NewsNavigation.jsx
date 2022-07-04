import NavArrowRight from "../styled/icons/NavArrowRight";
import NavArrowLeft from "../styled/icons/NavArrowLeft";
import Link from "next/link";

import { styled } from "@mui/material";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { ROUTES } from "../../constants/routes";

const NewsNavigation = ({ prev, next }) => {
    const t = useTranslations("news");
    const [prevText, nextText] = useMemo(() => [t.rich("previous"), t.rich("next")], [t]);

    return (
        <Container>
            <div>
                {prev && (
                    <Link href={`${ROUTES.NEWS}/${prev.attributes.slug}`} passHref>
                        <a rel="noopener noreferrer" aria-label={prev.attributes.title}>
                            <NavigationBox
                                sx={{ justifyContent: "start" }}
                                text={prevText}
                                textOnHover={prev.attributes.title}
                            >
                                <NavArrowLeft size="2.5rem" />
                                <p />
                            </NavigationBox>
                        </a>
                    </Link>
                )}
            </div>
            <Link href={ROUTES.NEWS_PAGE_START} passHref>
                <NewsHome rel="noopener noreferrer">{t("all")}</NewsHome>
            </Link>
            <div>
                {next && (
                    <Link href={`${ROUTES.NEWS}/${next.attributes.slug}`} passHref>
                        <a rel="noopener noreferrer" aria-label={next.attributes.title}>
                            <NavigationBox
                                sx={{ justifyContent: "end" }}
                                text={nextText}
                                textOnHover={next.attributes.title}
                            >
                                <p />
                                <NavArrowRight size="2.5rem" />
                            </NavigationBox>
                        </a>
                    </Link>
                )}
            </div>
        </Container>
    );
};

const Container = styled("div")({
    display: "grid",
    gridTemplateColumns: "3fr 1fr 3fr"
});

const NewsHome = styled("a")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    position: "relative",

    "&:hover": {
        color: theme.color.secondary
    },

    "&:hover::after": {
        animation: "Underline 300ms ease forwards"
    },

    "&::after": {
        position: "absolute",
        bottom: "1rem",
        content: "''",
        height: "3px",
        background: theme.color.secondary,
        animation: "RemoveUnderline 300ms ease forwards"
    }
}));

const NavigationBox = styled("div", {
    shouldForwardProp: (prop) => prop !== "text" && prop !== "textOnHover"
})(({ theme, text, textOnHover }) => ({
    "@keyframes Spread": {
        from: {
            gap: "0"
        },
        to: {
            gap: "2rem"
        }
    },
    "@keyframes Shrink": {
        from: {
            gap: "2rem"
        },
        to: {
            gap: "0"
        }
    },

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // animation: "Shrink 150ms ease-in forwards",
    height: "100%",

    "& p": {
        maxWidth: "70%"
    },

    "&:hover": {
        color: theme.color.secondary
        // animation: "Spread 150ms ease-in forwards"
    },

    "& p:after": {
        content: `'${text}'`
    },
    "&:hover p:after": {
        content: `'${textOnHover}'`
    }
}));

export default NewsNavigation;
