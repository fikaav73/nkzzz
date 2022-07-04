import { styled } from "@mui/material";

const Header = styled("header")(({ theme }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: ".5rem",
    backgroundColor: theme.color.primary,
    color: theme.color.textOnPrimary,
    height: "3rem",
    padding: "0 1rem"
}));

export default Header;
