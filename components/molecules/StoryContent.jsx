import { styled, Typography } from "@mui/material";

const StoryContent = ({ heading, content, footer }) => {
    return (
        <TextContent>
            <Typography variant="h3" sx={{ fontWeight: 900 }}>
                {heading}
            </Typography>
            <Typography sx={{ lineHeight: "2rem" }}>{content}</Typography>
            <FooterText>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                    {footer}
                </Typography>
            </FooterText>
        </TextContent>
    );
};

const FooterText = styled("div")(({ theme }) => ({
    borderLeft: `3px solid ${theme.color.secondary}`,
    paddingLeft: "3rem"
}));

const TextContent = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    justifyContent: "space-between",
    flexBasis: "50%",
    color: theme.color.primary
}));

export default StoryContent;
