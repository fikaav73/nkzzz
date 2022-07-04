import { styled } from "@mui/material";
import StoryContent from "../molecules/StoryContent";
import StoryImages from "../molecules/StoryImages";

const StoryText = ({ data }) => {
    return (
        <Container>
            <StoryContent heading={data.heading} content={data.content} footer={data.footer} />
            <StoryImages
                lgImg={data.largeImage.data.attributes.url}
                leftImg={data.leftImage.data.attributes.url}
                rightImg={data.rightImage.data.attributes.url}
            />
        </Container>
    );
};

const Container = styled("div")({
    display: "flex",
    gap: "3rem",
    padding: "5% 10%",
    "@media (max-width: 1100px)": {
        flexDirection: "column"
    }
});

export default StoryText;
