import { styled } from "@mui/material";
import IconLink from "../molecules/IconLink";

const IconNav = ({ data }) => {
    const links = data.map((e) => ({
        icon: e.IconName,
        text: e.Text,
        url: "/" + e.Page.data?.attributes.slug
    }));

    return (
        <Container>
            <IconContainer>
                {links.map((e, i) => {
                    return <IconLink key={i} {...e} />;
                })}
            </IconContainer>
        </Container>
    );
};

const Container = styled("div")(({ theme }) => ({
    background: theme.color.primary,
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    paddingTop: "3rem"
}));

const IconContainer = styled("div")({
    gridTemplateRows: "repeat(6, 1fr)",
    display: "grid",
    marginTop: "-3rem",
    gap: "1rem",
    background: "white",
    padding: "1rem",

    "@media(min-width: 800px) and (max-width:1250px)": {
        gridTemplateRows: "repeat(2, 1fr)",
        gridTemplateColumns: "repeat(3, 1fr)"
    },

    "@media(min-width:1250px)": {
        gridTemplateRows: "1fr",
        gridTemplateColumns: "repeat(6, 1fr)"
    }
});

export default IconNav;
