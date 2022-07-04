import { styled, Typography } from "@mui/material";
import Image from "next/image";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import buildURL from "../../utils/urlBuilder";

const ExternalLink = (props) => {
    const image = useMemo(() => {
        if (props.cover.data === null) return false;

        return props.cover.data.attributes.formats?.medium
            ? props.cover.data.attributes.formats?.medium
            : props.cover.data.attributes;
    }, [props.cover]);

    const t = useTranslations("ExternalLinks");
    const click = useMemo(() => t.rich("click"));
    const decorativeImg = t.rich("decorativeImg");

    return (
        <a target="_blank" href={props.url} rel="noreferrer">
            {image ? (
                <ImageContainer>
                    <LabelContainer translate={true} className="label">
                        <Typography variant="h6">{props.label}</Typography>
                        <HelpText variant="body2" className="help-text">
                            {click}
                        </HelpText>
                    </LabelContainer>
                    <Image
                        src={buildURL(image.url)}
                        layout="fill"
                        objectFit="cover"
                        alt={`${decorativeImg} ${props.label}`}
                    />
                </ImageContainer>
            ) : (
                <LabelContainer translate={false} className="label">
                    <Typography variant="h6">{props.label}</Typography>
                    <HelpText variant="body2" className="help-text">
                        {click}
                    </HelpText>
                </LabelContainer>
            )}
        </a>
    );
};

const ImageContainer = styled("div")({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "320px",
    height: "180px",
    cursor: "pointer",
    maxWidth: "100%",
    marginBottom: "1.5rem",

    "&:hover > .label": {
        transform: "translateY(0%)",
        height: "4rem"
    },

    "&:hover .help-text": {
        transform: "scaleY(1)"
    }
});

const LabelContainer = styled("div", {
    shouldForwardProp: (prop) => prop !== "translate"
})(({ theme, translate }) => ({
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 5px 1px rgb(189, 195, 199)",
    color: theme.color.primary,
    zIndex: 1,
    backgroundColor: "whitesmoke",
    padding: ".5rem 1rem .5rem 1rem",

    height: "3rem",
    transition: "transform 200ms, height 250ms",

    position: "relative",
    transform: translate && "translateY(50%)",

    "&:hover .help-text": {
        transform: "scaleY(1)"
    },
    "&:hover": {
        height: "4rem"
    }
}));

const HelpText = styled(Typography)({
    transition: "transform 250ms",
    transform: "scaleY(0)"
});

export default ExternalLink;
