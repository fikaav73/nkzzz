import { styled, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useCallback, useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import Button from "../atoms/Button";
import Flex from "../styled/Flex.styled";
import Mail from "../styled/icons/Mail.styled";
import Phone from "../styled/icons/Phone.styled";

const SliderContact = (props) => {
    const t = useTranslations("SliderContact");
    const directions = useMemo(() => t.rich("directions"), [t]);

    const handleLocation = useCallback(() => {
        if (!props.googleMapsLink) return;

        let re = props.googleMapsLink.match(/@.+z\//);
        if (!re || !re[0]) return;

        let nan = false;

        re = re[0]
            .replace("@", "")
            .replace("z/", "")
            .split(",")
            .map((item) => {
                let num = Number(item);
                if (!Number.isFinite(num)) nan = true;
                return num;
            });
        if (nan || re.length !== 3) return;

        props.setCenter({
            lat: re[0],
            lng: re[1]
        });
        props.setZoom(re[2]);
    }, [props.googleMapsLink, props.setZoom, props.setCenter]);

    return (
        <Container
            width={props.width}
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap=".5rem"
            margin=".5rem .5rem 2.5rem .5rem"
            hidden={props.hidden}
        >
            <Title>
                <Typography>{props.title}</Typography>
            </Title>
            <Flex direction="column" justifyContent="flex-start" maxWidth="100%" gap=".25rem">
                <Typography>{props.address}</Typography>
                <ContactLink href={"mailto:" + props.contactEmail}>
                    <Mail />
                    <Typography>{props.contactEmail}</Typography>
                </ContactLink>
                <ContactLink href={"tel:" + props.contactPhone}>
                    <Phone />
                    <Typography>{props.contactPhone}</Typography>
                </ContactLink>
            </Flex>
            <Button onClick={handleLocation}>
                <MdLocationPin />
                <Typography>{directions}</Typography>
            </Button>
        </Container>
    );
};

const Container = styled(Flex, {
    shouldForwardProp: (prop) => prop !== "hidden"
})(({ theme, hidden, width }) => ({
    width,
    padding: "1rem",
    minHeight: "200px",
    color: theme.color.primary,
    boxShadow: "0 0 5px 1px rgb(189, 195, 199)",
    visibility: hidden && "hidden"
}));

const Title = styled("div")(({ theme }) => ({
    backgroundColor: theme.color.secondary,
    color: "whitesmoke",
    padding: ".25rem .5rem"
}));

const ContactLink = styled("a")({
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    width: "fit-content"
});

export default SliderContact;
