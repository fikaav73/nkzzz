import { styled } from "@mui/material";
import { BiChevronRight } from "react-icons/bi";

const NavArrowRight = styled(BiChevronRight)(({ theme }) => ({
    color: theme.color.secondary
}));

export default NavArrowRight;
