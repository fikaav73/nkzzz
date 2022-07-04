import { styled } from "@mui/material";
import ListItem from "../molecules/ListItem";
import Flex from "../styled/Flex.styled";

const List = (props) => {
    return (
        <Container direction="column">
            {props.list.map((listItem) => (
                <ListItem key={listItem.id} {...listItem} />
            ))}
        </Container>
    );
};

const Container = styled(Flex)({
    width: "90%",
    margin: "0 5% 0 5%",
    borderBottom: "none",
    boxShadow: "0 1px 5px 1px rgb(189, 195, 199)"
});

export default List;
