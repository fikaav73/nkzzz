import { styled } from "@mui/material";
import Image from "next/image";
import buildURL from "../../utils/urlBuilder";

const StoryImages = ({ lgImg, leftImg, rightImg }) => {
    return (
        <ImageContainer>
            <LargeImg>
                <Image src={buildURL(lgImg)} objectFit="cover" layout="fill" alt="" />
            </LargeImg>
            <SmallImgLeft>
                <Image src={buildURL(leftImg)} objectFit="cover" layout="fill" alt="" />
            </SmallImgLeft>
            <SmallImgRight>
                <Image src={buildURL(rightImg)} objectFit="cover" layout="fill" alt="" />
            </SmallImgRight>
        </ImageContainer>
    );
};

const ImageContainer = styled("div")({
    minHeight: "400px",
    flex: 1,
    display: "grid",
    gridTemplateAreas: "'lg lg' 'sm1 sm2'",
    gridTemplateRows: "3fr 1fr",
    gap: ".5rem",
    borderRadius: "10% 0 10% 0",
    overflow: "hidden",

    "@media (max-width: 1100px)": {
        gridTemplateAreas: "'lg sm1 sm2'",
        gridTemplateRows: "1fr"
    },

    "@media (max-width: 800px)": {
        borderRadius: "5%",
        gridTemplateAreas: "'lg''sm1''sm2'",
        gridTemplateRows: "repeat(3, 10rem)"
    }
});

const LargeImg = styled("div")({
    position: "relative",
    gridArea: "lg"
});

const SmallImgLeft = styled("div")({
    position: "relative",
    gridArea: "sm1"
});

const SmallImgRight = styled("div")({
    position: "relative",
    gridArea: "sm2"
});

export default StoryImages;
