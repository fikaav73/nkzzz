import { Paper, styled, Typography } from "@mui/material";
import Link from "next/link";
import { ROUTES } from "../../constants/routes";

const SearchItem = ({ data }) => {
    return (
        <Link
            passHref
            href={(data.attributes?.content ? `${ROUTES.NEWS}/` : "") + data.attributes.slug}
        >
            <a rel="noopener noreferrer">
                <Container elevation={24}>
                    <Typography variant="h6">{data.attributes.title}</Typography>
                    {data.attributes.content && (
                        <Typography variant="p">
                            {data.attributes.content.length > 50
                                ? data.attributes.content.substring(0, 50 - 3) + "..."
                                : data.attributes.content}
                        </Typography>
                    )}
                </Container>
            </a>
        </Link>
    );
};

const Container = styled(Paper)(({ theme }) => ({
    padding: "2rem 3rem",
    display: "flex",
    flexDirection: "column",
    h6: {
        color: theme.color.primary
    },
    transition: "all .5s ease",

    ":hover": {
        transform: "scale(1.01)",
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        transition: "all .5s ease"
    },

    ".MuiTypography-p": {
        margin: "0.5rem 0",
        padding: "1rem",
        borderLeft: `3px solid ${theme.color.secondary}`,
        color: theme.color.secondary
    }
}));

export default SearchItem;
