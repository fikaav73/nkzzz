import ExternalLink from "../molecules/ExternalLink";
import Flex from "../styled/Flex.styled";

const ExternalLinks = (props) => {
    return (
        <Flex gap="1rem" flexWrap="wrap" justifyContent="space-evenly" alignItems="center">
            {props.links.map((link) => (
                <ExternalLink key={link.id} {...link} />
            ))}
        </Flex>
    );
};

export default ExternalLinks;
