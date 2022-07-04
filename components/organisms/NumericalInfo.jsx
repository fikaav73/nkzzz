import Image from "next/image";
import count from "../../animations/count";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import buildURL from "../../utils/urlBuilder";
import NumericalInfoItem from "../molecules/NumericalInfoItem";
import Flex from "../styled/Flex.styled";

const callback = (element) => count(element, 0, new Number(element.innerHTML), 2500);

const NumericalInfo = (props) => {
    const observer = useIntersectionObserver({ callback });

    return (
        <Flex
            width="100%"
            minHeight={props.background.data.attributes.height}
            position="relative"
            justifyContent="space-evenly"
            alignItems="center"
            flexWrap="wrap"
        >
            {props.info.map((infoItem) => (
                <NumericalInfoItem key={infoItem.id} {...infoItem} observer={observer} />
            ))}

            <Image
                layout="fill"
                src={buildURL(props.background.data.attributes.url)}
                objectFit="cover"
                alt=""
            />
        </Flex>
    );
};

export default NumericalInfo;
