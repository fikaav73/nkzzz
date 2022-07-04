import { styled } from "@mui/material";
import { AiFillLinkedin } from "react-icons/ai";

const LinkedIn = styled(AiFillLinkedin, {
    shouldForwardProp: (prop) => prop !== "size"
})(({ theme, size }) => ({
    backgroundColor: "white",
    color: "#0077b5",
    fontSize: size || "4rem",
    "&:hover": {
        color: theme.color.secondary
    }
}));

export default LinkedIn;
