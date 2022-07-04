import { styled } from "@mui/material";
import { BiTime } from "react-icons/bi";

const TimeIcon = styled(BiTime)(({ theme }) => ({
    color: theme.color.secondary
}));

export default TimeIcon;
