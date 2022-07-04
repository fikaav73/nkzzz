import { styled, Typography } from "@mui/material";
import IconLinkSecondary from "../molecules/IconLinkSecondary";

const IconLinksWithText = ({ data }) => {
    return (
        <Container>
            <TextContent>
                <Typography
                    variant="h4"
                    sx={{ color: (theme) => theme.color.primary, fontWeight: 900 }}
                >
                    {data.title}
                </Typography>
                <Typography variant="h6" sx={{ color: "#62718d" }}>
                    {data.text}
                </Typography>
            </TextContent>
            <IconsContainer>
                {data.links.map((e) => (
                    <IconLinkSecondary key={e.id} {...e} />
                ))}
            </IconsContainer>
        </Container>
    );
};

const Container = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    width: "90%",
    margin: "5%",
    flexDirection: "column",

    "@media (min-width: 1000px)": {
        flexDirection: "row"
    }
});

const TextContent = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column"
});
const IconsContainer = styled("div")({
    width: "100%",
    flex: 2,
    display: "grid",
    gap: "2rem",

    "@media (min-width: 700px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)"
    }
});

export default IconLinksWithText;
