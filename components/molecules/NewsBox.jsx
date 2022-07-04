import { styled, Typography } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";
import { ROUTES } from "../../constants/routes";

const NewsBox = ({ news }) => {
    const date = news.attributes.publishedAt;
    const [day, month, year] = useMemo(() => {
        const tempDate = new Date(date);
        return [tempDate.getDate(), tempDate.getMonth() + 1, tempDate.getFullYear()];
    }, [date]);

    return (
        <NewsContainer>
            <OverflowContainer>
                <Link href={`${ROUTES.NEWS}/${news.attributes.slug}`} passHref={true}>
                    <a>
                        <NewsDate>
                            <Typography>{day + "/" + month + "/" + year}</Typography>
                        </NewsDate>
                        <NewsContent className="content">
                            <Typography variant="h5">{news.attributes.title}</Typography>
                        </NewsContent>
                    </a>
                </Link>
            </OverflowContainer>
        </NewsContainer>
    );
};

const OverflowContainer = styled("div")({
    maxHeight: "100%",
    width: "100%",
    overflow: "hidden",
    paddingLeft: "2rem",
    textAlign: "left"
});

const NewsContainer = styled("div", {
    shouldForwardProp: (prop) => prop !== "marginTop" && prop !== "backgroundColor"
})(({ theme, width, height, margin }) => ({
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
    position: "relative",
    padding: "2rem 1rem 2rem 0",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    backgroundColor: "white",
    width: width || "100%",

    height,
    margin,

    "&:hover .content:after": {
        height: "100%"
    },

    "& .content:after": {
        height: "0%",
        transition: "height 200ms",
        position: "absolute",
        left: "-1rem",
        top: 0,
        content: "''",
        background: theme.color.secondary,
        width: "3px"
    },

    "&::after": {
        position: "absolute",
        top: "-0.25rem",
        right: "-4px",
        width: "calc(100% - 4px)",
        height: "calc(100% - 0.75rem)",
        content: "''",
        border: "4px solid " + theme.color.secondary
    },

    "& > *": {
        zIndex: 1
    }
}));

const NewsDate = styled("div")(({ theme }) => ({
    position: "absolute",
    top: 0,
    color: "white",
    background: theme.color.primary,
    padding: "0.5rem",
    transform: "translate(0, -50%)",
    borderRadius: "0.5rem"
}));

const NewsContent = styled("div")(({ theme }) => ({
    position: "relative",
    color: theme.color.primary,

    "&:hover": {
        color: theme.color.secondary,
        cursor: "pointer"
    }
}));

export default NewsBox;
