import { styled } from "@mui/material";
import { ImLocation } from "react-icons/im";

const LocationIcon = styled(ImLocation)(({ theme }) => ({
    color: theme.color.secondary
}));

export default LocationIcon;
