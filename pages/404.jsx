import { Typography } from "@mui/material";

const Custom404 = () => {
    return <Typography variant="h1">404 - Page Not Found</Typography>;
};

export const getStaticProps = () => {
    return {
        props: {}
    };
};

Custom404.noLayout = true;

export default Custom404;
