import { Box, Paper } from "@mui/material";
import Markdown from "./Markdown";

const TextTableRow = ({ firstField, secondField }) => {
    return (
        <Paper
            elevation={6}
            sx={{
                display: "flex",
                flexDirection: { lg: "unset", xs: "column" },
                padding: "1rem 2rem",
                width: "80%",
                marginLeft: "10%",
                color: (theme) => theme.color.primary
            }}
        >
            <Box sx={{ maxWidth: "30%", padding: "1rem" }}>
                <Markdown text={firstField} />
            </Box>
            <Box
                sx={{
                    width: { lg: "10px", xs: "unset" },
                    height: { lg: "unset", xs: "10px" },
                    background: (theme) => theme.color.secondary,
                    flexShrink: 0
                }}
            ></Box>
            <Box sx={{ padding: "1rem" }}>
                <Markdown text={secondField} />
            </Box>
        </Paper>
    );
};

export default TextTableRow;
