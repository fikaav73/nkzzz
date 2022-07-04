import { styled } from "@mui/material";
import Image from "next/image";
import NewsBox from "../molecules/NewsBox";
import Flex from "../styled/Flex.styled";
import MoreNews from "../molecules/MoreNews";
import { useMemo } from "react";
import Carousel from "../molecules/Carousel";

const SliderLatestNews = (props) => {
    const latestNewsStacked = useMemo(() => {
        let latestStacked = [];

        let i = 0;
        let overflow = false;
        while (!overflow && i < props.latestNews.length) {
            let stacked = [props.latestNews[i]];
            i++;

            for (let j = 0; j < props.perStack - 1; j++) {
                if (i >= props.latestNews.length) {
                    latestStacked.push({ id: i, news: stacked });
                    overflow = true;
                    break;
                }
                stacked.push(props.latestNews[i]);
                i++;
            }
            if (!overflow) latestStacked.push({ id: i, news: stacked });
        }

        return latestStacked;
    }, [props.latestNews, props.latestNews.perStack]);

    return (
        <Flex
            position="relative"
            justifyContent="flex-start"
            alignItems="center"
            minHeight={props.backgroundImage.data.attributes.height}
        >
            <Container>
                <MoreNews />

                <Carousel width={350}>
                    {latestNewsStacked.map((stacked) => (
                        <Flex key={stacked.id} direction="column" gap="2rem" margin="2rem">
                            {stacked.news.map((news) => (
                                <NewsBox key={news.id} news={news} />
                            ))}
                        </Flex>
                    ))}
                </Carousel>
            </Container>
            {props.backgroundImage.data && (
                <Image
                    src={props.backgroundImage.data.attributes.url}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                />
            )}
        </Flex>
    );
};

const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
    zIndex: 2,

    "@media (min-width: 800px)": {
        flexDirection: "row"
    }
});

export default SliderLatestNews;
