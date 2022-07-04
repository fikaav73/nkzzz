import { styled } from "@mui/material";

const OptionsContainer = styled("div")(({ theme }) => ({
    position: "relative",
    cursor: "pointer",
    padding: ".5rem",
    borderRadius: ".25rem",
    width: "88px",
    userSelect: "none",
    "&:hover": {
        backgroundColor: theme.color.primaryHover,
        borderRadius: ".25rem .25rem 0 0"
    },
    "&:hover > .hidden": {
        transform: "translateY(0%) scaleY(1)",
        backgroundColor: theme.color.primaryHover
    }
}));

export default OptionsContainer;
