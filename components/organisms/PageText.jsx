import Markdown from "../molecules/Markdown";
import Flex from "../styled/Flex.styled";

const PageText = (props) => {
    return (
        <Flex
            maxWidth="100%"
            margin={"0 5%"}
            sx={{
                "& img": {
                    maxWidth: "100%"
                }
            }}
        >
            <Markdown text={props.text} />
        </Flex>
    );
};

export default PageText;
