import { Typography, useTheme } from "@mui/material";
import { useEffect, useRef } from "react";
import Flex from "../styled/Flex.styled";
import DynamicIcon from "../atoms/DynamicIcon";
import Markdown from "./Markdown";

const NumericalInfoItem = (props) => {
    const valueRef = useRef(null);
    const theme = useTheme();

    useEffect(() => {
        if (valueRef.current === null || props.observer === null) return;
        props.observer.observe(valueRef.current);
    }, [props.observer, valueRef.current]);

    return (
        <Flex
            zIndex={1}
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            gap=".5rem"
            margin={"3rem"}
        >
            <DynamicIcon size="3rem" icon={props.iconName} color={theme.color.secondary} />
            <Flex alignItems="flex-end">
                <Typography variant="h3" ref={valueRef}>
                    {props.value}
                </Typography>
                <Typography variant="h4">
                    <Markdown text={props.valueType} />
                </Typography>
            </Flex>
            <Typography color="white">{props.label}</Typography>
        </Flex>
    );
};

export default NumericalInfoItem;
