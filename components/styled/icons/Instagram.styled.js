import { styled } from "@mui/material";
import { FiInstagram } from "react-icons/fi";

const Instagram = styled(FiInstagram)(({ theme }) => ({
    color: theme.color.secondary,
    "&:hover": {
        color: "white"
    }
}));

export default Instagram;
