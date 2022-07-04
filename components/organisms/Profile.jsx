import { useTheme } from "@emotion/react";
import { Divider, styled, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Flex from "../styled/Flex.styled";
import Markdown from "../molecules/Markdown";
import buildURL from "../../utils/urlBuilder";

const callback = (element) => {
    element.style.animationName = "scale";
    element.style.animationDuration = "500ms";
};

const Profile = (props) => {
    const image = props.profilePicture.data?.attributes;
    const t = useTranslations("Profile");
    const competence = useMemo(() => t.rich("competence"), [t]);
    const theme = useTheme();
    const imageRef = useRef(null);
    const observer = useIntersectionObserver({ callback });
    const profileImage = t.rich("profileImage");

    useEffect(() => {
        if (imageRef.current === null || observer === null) return;
        observer.observe(imageRef.current);
    }, [imageRef.current, observer]);

    return (
        <Container direction="column" margin=".5rem 5%" gap="2.5rem" ref={imageRef}>
            <Typography variant="h4" alignSelf="center">
                {props.title}
            </Typography>
            <InfoContainer>
                <ImageContainer>
                    <Typography variant="h5" color={theme.color.primary}>
                        {props.fullName}
                    </Typography>
                    {image && (
                        <Image
                            src={buildURL(image.url)}
                            objectFit="cover"
                            width={400}
                            height={300}
                            alt={`${profileImage} ${props.fullName}`}
                        />
                    )}
                </ImageContainer>
                <Markdown text={props.info} />
            </InfoContainer>
            {props.competence && (
                <>
                    <Divider>{competence}</Divider>
                    <Markdown text={props.competence} />
                </>
            )}
        </Container>
    );
};

const Container = styled(Flex)({
    boxShadow: "0 0 10px 1px rgb(207, 210, 212)",
    padding: ".5rem 5%"
});

const InfoContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "@media (min-width: 850px)": {
        display: "block"
    }
});

const ImageContainer = styled("div")({
    position: "relative",
    float: "left",
    marginBottom: ".5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 0 2px 1px rgb(189, 195, 199)",

    "@media (min-width: 850px)": {
        marginRight: "2rem"
    },

    "@keyframes scale": {
        "0%": {
            transform: "translateY(-50%) scaleY(0)"
        },
        "100%": {
            transform: "translateY(0%) scaleY(1)"
        }
    }
});

export default Profile;
