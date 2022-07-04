import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Alert, Snackbar, styled, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { postUserRequest } from "../../api-calls/user-request";
import { HCAPTCHA_SITE_KEY } from "../../constants";
import RequestFormBody from "../molecules/RequestFormBody";

const RequestForm = () => {
    const t = useTranslations("form");
    const { handleSubmit, reset, control } = useForm();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        severity: "success",
        text: ""
    });
    const [token, setToken] = useState(null);
    const hCaptchaRef = useRef(null);

    const handleClose = useCallback(() => {
        setAlert((prev) => {
            return { ...prev, open: false };
        });
    }, []);

    const resetCaptcha = useCallback(() => {
        setToken(null);
        if (hCaptchaRef.current !== null) hCaptchaRef.current.resetCaptcha();
    }, [hCaptchaRef.current]);

    const onSubmit = useCallback(
        async (inputData, e) => {
            setLoading(true);
            const formData = new FormData();
            formData.append(`files.files`, e.target.file.files[0], e.target.file.files[0].name);
            formData.append("data", JSON.stringify(inputData));
            formData.append("Token", token);

            await postUserRequest(formData)
                .then(() => {
                    reset();
                    setAlert({
                        open: true,
                        severity: "success",
                        text: "Zahtjev uspjesno poslat!"
                    });
                })
                .catch((err) => {
                    const res = err.response;
                    let message = res.statusText || "Greska pri slanju zahtjeva!";

                    setAlert({
                        open: true,
                        severity: "error",
                        text: message
                    });
                })
                .finally(() => resetCaptcha());
            setLoading(false);
        },
        [token]
    );

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4">{t.rich("heading")}</Typography>

            <RequestFormBody control={control} loading={loading} token={token} />

            <HCaptcha
                ref={hCaptchaRef}
                sitekey={HCAPTCHA_SITE_KEY}
                onVerify={setToken}
                onError={() => setToken(null)}
                onExpire={() => setToken(null)}
            />

            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.severity} sx={{ width: "100%" }}>
                    {alert.text}
                </Alert>
            </Snackbar>
        </Form>
    );
};

const Form = styled("form")(({ theme }) => ({
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
    flex: 1,

    "@media(min-width:600px)": {
        padding: "0 3rem"
    },

    "& .MuiButton-root": {
        background: theme.color.secondary
    },

    ".MuiFormHelperText-root": {
        top: "100%",
        position: "absolute",
        animation: "ShowError .5s ease forwards"
    }
}));

export default RequestForm;
