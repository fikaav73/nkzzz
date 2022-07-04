import { styled } from "@mui/material";

const HiddenOptions = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    top: "100%",
    height: "auto",
    left: 0,
    width: "100%",
    zIndex: 4,
    borderRadius: "0 0 .25rem .25rem",
    backgroundColor: theme.color.primary,

    transition: "transform 250ms",
    transform: "translateY(-50%) scaleY(0)"
}));

export default HiddenOptions;
