import HeaderStyled from "../styled/Header.styled";
import ChangeLang from "../molecules/ChangeLang";
import SearchField from "../atoms/SearchField";
import VisitCount from "../atoms/VisitCount";
import Flex from "../styled/Flex.styled";

const Header = (props) => (
    <HeaderStyled>
        {props.visits !== false ? <VisitCount visits={props.visits} /> : <div />}
        <Flex flexDirection="column" justifyContent="end" alignItems="center">
            <SearchField />
            <ChangeLang />
        </Flex>
    </HeaderStyled>
);

export default Header;
