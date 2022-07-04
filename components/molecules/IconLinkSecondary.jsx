import { styled, Typography } from "@mui/material";
import Link from "next/link";
import DynamicIcon from "../atoms/DynamicIcon";

const IconLinkSecondary = ({ Text, IconName, Page }) => {
    let content = (
        <Typography
            variant="h4"
            sx={{
                textTransform: "uppercase",
                color: (theme) => theme.color.primary
            }}
        >
            {Text}
        </Typography>
    );

    if (Page.data?.attributes.slug !== undefined) {
        content = (
            <Link href={`/${Page.data?.attributes.slug}`} passHref>
                <a rel="noopener noreferrer">
                    <Typography
                        variant="h4"
                        sx={{
                            textTransform: "uppercase",
                            color: (theme) => theme.color.primary
                        }}
                    >
                        {Text}
                    </Typography>
                </a>
            </Link>
        );
    }

    return (
        <Container>
            <InnerContainer>
                <DynamicIcon size="2.5rem" icon={IconName} className="top-icon" />
                {content}
                <DynamicIcon icon={IconName} size="2.5rem" className="bottom-icon" />
            </InnerContainer>
        </Container>
    );
};

const Container = styled("div")(({ theme }) => ({
    padding: "2rem",
    border: "1px solid rgba(32, 43, 93, 0.1)",
    overflow: "hidden",
    boxShadow: "none",
    transition: ".5s ease",
    "&:hover": {
        transition: ".5s ease"
    },
    "&:hover > *": {
        transform: "translate(0, -4rem) ",
        transition: "500ms ease"
    },
    "&:hover .top-icon": {
        opacity: 0,
        transition: "500ms ease"
    },
    "&:hover .bottom-icon": {
        opacity: 1,
        transition: "500ms ease"
    },
    "& .top-icon": {
        position: "absolute",
        top: 0,
        left: 0,
        transition: "500ms ease",
        color: theme.color.secondary
    },
    "& .bottom-icon": {
        position: "absolute",
        bottom: 0,
        right: 0,
        opacity: 0,
        color: "rgba(32, 43, 93, 0.1)",
        transition: "500ms ease"
    }
}));

const InnerContainer = styled("div")({
    position: "relative",
    paddingTop: "3rem",
    height: "calc(100% + 2.5rem)",
    overflow: "hidden",
    transition: "500ms ease"
});

export default IconLinkSecondary;
