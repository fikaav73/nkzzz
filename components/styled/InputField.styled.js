import { styled, TextField } from "@mui/material";

const InputField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== "textColor"
})(({ theme, padding }) => ({
    backgroundColor: "white",
    width: "100%",
    "& .MuiFilledInput-root, & .MuiOutlinedInput-root": {
        padding,
        "&:hover fieldset": {
            borderColor: theme.color.primaryActive
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.color.primaryHover
        }
    },
    label: {
        padding
    }
}));

InputField.defaultProps = {
    variant: "filled"
};

export default InputField;
