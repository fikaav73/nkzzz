import { Box, Typography } from "@mui/material";

const PageTitle = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                margin: "3rem 10%"
            }}
        >
            <Typography variant="h3" sx={{ color: (theme) => theme.color.primary }}>
                {props.title}
            </Typography>
        </Box>
    );
};

export default PageTitle;
