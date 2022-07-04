import { styled } from "@mui/material";
import SimpleIconLink from "../atoms/SimpleIconLink";

const SimpleIconLinks = ({ data }) => {
    return (
        <Container>
            {data.icon.map((e) => (
                <SimpleIconLink
                    key={e.id}
                    icon={e.IconName}
                    link={e.Page.data?.attributes.slug}
                    label={e.Page.data?.attributes.slug}
                />
            ))}
        </Container>
    );
};

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "3rem 0",
    gap: "2rem",

    "& button": { position: "relative", padding: "1rem", color: "white", transition: "0.3s" },
    "& button::after": {
        transition: "0.3s",
        position: "absolute",
        content: "''",
        padding: "1rem",
        background: theme.color.secondary,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        top: 0,
        left: 0,
        zIndex: -1
    },
    "& button:hover": {
        color: theme.color.secondary,
        boxShadow: `0 0 0 3px ${theme.color.secondary}`,
        transition: "0.3s"
    },
    "& button:hover::after": {
        transform: "scale(0)",
        opacity: "0",
        transition: "transform 0.4s, opacity 0.2s"
    }
}));

export default SimpleIconLinks;
