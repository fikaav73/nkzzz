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

const MunicipalitiesTable = ({ data }) => {
    const t = useTranslations("municipalitiesTable");

    const rows = data.map((e, i) => ({
        ...e,
        index: i + 1
    }));

    return (
        <TableContainer
            sx={{ width: "80%", marginLeft: "10%", textTransform: "uppercase" }}
            component={Paper}
        >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right">{t.rich("municipality")}</TableCell>
                        <TableCell align="right">{t.rich("presidents")}</TableCell>
                        <TableCell align="right">{t.rich("secretary")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.index}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.municipalityPresident}</TableCell>
                            <TableCell align="right">{row.municipalitySecretaries}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MunicipalitiesTable;
