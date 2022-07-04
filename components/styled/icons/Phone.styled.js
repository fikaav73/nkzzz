import { styled } from "@mui/material";
import { FiPhoneIncoming } from "react-icons/fi";

const PhoneIcon = styled(FiPhoneIncoming)(({ theme }) => ({
    color: theme.color.secondary
}));

export default PhoneIcon;
