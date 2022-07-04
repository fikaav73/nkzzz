import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import { useTranslations } from "next-intl";

const NumbersTable = ({ data }) => {
    const t = useTranslations("numbersTable");
    const rows = data.map((e) => {
        return e.phone_numbers?.data.map((el, i) => (
            <TableRow key={e.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {i === 0 && <TableCell rowSpan={e.phone_numbers.data.length}>{e.name}</TableCell>}
                <TableCell align="center">{el.attributes.name}</TableCell>
                <TableCell align="center">{el.attributes.number}</TableCell>
            </TableRow>
        ));
    });

    return (
        <TableContainer
            sx={{
                width: "80%",
                margin: "4rem 10%",
                textTransform: "uppercase"
            }}
            component={Paper}
        >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{t.rich("category")}</TableCell>
                        <TableCell align="center">{t.rich("name")}</TableCell>
                        <TableCell align="center">{t.rich("number")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{rows}</TableBody>
            </Table>
        </TableContainer>
    );
};

export default NumbersTable;
