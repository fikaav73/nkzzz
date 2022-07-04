import { styled } from "@mui/material";

const FooterDiv = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: "1rem",

    "& a:hover": {
        color: theme.color.secondary
    },

    "@media (max-width: 950px)": {
        margin: "0 15vw"
    },

    "@media (max-width: 700px)": {
        margin: "0 10vw"
    }
}));

export default FooterDiv;
