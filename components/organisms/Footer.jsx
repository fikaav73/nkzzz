import { styled } from "@mui/material";

import FooterContacts from "../molecules/FooterContacts";
import FooterLinks from "../molecules/FooterLinks";
import FooterNews from "../molecules/FooterNews";
import FooterCopyright from "../molecules/FooterCopyright";

const Footer = (props) => (
    <Container>
        <Content>
            <FooterContacts
                address={props.address}
                workingHours={props.workingHours}
                contactPhone={props.contactPhone}
                contactEmail={props.contactEmail}
            />
            <FooterLinks links={props.links} />
            <FooterNews />
        </Content>
        <FooterCopyright
            facebook={props.facebookPage}
            instagram={props.instagramPage}
            youtube={props.youtubeChannel}
        />
    </Container>
);

const Container = styled("footer")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.color.primary,
    color: theme.color.textOnPrimary,
    paddingTop: "5rem",

    "& > :first-of-type": {
        marginBottom: "5rem"
    },
    "& > *": {
        width: "80%"
    }
}));

const Content = styled("div")({
    display: "grid",
    marginBottom: "2rem",
    gap: "3rem",
    "@media (max-width: 950px)": {
        gridTemplateAreas: "'news''links''contact'"
    },

    "@media (max-width: 1200px) and (min-width: 950px)": {
        gridTemplateAreas: "'news news' 'contact links'"
    },
    "@media (min-width: 1200px)": {
        gridTemplateAreas: "'contact links news'"
    },

    "& > :last-child": {
        alignItems: "center"
    }
});

export default Footer;
