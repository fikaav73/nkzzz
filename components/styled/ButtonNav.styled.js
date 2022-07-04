import { styled } from "@mui/material";
import Button from "../atoms/Button";

const ButtonNav = styled(Button)(({ left, right }) => ({
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    left,
    right
}));

export default ButtonNav;
