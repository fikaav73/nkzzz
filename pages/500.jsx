import { Typography } from "@mui/material";

const Custom500 = () => {
    return <Typography variant="h1">500 - Server-side error occurred</Typography>;
};

export const getStaticProps = () => {
    return {
        props: {}
    };
};

Custom500.noLayout = true;

export default Custom500;
