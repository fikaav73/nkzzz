import styled from "@emotion/styled";
import { Button, Input, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { Controller } from "react-hook-form";
import { FaFileUpload } from "react-icons/fa";

const FileButton = (props) => {
    const t = useTranslations("form");

    return (
        <label htmlFor="contained-button-file">
            <Controller
                name="file"
                control={props.control}
                rules={{ required: t.rich("fileError") }}
                defaultValue=""
                render={({ field, fieldState }) => (
                    <>
                        <Input
                            {...field}
                            sx={{ display: "none" }}
                            id="contained-button-file"
                            type="file"
                            error={Boolean(fieldState.error)}
                        />
                        <Button
                            sx={{ position: "relative" }}
                            variant="contained"
                            component="span"
                            startIcon={<FaFileUpload />}
                        >
                            {t.rich("upload")}
                            {Boolean(fieldState.error) && <Error>{fieldState.error.message}</Error>}
                        </Button>
                    </>
                )}
            />
        </label>
    );
};

const Error = styled(Typography)({
    "@keyframes ShowError": {
        from: {
            transform: "translate(0, -100%)"
        },
        to: {
            transform: "translate(0, 0)"
        }
    },
    textAlign: "center",
    position: "absolute",
    zIndex: -1,
    top: "100%",
    color: "red",
    background: "rgba(0,0,0, 0.2)",
    width: "100%",
    fontWeight: 500,
    fontSize: "0.7rem",
    borderRadius: "0 0 0.3rem 0.3rem",
    animation: "ShowError .5s ease forwards"
});

export default FileButton;
