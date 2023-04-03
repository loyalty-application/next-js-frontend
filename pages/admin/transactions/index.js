import CustomerLayout from "../../components/layouts/CustomerLayout"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import React, { useState, useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import TransactionRow from "../../components/transactions/TransactionRow";
import api from "../../config/api";

const TransactionPage = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const res = await api.get(`/api/v1/transaction`);
            const data = res.data
            setTransactions(data);
        } catch (e) {
            console.log(e)
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
            <div className="p-10 pb-5 text-center font-bold text-2xl">
                Transactions
            </div>
            <div className="p-20 pt-5">
                <div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={2} align="center">
                                            Transaction ID
                                        </TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>MCC</TableCell>
                                        <TableCell>Merchant</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Reward</TableCell>
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
                                        <TransactionRow key={row.transaction_id} row={row} />
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
            </div>
        </div>
    );
};

TransactionPage.getLayout = function getLayout(page) {
    return (
        <CustomerLayout>
            {page}
        </CustomerLayout>
    )
}


export default TransactionPage;
