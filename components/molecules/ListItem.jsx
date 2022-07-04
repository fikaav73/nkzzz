import { styled, Typography } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import Field from "../atoms/Field";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Flex from "../styled/Flex.styled";
import useWindowResize from "../../hooks/useWindowResize";

const ListItem = (props) => {
    const childrenRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [height, setHeight] = useState(null);
    const arrowRef = useRef(null);

    useWindowResize(() => {
        if (childrenRef.current === null) return;
        setHeight(childrenRef.current.clientHeight);
    }, [childrenRef.current]);

    const showChidlren = useCallback(() => {
        if (childrenRef.current === null || arrowRef.current === null) return;

        if (visible) {
            childrenRef.current.style.transform = "translateY(-50%) scaleY(0)";
            arrowRef.current.style.transform = "rotate(0deg)";
            setVisible(false);
        } else {
            childrenRef.current.style.transform = "translateY(0%) scaleY(1)";
            arrowRef.current.style.transform = "rotate(90deg)";
            setVisible(true);
        }
    }, [childrenRef.current, visible, setVisible, setHeight, arrowRef.current]);

    return (
        <Parent chidlrenHeight={visible && height}>
            <Container
                alignItems="center"
                gap="1rem"
                onClick={showChidlren}
                visibleChildren={visible}
            >
                <Arrow ref={arrowRef}>
                    <BsFillArrowRightCircleFill />
                </Arrow>
                <Typography>{props.label}</Typography>
            </Container>
            <Children className="children" ref={childrenRef}>
                {props.fields.map((field) => (
                    <Field key={field.id} {...field} />
                ))}
            </Children>
        </Parent>
    );
};

const Parent = styled("div", {
    shouldForwardProp: (prop) => prop !== "chidlrenHeight"
})(({ theme, chidlrenHeight }) => ({
    position: "relative",
    transition: "padding-bottom 500ms",
    paddingBottom: chidlrenHeight,

    backgroundColor: "white",
    color: theme.color.primary
}));

const Children = styled("div")({
    position: "absolute",
    transition: "transform 500ms",
    transform: "translateY(-50%) scaleY(0)",
    padding: ".5rem",
    borderBottom: "1px solid rgb(189, 195, 199)",
    width: "100%",
    backgroundColor: "whitesmoke",
    paddingBottom: "5px"
});

const Container = styled(Flex, {
    shouldForwardProp: (prop) => prop !== "visibleChildren"
})(({ theme, visibleChildren }) => ({
    color: visibleChildren && theme.color.secondary,
    cursor: "pointer",
    borderBottom: !visibleChildren && "1px solid rgb(189, 195, 199)",
    padding: ".5rem"
}));

const Arrow = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 500ms",
    fontSize: "1.5rem"
});

export default ListItem;
