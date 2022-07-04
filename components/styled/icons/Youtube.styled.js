import { styled } from "@mui/material";
import { ImYoutube } from "react-icons/im";

const Youtube = styled(ImYoutube)(({ theme }) => ({
    color: theme.color.secondary,
    "&:hover": {
        color: "white"
    }
}));

export default Youtube;
