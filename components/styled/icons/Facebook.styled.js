import { styled } from "@mui/material";
import { AiFillFacebook } from "react-icons/ai";

const Facebook = styled(AiFillFacebook, {
    shouldForwardProp: (prop) => prop !== "color" && prop !== "hover"
})(({ theme, color, hover }) => ({
    color: color || theme.color.secondary,
    "&:hover": {
        color: hover || "white"
    }
}));

export default Facebook;
