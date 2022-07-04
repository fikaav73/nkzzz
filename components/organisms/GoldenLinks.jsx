import { styled, Typography } from "@mui/material";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const GoldenLinks = ({ data }) => {
    return (
        <Container>
            <BlueBackground />
            <LinkContainer>
                {data.links.map((e) => (
                    <a key={e.id} href={e.url} target="_blank" rel="noopener noreferrer">
                        <Typography variant="h6" sx={{ lineHeight: "2.5rem" }}>
                            {e.label}
                        </Typography>
                        <MdArrowForwardIos size={"1.5rem"} />
                    </a>
                ))}
                {data.pages.data.map((e) => (
                    <Link key={e.id} href={"/" + e.attributes.slug}>
                        <a target="_blank" rel="noopener noreferrer">
                            <Typography variant="h6" sx={{ lineHeight: "2.5rem" }}>
                                {e.attributes.title}
                            </Typography>
                            <MdArrowForwardIos size={"1.5rem"} />
                        </a>
                    </Link>
                ))}
            </LinkContainer>
        </Container>
    );
};

const Container = styled("div")({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    margin: "3rem 0"
});

const BlueBackground = styled("div")(({ theme }) => ({
    background: theme.color.primary,
    position: "absolute",
    width: "100%",
    height: "80%",
    zIndex: -1
}));

const LinkContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "80%",
    marginTop: "3rem",
    background: theme.color.secondary,
    color: "white",
    padding: "4rem 3rem",

    "& > *": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme.color.secondary,
        transition: ".5s ease-out",
        paddingLeft: "1rem",
        borderBottom: "1px solid white",
        position: "relative"
    },

    "& > *:hover": {
        background: "white",
        color: theme.color.secondary
    }
}));

export default GoldenLinks;
