import { Alert, IconButton, Snackbar, styled, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { BsNewspaper } from "react-icons/bs";
import { memo, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import axios from "../../services/http";
import { HCAPTCHA_SITE_KEY } from "../../constants";
import FooterDiv from "../styled/FooterDiv.styled";
import InputField from "../styled/InputField.styled";
import { API } from "../../constants/routes";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { nextToStrapiLocale } from "../../locales";

const FooterNews = () => {
    const buttonRef = useRef(null);
    const t = useTranslations("footer");
    const form = useTranslations("form");
    const { control, handleSubmit, reset } = useForm();
    const router = useRouter();

    const [token, setToken] = useState(null);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        severity: "success",
        text: ""
    });
    const hCaptchaRef = useRef(null);

    const handleClose = () => {
        setAlert((prev) => {
            return { ...prev, open: false };
        });
    };

    const resetCaptcha = useCallback(() => {
        setToken(null);
        if (hCaptchaRef.current !== null) hCaptchaRef.current.resetCaptcha();
    }, [hCaptchaRef.current]);

    const submitHandler = async (inputData) => {
        if (!showCaptcha) {
            setShowCaptcha(true);
            return;
        }
        if (token === null) {
            setAlert({
                open: true,
                severity: "error",
                text: "Captcha required"
            });
            return;
        }

        inputData.locale = nextToStrapiLocale(router.locale);
        const formData = new FormData();
        formData.append("data", JSON.stringify(inputData));
        formData.append("Token", token);

        await axios
            .post(API.SUBSCRIBERS, formData)
            .then(() => {
                reset();
                setAlert({
                    open: true,
                    severity: "success",
                    text: form("success")
                });
            })
            .catch((err) => {
                setAlert({
                    open: true,
                    severity: "error",
                    text: err.response.data.error?.details?.message || form("error")
                });
            })
            .finally(resetCaptcha);
    };

    return (
        <FooterDiv sx={{ gridArea: "news" }}>
            <Typography variant="h5">{t("news.heading")}</Typography>
            <Typography>{t("news.text")}</Typography>
            <Form onSubmit={handleSubmit(submitHandler)}>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: form.rich("required") }}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                        <InputField
                            {...field}
                            type={"email"}
                            label={"E-mail"}
                            variant="standard"
                            error={Boolean(fieldState.error)}
                            helperText={fieldState.error?.message}
                        />
                    )}
                />
                <IconButton ref={buttonRef} aria-label="fingerprint" type="submit">
                    <BsNewspaper />
                </IconButton>
                <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alert.severity} sx={{ width: "100%" }}>
                        {alert.text}
                    </Alert>
                </Snackbar>
            </Form>
            {showCaptcha && (
                <HCaptcha
                    ref={hCaptchaRef}
                    sitekey={HCAPTCHA_SITE_KEY}
                    onVerify={(token) => {
                        setToken(token);
                        buttonRef.current.click();
                        setTimeout(() => setShowCaptcha(false), 1000);
                    }}
                    onError={() => setToken(null)}
                    onExpire={() => setToken(null)}
                />
            )}
        </FooterDiv>
    );
};

const Form = styled("form")({
    display: "flex",
    background: "white",
    padding: ".5rem 1rem",
    width: "100%"
});

export default memo(FooterNews);
