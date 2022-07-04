import { styled, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useRef } from "react";
import DynamicIcon from "../atoms/DynamicIcon";

const BoxLink = (props) => {
    const boxRef = useRef(null);
    const data = props.page.data?.attributes;

    useEffect(() => {
        if (boxRef.current === null || props.observer === null) return;
        props.observer.observe(boxRef.current);
    }, [boxRef.current, props.observer]);

    return data ? (
        <Link href={"/" + data.slug} passHref={true}>
            <a>
                <Container ref={boxRef}>
                    <DynamicIcon size="2rem" icon={props.iconName} />
                    <Typography variant="h6">{props.page.data.attributes.title}</Typography>
                </Container>
            </a>
        </Link>
    ) : (
        <Container ref={boxRef}>
            <Typography>Page not selected</Typography>
        </Container>
    );
};

const Container = styled("div")(({ theme }) => ({
    transition: "transform 500ms, background-color 200ms linear, color 200ms linear",
    display: "flex",
    justifyContent: "space between",
    alignItems: "center",
    backgroundColor: "white",
    color: theme.color.primary,
    boxShadow: "0 0 5px 1px #d5dade",
    gap: ".5rem",
    padding: "1rem",

    transform: "scale(0)",

    "&:hover": {
        backgroundColor: theme.color.secondary,
        color: "whitesmoke"
    }
}));

export default BoxLink;
