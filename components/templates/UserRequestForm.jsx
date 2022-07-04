import { styled } from "@mui/material";
import FormFiles from "../molecules/FormFiles";
import RequestForm from "../organisms/RequestForm";

const UserRequestForm = ({ data }) => {
    const files = data.map((e) => ({
        name: e.text,
        url: e.formFile.data?.attributes.url
    }));

    return (
        <Container>
            <FormFiles data={files} />
            <RequestForm />
        </Container>
    );
};

const Container = styled("div")({
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
    margin: "6rem 2rem",
    padding: "0 1rem",

    "@media (min-width: 800px)": {
        flexDirection: "row"
    }
});

export default UserRequestForm;
