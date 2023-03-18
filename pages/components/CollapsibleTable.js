import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TablePagination } from '@mui/material';

function createData(
  transactionId,
  date,
  transactionType,
  transactionAmount,
  transactionPoints
) {
  return {
    transactionId,
    date,
    transactionType,
    transactionAmount,
    transactionPoints,
    transactionDetails: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
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
          {row.transactionId}
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.transactionType}</TableCell>
        <TableCell>{row.transactionAmount}</TableCell>
        <TableCell>{row.transactionPoints}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Member</TableCell>
                    <TableCell>Card Program</TableCell>
                    <TableCell>Campaign</TableCell>
                    <TableCell>Remarks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.transactionDetails.map((transactionDetailsRow) => (
                    <TableRow key={transactionDetailsRow.date}>
                      <TableCell component="th" scope="row">
                        {transactionDetailsRow.date}
                      </TableCell>
                      <TableCell>{transactionDetailsRow.customerId}</TableCell>
                      <TableCell>{transactionDetailsRow.amount}</TableCell>
                      <TableCell>10% in points</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.number.isRequired,
    transactionAmount: PropTypes.number.isRequired,
    transactionType: PropTypes.number.isRequired,
    transactionDetails: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    transactionId: PropTypes.string.isRequired,
    transactionPoints: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "07110e8bf85f1a1229eaa5dcbdea68c51d537218143d0021945cfae8861e3efc",
    "01/01/2023",
    "Earn",
    3450,
    345,
    3.99
  ),
  createData(
    "07110e8bf85f1a1229eaa5dcbdea68c51d537218143d0021945cfae8861e3efc",
    "01/01/2023",
    "Excluded",
    3450,
    0,
    4.99
  ),
  createData(
    "07110e8bf85f1a1229eaa5dcbdea68c51d537218143d0021945cfae8861e3efc",
    "01/01/2023",
    "Excluded",
    3450,
    0,
    4.99
  ),
  createData(
    "07110e8bf85f1a1229eaa5dcbdea68c51d537218143d0021945cfae8861e3efc",
    "01/01/2023",
    "Excluded",
    3450,
    0,
    4.99
  ),
  createData(
    "07110e8bf85f1a1229eaa5dcbdea68c51d537218143d0021945cfae8861e3efc",
    "01/01/2023",
    "Excluded",
    3450,
    0,
    4.99
  ),
];

export default function CollapsibleTable() {
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Transaction ID</TableCell>
                <TableCell> Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell> Points </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.transactionId} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
