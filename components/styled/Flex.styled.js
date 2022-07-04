import { styled } from "@mui/material";

const Flex = styled("div", {
    shouldForwardProp: (prop) =>
        prop != "justifyContent" &&
        prop != "alignItems" &&
        prop != "flexDirection" &&
        prop !== "maxWidth" &&
        prop !== "maxHeight" &&
        prop !== "zIndex" &&
        prop !== "minHeight" &&
        prop !== "flexWrap"
})(
    ({
        direction,
        justifyContent,
        alignItems,
        gap,
        position,
        width,
        height,
        border,
        top,
        right,
        left,
        bottom,
        margin,
        maxWidth,
        maxHeight,
        zIndex,
        color,
        flexWrap,
        minHeight
    }) => ({
        display: "flex",
        flexDirection: direction,
        justifyContent,
        alignItems,
        gap,
        position,
        width,
        border,
        height,
        top,
        right,
        left,
        bottom,
        margin,
        maxWidth,
        maxHeight,
        zIndex,
        color,
        flexWrap,
        minHeight
    })
);

Flex.defaultProps = {
    direction: "row"
};

export default Flex;
