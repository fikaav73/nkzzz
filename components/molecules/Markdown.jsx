import { Link, styled, Typography } from "@mui/material";
import React from "react";
import MarkdownToJSX from "markdown-to-jsx";

const Markdown = (props) => {
    return (
        props.text && (
            <MarkdownToJSX
                options={{
                    overrides: {
                        h1: MuiH2,
                        h2: MuiH3,
                        h3: MuiH4,
                        h4: MuiH5,
                        h5: MuiH6,
                        h6: MuiBody,
                        a: Link,
                        center: Center
                    }
                }}
            >
                {props.text}
            </MarkdownToJSX>
        )
    );
};

const Center = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center"
});

const MuiBody = ({ children, ...rest }) => (
    <Typography variant="body1" {...rest}>
        {children}
    </Typography>
);
const MuiH2 = ({ children, ...rest }) => (
    <Typography variant="h2" {...rest}>
        {children}
    </Typography>
);
const MuiH3 = ({ children, ...rest }) => (
    <Typography variant="h3" {...rest}>
        {children}
    </Typography>
);
const MuiH4 = ({ children, ...rest }) => (
    <Typography variant="h4" {...rest}>
        {children}
    </Typography>
);
const MuiH5 = ({ children, ...rest }) => (
    <Typography variant="h5" {...rest}>
        {children}
    </Typography>
);
const MuiH6 = ({ children, ...rest }) => (
    <Typography variant="h6" {...rest}>
        {children}
    </Typography>
);

export default Markdown;
