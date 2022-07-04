import { styled } from "@mui/material";
import { BiChevronLeft } from "react-icons/bi";

const NavArrowLeft = styled(BiChevronLeft)(({ theme }) => ({
    color: theme.color.secondary
}));

export default NavArrowLeft;
