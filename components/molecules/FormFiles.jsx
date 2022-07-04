import { styled } from "@mui/material";
import Link from "next/link";
import buildURL from "../../utils/urlBuilder";

const FormFiles = ({ data }) => {
    return (
        <Container>
            {data.map((e, i) => (
                <Link key={i} href={buildURL(e.url)} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        {e.name}
                    </a>
                </Link>
            ))}
        </Container>
    );
};

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    flex: 1,

    "& > *": {
        padding: "1rem",
        borderRadius: ".2rem"
    },

    "& > *:hover": {
        color: "white",
        background: theme.color.secondary,
        transition: "all .5s ease"
    }
}));
export default FormFiles;
