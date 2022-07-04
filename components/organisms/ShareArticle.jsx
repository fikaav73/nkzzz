import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import Flex from "../styled/Flex.styled";
import Facebook from "../styled/icons/Facebook.styled";
import LinkedIn from "../styled/icons/LinkedIn.styled";
import Twitter from "../styled/icons/Twitter.styled";

const ShareArticle = (props) => {
    const theme = useTheme();
    const t = useTranslations();
    const share = useMemo(() => t.rich("share"), [t]);

    return (
        <Flex direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h4">{share}</Typography>
            <Flex>
                <a
                    href={`https://twitter.com/share?url=${props.url}&text=${props.title}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Twitter />
                </a>
                <a
                    href={`http://www.facebook.com/sharer.php?u=${props.url}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Facebook color="#4267B2" hover={theme.color.secondary} size="4rem" />
                </a>

                <a
                    href={`https://www.linkedin.com/shareArticle?url=${props.url}&title=${props.title}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedIn />
                </a>
            </Flex>
        </Flex>
    );
};

export default ShareArticle;
