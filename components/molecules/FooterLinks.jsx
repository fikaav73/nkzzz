import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Flex from "../styled/Flex.styled";
import FooterDiv from "../styled/FooterDiv.styled";
import NavArrowRight from "../styled/icons/NavArrowRight";

const FooterLinks = ({ links }) => {
    const t = useTranslations("footer");

    return (
        <FooterDiv sx={{ gridArea: "links" }}>
            <Typography variant="h5" ml="2.5rem" mb="1rem">
                {t("usefulLinks.heading")}
            </Typography>
            {links.map((link) => (
                <Flex key={link.id} alignItems="center" gap="1rem">
                    <NavArrowRight size="1.5rem" />
                    <Typography>
                        <a target="_blank" href={link.url} rel="noreferrer">
                            {link.label}
                        </a>
                    </Typography>
                </Flex>
            ))}
        </FooterDiv>
    );
};

export default FooterLinks;
