import { TableBody, TableContainer, Table, TableHead, TableRow, TableCell, Paper } from "@mui/material";
import { CARD_TYPE } from "../../constants/CardTypes";

const CardDetails = ({ cards }) => {
    return (
        <div className="p-10 pl-20">
            <TableContainer component={Paper}>
                <Table aria-label="card table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{"Card ID"}</TableCell>
                            {/* <TableCell>Card PAN</TableCell> */}
                            <TableCell>{"Card Type"}</TableCell>
                            <TableCell>{"Value Type"}</TableCell>
                            <TableCell align="right">{"Value"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cards.map((card) => (
                            <TableRow key={card.card_id}>
                                <TableCell component="th" scope="row">{card.card_id}</TableCell>
                                <TableCell>{CARD_TYPE[card.card_type]}</TableCell>
                                <TableCell>{card.value_type}</TableCell>
                                <TableCell align="right">{card.value.toFixed(2)}</TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default CardDetails;
