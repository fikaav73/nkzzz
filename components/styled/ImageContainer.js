import { styled } from "@mui/material";

const ImageContainer = styled("div", {
    shouldForwardProp: (prop) => prop !== "scrollWidth"
})({
    "@media (min-width: 1080px) and (max-height: 1080px)": {
        height: "calc(100vh - 190px)"
    },
    display: "flex",
    justifyContent: "center",
    position: "relative",
    height: "60vh",
    width: "100vw"
});

export default ImageContainer;
