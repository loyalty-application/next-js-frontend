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

export default function CustomPaginationActionsTable({ transactions }) {

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
                            <TableCell>{"Transaction ID"}</TableCell>
                            <TableCell >{"Transaction Date"}</TableCell>
                            <TableCell >{"Amount"}</TableCell>
                            <TableCell >{"Merchant"}</TableCell>
                            <TableCell >{"Reward"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{transactions ? transactions.map((transaction) => (<TableRow key={transaction.id}>
                        <TableCell component="th" scope="row">{transaction.transaction_id}</TableCell>
                        <TableCell>{transaction.transaction_date}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.merchant}</TableCell>
                        <TableCell>{getRewardValue(transaction.points, transaction.miles, transaction.cashback)}</TableCell>
                    </TableRow>)) : <TableRow></TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
