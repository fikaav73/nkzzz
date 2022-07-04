// import { useTranslations } from "next-intl";
// import { useMemo } from "react";
import { MdLanguage } from "react-icons/md";
import Flex from "../styled/Flex.styled";

const LangCurrent = () => {
    // const t = useTranslations("Contact");
    // const lang = useMemo(() => t.rich("lang"), [t]);

    return (
        <Flex justifyContent="center" alignItems="center">
            <MdLanguage color="white" fontSize={"1.5rem"} />
        </Flex>
    );
};

export default LangCurrent;
