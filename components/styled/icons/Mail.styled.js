import { styled } from "@mui/material";
import { FiMail } from "react-icons/fi";

const MailIcon = styled(FiMail)(({ theme }) => ({
    color: theme.color.secondary
}));

export default MailIcon;
