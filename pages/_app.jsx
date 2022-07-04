import "../styles/globals.css";
import { NextIntlProvider } from "next-intl";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
import MainLayout from "../components/layouts/MainLayout";
import { memo } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    if (Component.noLayout) return <Component {...pageProps} />;

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
                }}
            />
            <NextIntlProvider messages={pageProps.messages}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <MainLayout {...pageProps.mainLayout}>
                        <Component {...pageProps} />
                    </MainLayout>
                </ThemeProvider>
            </NextIntlProvider>
        </>
    );
};

export default memo(MyApp);
