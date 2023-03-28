import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import React, { useState, useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

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
          {row.transaction_id}
        </TableCell>
        <TableCell>{row.transaction_date}</TableCell>
        <TableCell>{row.mcc}</TableCell>
        <TableCell>{row.merchant}</TableCell>
        <TableCell>{row.amount}</TableCell>
        <TableCell>{row.points}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                💳 Card Details
              </Typography>
              <Table size="small" aria-label="campaign-details">
                <TableHead>
                  <TableRow>
                    <TableCell>Card ID</TableCell>
                    <TableCell>Card PAN</TableCell>
                    <TableCell>Card Type</TableCell>
                    <TableCell>Currency</TableCell>
                    <TableCell>User ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.card_id}>
                    <TableCell component="th" scope="row">
                      {row.card_id}
                    </TableCell>
                    <TableCell>{row.card_pan}</TableCell>
                    <TableCell>{row.card_type}</TableCell>
                    <TableCell>{row.currency}</TableCell>
                    <TableCell>{row.user_id}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                🎁 Campaign Details
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
                  <TableRow key={row.campaign.campaign_id}>
                    <TableCell component="th" scope="row">
                      {row.campaign.campaign_id}
                    </TableCell>
                    <TableCell>{row.campaign.merchant}</TableCell>
                    <TableCell>{row.campaign.card_type}</TableCell>
                    <TableCell>{row.campaign.start_date}</TableCell>
                    <TableCell>{row.campaign.end_date}</TableCell>
                  </TableRow>
                </TableBody>
                <TableHead>
                  {" "}
                  <TableRow >
                    <TableCell colSpan={7}>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.campaign.campaign_id}>
                    <TableCell colSpan={7}>{row.campaign.description}</TableCell>
                  </TableRow>
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
    amount: PropTypes.number.isRequired,
    campaign: PropTypes.shape({
      campaign_id: PropTypes.string.isRequired,
      merchant: PropTypes.string.isRequired,
      card_type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
    }).isRequired,
    card_id: PropTypes.string.isRequired,
    card_pan: PropTypes.string.isRequired,
    card_type: PropTypes.string.isRequired,
    cashback: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    is_deleted: PropTypes.bool.isRequired,
    mcc: PropTypes.string.isRequired,
    merchant: PropTypes.string.isRequired,
    miles: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
    transaction_date: PropTypes.string.isRequired,
    transaction_id: PropTypes.string.isRequired,
    user_id: PropTypes.string.isRequired,
  }).isRequired,
};

// const rows = [].sort((a, b) => (a.date < b.date ? -1 : 1));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    console.log("calling api");

    // CHANGE TOKEN METHOD TO GET TOKEN FROM LOCAL STORAGE
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODAwNjQ1MzN9.jFcFfsp8nznwKJhc9m5QMpmC8wkLwhQtZydCZBRlQH8";
    try {
      const res = await fetch(`http://localhost:8080/api/v1/transaction`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      console.log("inside the try block");
      const data = await res.json();
      setTransactions(data);
    } catch (err) {
      console.log("error");
      console.log(err.message);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Update rows to match the data structure
  const rows = transactions.sort((a, b) =>
    a.transaction_date < b.transaction_date ? -1 : 1
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align="right">
                  Transaction ID
                </TableCell>
                <TableCell>Date</TableCell>
                <TableCell>MCC</TableCell>
                <TableCell>Merchant</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <Row key={row.transaction_id} row={row} />
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
                  colSpan={7}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
