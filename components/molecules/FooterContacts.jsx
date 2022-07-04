import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Flex from "../styled/Flex.styled";
import FooterDiv from "../styled/FooterDiv.styled";
import LocationIcon from "../styled/icons/Location.styled";
import MailIcon from "../styled/icons/Mail.styled";
import PhoneIcon from "../styled/icons/Phone.styled";
import TimeIcon from "../styled/icons/Time.styled";

const FooterContacts = ({ address, workingHours, contactPhone, contactEmail }) => {
    const t = useTranslations("footer");

    return (
        <FooterDiv sx={{ gridArea: "contact" }}>
            <Typography variant="h5" ml="2.5rem" mb="1rem">
                {t("contact.heading")}
            </Typography>
            <Flex gap="1rem" alignItems="center">
                <LocationIcon size="1.5rem" />
                <Typography>{address}</Typography>
            </Flex>
            <Flex gap="1rem" alignItems="center">
                <TimeIcon size="1.5rem" />
                <Typography>{workingHours}</Typography>
            </Flex>
            <Flex gap="1rem" alignItems="center">
                <PhoneIcon size="1.5rem" />
                <Typography>
                    <a href={`tel:${contactPhone}`}>{contactPhone}</a>
                </Typography>
            </Flex>
            <Flex gap="1rem" alignItems="center">
                <MailIcon size="1.5rem" />
                <Typography>
                    <Link href={`mailto:${contactEmail}`} passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            {contactEmail}
                        </a>
                    </Link>
                </Typography>
            </Flex>
        </FooterDiv>
    );
};

export default FooterContacts;
