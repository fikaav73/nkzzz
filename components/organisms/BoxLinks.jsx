import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import BoxLink from "../molecules/BoxLink";
import Flex from "../styled/Flex.styled";

const callback = (element) => (element.style.transform = "scale(1)");

const BoxLinks = (props) => {
    const observer = useIntersectionObserver({ callback });

    return (
        <Flex justifyContent="center" alignItems="center" gap="2rem" flexWrap="wrap">
            {props.links.map((link) => (
                <BoxLink key={link.id} {...link} observer={observer} />
            ))}
        </Flex>
    );
};

export default BoxLinks;
