import { Fragment, useState } from 'react'
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Collapse } from '@mui/material';
import { CARD_TYPE } from '../../config/CardTypes'

const getRewardValue = (points, miles, cashback) => {
    if (points === 0 && miles === 0 && cashback !== 0) {
        return `$${cashback.toFixed(2)} cashback`;
    } else if (points !== 0 && miles === 0 && cashback === 0) {
        return `${points.toFixed(2)} points`;
    } else if (points === 0 && miles !== 0 && cashback === 0) {
        return `${miles.toFixed(2)} miles`;
    } else {
        return "-";
    }
}

TransactionRow.propTypes = {
    row: PropTypes.shape({
        id: PropTypes.string.isRequired,
        transaction_id: PropTypes.string.isRequired,
        merchant: PropTypes.string.isRequired,
        mcc: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        transaction_date: PropTypes.string.isRequired,
        card_id: PropTypes.string.isRequired,
        card_pan: PropTypes.string.isRequired,
        card_type: PropTypes.string.isRequired,
        points: PropTypes.number.isRequired,
        miles: PropTypes.number.isRequired,
        cashback: PropTypes.number.isRequired,
        is_deleted: PropTypes.bool.isRequired,
    }).isRequired,
};


export default function TransactionRow(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.transaction_id}
                </TableCell>
                <TableCell align='left'>{row.transaction_date}</TableCell>
                <TableCell>{row.mcc}</TableCell>
                <TableCell>{row.merchant}</TableCell>
                <TableCell align='right'>{row.amount}</TableCell>
                <TableCell align='right'>{getRewardValue(row.points, row.miles, row.cashback)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                {"💳 Card Details"}
                            </Typography>
                            <Table size="small" aria-label="campaign-details">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Card ID</TableCell>
                                        <TableCell>Card PAN</TableCell>
                                        <TableCell>Card Type</TableCell>
                                        <TableCell>Currency</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.card_id}>
                                        <TableCell component="th" scope="row">{row.card_id}</TableCell>
                                        <TableCell>{row.card_pan}</TableCell>
                                        <TableCell>{CARD_TYPE[row.card_type]}</TableCell>
                                        <TableCell>{row.currency}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                {"🎁 Campaign Details"}
                            </Typography>
                            <Table size="small" aria-label="campaign-details">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Campaign ID</TableCell>
                                        <TableCell>Merchant</TableCell>
                                        <TableCell>Card Type</TableCell>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>End Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.campaign_id}>
                                        <TableCell component="th" scope="row">
                                            {row.campaign_id}
                                        </TableCell>
                                        <TableCell>{row.merchant}</TableCell>
                                        <TableCell>{CARD_TYPE[row.card_type]}</TableCell>
                                        <TableCell>{row.start_date}</TableCell>
                                        <TableCell>{row.end_date}</TableCell>
                                    </TableRow>
                                </TableBody>
                                <TableHead>
                                    <TableRow >
                                        <TableCell colSpan={7}>Description</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.campaign_id}>
                                        <TableCell colSpan={7}>{row.description}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}

