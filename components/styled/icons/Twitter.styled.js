import { styled } from "@mui/material";
import { AiFillTwitterCircle } from "react-icons/ai";

const Twitter = styled(AiFillTwitterCircle, {
    shouldForwardProp: (prop) => prop !== "size"
})(({ theme, size }) => ({
    backgroundColor: "white",
    color: "#1DA1F2",
    fontSize: size || "4rem",
    "&:hover": {
        color: theme.color.secondary
    }
}));

export default Twitter;
