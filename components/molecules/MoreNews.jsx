import { Box, Typography } from "@mui/material";
import Button from "../atoms/Button";
import React from "react";
import { ROUTES } from "../../constants/routes";
import Link from "next/link";
import { useTranslations } from "next-intl";

const MoreNews = () => {
    const t = useTranslations("latestNews");

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "center",
                textAlign: "center",
                // background: "rgba(245, 242, 240, 0.35)",
                padding: ".5rem"
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textTransform: "uppercase",
                    color: (theme) => theme.color.primary,
                    textShadow: "1px 1px black"
                }}
            >
                {t("heading")}
            </Typography>
            <Link href={ROUTES.NEWS_PAGE_START} passHref>
                <a>
                    <Button
                        sx={{
                            textTransform: "uppercase",
                            padding: "1rem 2rem",
                            maxWidth: "max-content",
                            backgroundColor: (theme) => theme.color.primary
                        }}
                        variant="outlined"
                    >
                        <Typography color="white">{t("more")}</Typography>
                    </Button>
                </a>
            </Link>
        </Box>
    );
};

export default MoreNews;
