import React, { useState, useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
// import React, { useState, useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IkRhbmVsbGUuTydLb25AZ21haWwuY29tIiwiRmlyc3RfbmFtZSI6IkRhbmVsbGUiLCJMYXN0X25hbWUiOiJPJ0tvbiIsIlVpZCI6IjAwMDA0OGRiLWYzNGYtNDg0MC1hY2EyLTU4ODYzMDQ4YTUzYiIsImV4cCI6MTY4MDU4ODM2OX0.tgtRd6hUQ04gJUxGHbiY6HvcNSb6e8e5bMa_tq09lRw";
        try {
            const userId = "6da94a1c-4dd6-4c2c-a35e-8879cc8503c2"; // Replace with the actual user ID
            const res = await fetch(`http://35.187.241.140:8080/api/v1/transaction/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res);
            console.log("inside the try block");
            const data = await res.json();
            console.log(data);
            setTransactions(data);
            console.log("ending try block")
        } catch (err) {
            console.log("error");
            console.log(err.message);
        }
    };

    const getRewardValue = (points, miles, cashback) => {
        if (points === 0 && miles === 0 && cashback !== 0) {
            return `$${cashback.toFixed(2)} cashback`;
        } else if (points !== 0 && miles === 0 && cashback === 0) {
            return `${points} points`;
        } else if (points === 0 && miles !== 0 && cashback === 0) {
            return `${miles} miles`;
        } else {
            return "-";
        }
    }

    return (
        <div className="pt-5 p-20 bg-[#F7F8F9]">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Transaction ID</TableCell>
                            <TableCell >Transaction Date</TableCell>
                            <TableCell >Amount</TableCell>
                            <TableCell >Merchant</TableCell>
                            <TableCell >Reward</TableCell>
                            {/* <TableCell align="right">Miles</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!transactions ? "" : transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                                <TableCell component="th" scope="row">
                                    {transaction.transaction_id}
                                </TableCell>
                                <TableCell>
                                    {transaction.transaction_date}
                                </TableCell>
                                <TableCell >{transaction.amount}</TableCell>
                                <TableCell >{transaction.merchant}</TableCell>
                                <TableCell>{getRewardValue(transaction.points, transaction.miles, transaction.cashback)}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
