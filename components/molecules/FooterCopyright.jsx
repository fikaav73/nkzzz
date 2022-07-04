import { styled, Typography } from "@mui/material";

import Flex from "../styled/Flex.styled";
import Facebook from "../styled/icons/Facebook.styled";
import Instagram from "../styled/icons/Instagram.styled";
import Youtube from "../styled/icons/Youtube.styled";

const FooterCopyright = ({ facebook, instagram, youtube }) => {
    return (
        <Container>
            <Flex justifyContent="space-between">
                <Typography>Opština Nikšić © 2022</Typography>
                <Icons>
                    <a
                        href={facebook}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook logo link"
                    >
                        <Facebook size="2rem" />
                    </a>
                    <a
                        href={instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram logo link"
                    >
                        <Instagram size="2rem" />
                    </a>
                    <a
                        href={youtube}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Youtube logo link"
                    >
                        <Youtube size="2rem" />
                    </a>
                </Icons>
            </Flex>
        </Container>
    );
};

const Container = styled("div")(({ theme }) => ({
    width: "80%",
    padding: "1rem 0",
    backgroundColor: theme.color.primary,
    color: theme.color.textOnPrimary,
    position: "relative",
    "&::before": {
        position: "absolute",
        content: "''",
        top: 0,
        height: "2px",
        width: "100%",
        backgroundColor: theme.color.secondary,
        left: 0
    }
}));

const Icons = styled("div")({
    width: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
});

export default FooterCopyright;
