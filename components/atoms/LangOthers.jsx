import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import HiddenOptions from "../styled/HiddenOptions.styled";
import LangItem from "./LangItem";

const langs = new Map([
    ["Latinica", "latn"],
    ["Ћирилица", "cyrl"],
    ["English", "eng"]
]);

const LangOthers = () => {
    const t = useTranslations("Contact");
    const others = useMemo(() => t.rich("others").split("|"), [t]);
    const router = useRouter();

    const handleChange = useCallback(
        (lang) => {
            router.push(
                {
                    pathname: router.pathname,
                    query: router.query
                },
                router.asPath,
                {
                    locale: langs.get(lang)
                }
            );
        },
        [router]
    );

    return (
        <HiddenOptions className="hidden">
            {others.map((other) => (
                <LangItem key={other} onClick={handleChange} lang={other} />
            ))}
        </HiddenOptions>
    );
};

export default LangOthers;
