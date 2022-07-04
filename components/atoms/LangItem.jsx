import { Typography } from "@mui/material";
import { useCallback } from "react";
import LangItemContainer from "../styled/LangItemContainer.styled";

const LangItem = (props) => {
    const handleClick = useCallback(() => {
        props.onClick(props.lang);
    }, [props]);

    return (
        <LangItemContainer onClick={handleClick}>
            <Typography className="lang">{props.lang}</Typography>
        </LangItemContainer>
    );
};

export default LangItem;
