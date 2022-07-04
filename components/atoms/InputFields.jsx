import { TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { useMemo } from "react";
import { memo } from "react";
import { Controller } from "react-hook-form";

const InputFields = (props) => {
    const t = useTranslations("form");
    const required = useMemo(
        () => ({
            required: t.rich("required")
        }),
        [t]
    );

    return (
        <>
            <Controller
                name="firstName"
                control={props.control}
                rules={required}
                defaultValue=""
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label={t.rich("firstName")}
                        variant="outlined"
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                    />
                )}
            />

            <Controller
                name="lastName"
                control={props.control}
                rules={required}
                defaultValue=""
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label={t.rich("lastName")}
                        variant="outlined"
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                    />
                )}
            />
            <Controller
                name="phoneNumber"
                control={props.control}
                rules={required}
                defaultValue=""
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        label={t.rich("phoneNumber")}
                        variant="outlined"
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                    />
                )}
            />
        </>
    );
};

export default memo(InputFields);
