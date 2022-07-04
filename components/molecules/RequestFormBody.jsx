import { Box, Button, CircularProgress } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { memo } from "react";
import FileButton from "../atoms/FileButton";
import InputFields from "../atoms/InputFields";

const RequestFormBody = (props) => {
    const t = useTranslations("form");

    return (
        <>
            <InputFields control={props.control} />
            <Box sx={{ display: "flex", gap: "2rem" }}>
                <FileButton control={props.control} />
                <br />
                <Button
                    disabled={props.loading || props.token === null}
                    endIcon={<AiOutlineSend />}
                    variant="contained"
                    type="submit"
                >
                    {t.rich("send")}
                    {props.loading && (
                        <CircularProgress
                            size={"1.5rem"}
                            sx={{
                                color: "rgba(0,0,0,0.4)",
                                position: "absolute",
                                zIndex: 1
                            }}
                        />
                    )}
                </Button>
            </Box>
        </>
    );
};

export default memo(RequestFormBody);
