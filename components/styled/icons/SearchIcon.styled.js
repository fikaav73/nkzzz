import { styled } from "@mui/material";
import { FiSearch } from "react-icons/fi";

const SearchIcon = styled(FiSearch)(({ theme }) => ({
    position: "absolute",
    left: ".5rem",
    color: "black",
    zIndex: 1,
    fontSize: theme.iconSize
}));

export default SearchIcon;
