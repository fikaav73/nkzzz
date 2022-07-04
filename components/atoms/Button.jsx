import { Button as MuiButton, styled } from "@mui/material";
import { forwardRef } from "react";
import theme from "../../theme";

const Button = forwardRef((props, ref) => {
    return (
        <ButtonStyled {...props} ref={ref}>
            {props.children}
        </ButtonStyled>
    );
});

Button.displayName = "Button";

const btnColor = new Map([
    [
        "primary",
        {
            bgColor: theme.color.primaryHover,
            bgColorHover: theme.color.primaryActive
        }
    ],
    [
        "secondary",
        {
            bgColor: theme.color.secondary,
            bgColorHover: theme.color.secondaryHover
        }
    ]
]);

const ButtonStyled = styled(MuiButton, {
    shouldForwardProp: (prop) => prop !== "bgColor" && prop !== "borderRadius"
})(({ bgColor, borderRadius }) => {
    return {
        backgroundColor: btnColor.get(bgColor).bgColor,
        borderRadius,
        "&:hover": {
            backgroundColor: btnColor.get(bgColor).bgColorHover
        }
    };
});

Button.defaultProps = {
    variant: "contained",
    bgColor: "primary"
};

export default Button;
