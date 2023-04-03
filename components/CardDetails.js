import { TableBody, TableContainer, Table, TableHead, TableRow, TableCell, Paper } from "@mui/material";
import CumulativeTotals from "./CumulativeTotals";

const CardDetails = ({ totals, cards }) => {
    return (
        <div className="grid grid-cols-2 gap-4 bg-[#F7F8F9]">
            <div className="p-10 pl-20">
                <TableContainer component={Paper}>
                    <Table aria-label="card table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{"Card ID"}</TableCell>
                                {/* <TableCell>Card PAN</TableCell> */}
                                <TableCell>{"Card Type"}</TableCell>
                                <TableCell>{"Value Type"}</TableCell>
                                <TableCell>{"Value"}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cards.map((card) => (<TableRow key={card.card_id}>
                                <TableCell component="th" scope="row">{card.card_id}</TableCell>
                                <TableCell>{card.card_type}</TableCell>
                                <TableCell>{card.value_type}</TableCell>
                                <TableCell>{card.value}</TableCell>
                            </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <CumulativeTotals totals={totals} />
            </div>
        </div>
    );
}
export default CardDetails;
