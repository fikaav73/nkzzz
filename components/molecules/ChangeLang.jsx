import OptionsContainer from "../styled/OptionsContainer.styled";
import LangCurrent from "../atoms/LangCurrent";
import LangOthers from "../atoms/LangOthers";
import { memo } from "react";

const ChangeLang = () => {
    return (
        <OptionsContainer>
            <LangCurrent />
            <LangOthers />
        </OptionsContainer>
    );
};

export default memo(ChangeLang);
