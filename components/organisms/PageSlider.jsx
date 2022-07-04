import buildURL from "../../utils/urlBuilder";
import ImageSliderItem from "../atoms/ImageSliderItem";
import Carousel from "../molecules/Carousel";

const PageSlider = (props) => {
    return (
        <Carousel showArrows={false}>
            {props.slide.map((item) => {
                return (
                    <ImageSliderItem
                        key={item.id}
                        url={buildURL(item.image.data.attributes.url)}
                        alt={item.image.data.attributes.alternativeText}
                        title={item.title}
                    />
                );
            })}
        </Carousel>
    );
};

export default PageSlider;
