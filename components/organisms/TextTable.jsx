import { Box } from "@mui/material";
import TextTableRow from "../molecules/TextTableRow";

const TextTable = ({ data }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "4rem 0" }}>
            {data.row.map((e) => (
                <TextTableRow key={e.id} firstField={e.firstField} secondField={e.secondField} />
            ))}
        </Box>
    );
};

export default TextTable;
