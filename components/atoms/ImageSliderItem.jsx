import { styled, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { memo } from "react";
import ImageContainer from "../styled/ImageContainer";

const ImageSliderItem = (props) => {
    const t = useTranslations("Helpers");
    const imageFor = t.rich("imageFor");

    return (
        <ImageContainer>
            {props.title && (
                <Title variant="h3" color="whitesmoke">
                    {props.title}
                </Title>
            )}
            <Image
                src={props.url}
                layout="fill"
                objectFit="cover"
                alt={`${imageFor} ${props.title}`}
            />
        </ImageContainer>
    );
};

const Title = styled(Typography)({
    position: "relative",
    zIndex: 1,
    margin: ".5rem",
    textShadow: "1px  1px black"
});

export default memo(ImageSliderItem);
