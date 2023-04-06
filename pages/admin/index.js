import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import { Skeleton } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import AdminLayout from "../../layouts/AdminLayout"
import TransactionRow from "../../components/transactions/TransactionRow";
import api from "../../config/Api";
import { useAuth } from "../../hooks/useAuth";
import { Router } from "next/router";
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'

const AdminTransactionPage = () => {

    const { user, loading, login } = useAuth()
    const [transactions, setTransactions] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const totalPageCount = useMemo(() => {
        return Math.ceil(totalCount / rowsPerPage);
    }, [totalCount, rowsPerPage])
    const [tableLoading, setTableLoading] = useState(true);

    if (user && user.user_type == 'admin' || user.user_type == 'superadmin') {
        Router.replace('/admin')
    }
    else if (user && user.user_type == 'user') {
        Router.replace('/dashboard')
    }

    useEffect(() => {
        fetchTransactions(rowsPerPage, currentPage);
        fetchTransactionCount();
        setTableLoading(false)
    }, []);

    useEffect(() => {
        const _rowsPerPage = rowsPerPage == -1 ? totalCount : rowsPerPage
        fetchTransactions(_rowsPerPage, currentPage);
        setTableLoading(false)
    }, [currentPage, rowsPerPage]);

    const fetchTransactionCount = async () => {
        const resCount = await api.get(`/api/v1/transaction/count`);
        const dataCount = resCount.data
        setTotalCount(dataCount)
    }

    const fetchTransactions = async (rpp, pg) => {
        try {
            const res = await api.get(`/api/v1/transaction?limit=${rpp}&page=${pg}`);
            const data = res.data
            console.log(data)
            setTransactions(data);
        } catch (e) {
            console.log(e)
        }
    };

    const handleChangePage = (event, newPage) => {
        setTransactions([])
        setTableLoading(true)
        setCurrentPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setTransactions([])
        setTableLoading(true)
        const newRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(newRowsPerPage);
        setCurrentPage(0);
    };

    //Update rows to match the data structure
    const rows = transactions

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        currentPage > 0 ? Math.max(0, (1 + currentPage) * rowsPerPage - rows.length) : 0;
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
                                {tableLoading ? <TableBody><TableRow><TableCell colSpan={7}><Skeleton variant="rectangular" height={65} /></TableCell></TableRow></TableBody> :
                                    <TableBody>
                                        {(rows
                                        ).map((row) => (
                                            <TransactionRow key={row.transaction_id} row={row} />
                                        ))}
                                    </TableBody>}
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[10, 25, 100, 250]}
                                            colSpan={7}
                                            count={totalPageCount}
                                            rowsPerPage={rowsPerPage}
                                            page={currentPage}
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

AdminTransactionPage.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}


export default AdminTransactionPage;
