import Flex from "../styled/Flex.styled";
import SearchIcon from "../styled/icons/SearchIcon.styled";
import InputField from "../styled/InputField.styled";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { styled } from "@mui/material";

const SearchField = () => {
    const t = useTranslations("Contact");
    const search = useMemo(() => t.rich("search"), [t]);
    const router = useRouter();
    const form = useForm();

    const onValid = useCallback(
        (data) => {
            if (data.search === "") return;

            router.push(
                {
                    pathname: "/search",
                    query: {
                        query: data.search
                    }
                },
                undefined,
                {
                    shallow: true
                }
            );
        },
        [router.push]
    );

    const Form = styled("form")({ width: "100%", borderRadius: "20px", overflow: "hidden" });

    const ControlledInput = useMemo(
        () => (
            <Controller
                name="search"
                defaultValue=""
                control={form.control}
                render={({ field }) => (
                    <InputField
                        {...field}
                        label={router.query.query || search}
                        size="small"
                        color="primary"
                        padding="0 0 0 1.75rem"
                    />
                )}
            />
        ),
        [form.control, router.query.query, search]
    );

    return (
        <Flex alignItems="center" position="relative" width="100%" sx={{ transform: "scale(0.8)" }}>
            <SearchIcon />
            <Form onSubmit={form.handleSubmit(onValid)}>{ControlledInput}</Form>
        </Flex>
    );
};

export default SearchField;
