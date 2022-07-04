import { styled } from "@mui/material";

const LangItemContainer = styled("div")(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.color.primary
    },
    "&:active": {
        backgroundColor: theme.color.primaryActive
    },
    height: "2rem",
    borderRadius: ".25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}));

export default LangItemContainer;
