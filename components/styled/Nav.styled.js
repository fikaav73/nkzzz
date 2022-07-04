import { styled } from "@mui/material";

const Nav = styled("nav")({
    position: "sticky",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    zIndex: "3",
    background: "rgba(255,255,255,0.95)",
    boxShadow: "0px 15px 32px -8px rgba(0,0,0,0.45)",

    "& img": {
        height: "3rem"
    },

    "& *": {
        textTransform: "uppercase"
    }
});

export default Nav;
