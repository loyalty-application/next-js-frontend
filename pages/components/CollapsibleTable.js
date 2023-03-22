// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import { useTheme } from '@mui/material/styles';
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import TableFooter from '@mui/material/TableFooter';
// import React, { useState, useEffect } from "react";
// import TablePagination from '@mui/material/TablePagination';
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.transaction_id}
//         </TableCell>
//         <TableCell>{row.transaction_date}</TableCell>
//         <TableCell>{row.merchant}</TableCell>
//         <TableCell>{row.amount}</TableCell>
//         <TableCell>{row.points}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 Details
//               </Typography>
//               <Table size="small" aria-label="campaign-details">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Campaign ID</TableCell>
//                     <TableCell>Merchant</TableCell>
//                     <TableCell>Card Type</TableCell>
//                     <TableCell>Description</TableCell>
//                     <TableCell>Start Date</TableCell>
//                     <TableCell>End Date</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   <TableRow key={row.campaign.campaign_id}>
//                     <TableCell component="th" scope="row">
//                       {row.campaign.campaign_id}
//                     </TableCell>
//                     <TableCell>{row.campaign.merchant}</TableCell>
//                     <TableCell>{row.campaign.card_type}</TableCell>
//                     <TableCell>{row.campaign.description}</TableCell>
//                     <TableCell>{row.campaign.start_date}</TableCell>
//                     <TableCell>{row.campaign.end_date}</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     date: PropTypes.number.isRequired,
//     transactionAmount: PropTypes.number.isRequired,
//     transactionType: PropTypes.number.isRequired,
//     transactionDetails: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     transactionId: PropTypes.string.isRequired,
//     transactionPoints: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
  
// ].sort((a, b) => (a.date < b.date ? -1 : 1));

// function TablePaginationActions(props) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// export default function CustomPaginationActionsTable() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/v1/transaction", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         });
//         const data = await response.json();
//         setRows(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <div>
//       <div>
//         <TableContainer component={Paper}>
//           <Table aria-label="collapsible table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Transaction ID</TableCell>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Amount</TableCell>
//                 <TableCell>Points</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {(rowsPerPage > 0
//                 ? rows.slice(
//                     page * rowsPerPage,
//                     page * rowsPerPage + rowsPerPage
//                   )
//                 : rows
//               ).map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.transaction_id}</TableCell>
//                   <TableCell>{row.transaction_date}</TableCell>
//                   <TableCell>{row.merchant}</TableCell>
//                   <TableCell>{row.amount}</TableCell>
//                   <TableCell>{row.points}</TableCell>
//                 </TableRow>
//               ))}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 53 * emptyRows }}>
//                   <TableCell colSpan={5} />
//                 </TableRow>
//               )}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
//                   colSpan={5}
//                   count={rows.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   SelectProps={{
//                     inputProps: {
//                       "aria-label": "rows per page",
//                     },
//                     native: true,
//                   }}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';

function TransactionsPage() {
  const header = new Headers({ "Access-Control-Allow-Origin": "*" });
  const callAPI = async () => {
    console.log('calling api');
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InN1ZG9AZ2FicmllbC5kZXYiLCJGaXJzdF9uYW1lIjoiR2FicmllbCIsIkxhc3RfbmFtZSI6Ik9uZyIsIlVpZCI6IjY0MWE4NTk1OGExNTNhMDdiMmVjMzBhZCIsImV4cCI6MTY3OTU0NjEzM30.7KvVMWyFXMMadB6s2uIQBBjzWczuVK-ziMdyOkE8bLs"
    try {
        const res = await fetch(
            `http://localhost:8080/api/v1/transaction`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log(res)
        console.log("inside the try block")
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log('error');
        console.log(err);
    }
};

return (
    <div>
        <main>
            <button onClick={callAPI}>Make API call</button>
        </main>
    </div>
);
}
export default TransactionsPage;


  
// import * as React from "react";
// import { useState,useEffect } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Collapse from '@mui/material/Collapse';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import PropTypes from 'prop-types';

// function createData(date, transaction, rewardType, points, remarks, amountSpent) {
//   return { date, transaction, rewardType, points, remarks, amountSpent};
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = useState(false);
//   var date = row.transaction_date;
//   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   var split_date = date.split('-');
//   var transaction_date = split_date[2] + ' ' + months[split_date[1]] + ' ' + split_date[0];
//   var rewardType;
//   switch(row.reward_type) {
//     case "points":
//       rewardType = "Points";
//       break;
//     case "miles":
//       rewardType = "Miles";
//       break;
//     case "cashback":
//       rewardType = "Cashback";
//       break;
//     default:
//       rewardType = "";
//   }
//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell align="left">{transaction_date}</TableCell>
//         <TableCell align="left">{row.merchant_name}</TableCell>
//         <TableCell align="left">{rewardType}</TableCell>
//         <TableCell align="left">  <span className="points" >{row.reward_earned}</span></TableCell>
//         <TableCell align="left" className="Details" onClick={() => setOpen(!open)}>
//             {open ? "Hide Details" : "View Details"}
//         </TableCell>
//       </TableRow>

//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Table size="small" aria-label="purchases">
//                 <TableBody>
//                     <TableRow key={row.merchant_name}>
//                       <TableCell align="left">
//                         Remarks
//                       </TableCell>
//                       <TableCell align="left">{row.remarks}</TableCell>
//                       <TableCell/>
//                       <TableCell/>
//                       <TableCell/>
//                       <TableCell/>
//                     </TableRow>

//                     <TableRow key={row.merchant_name}>
//                       <TableCell align="left">
//                       Amount Spent
//                       </TableCell>
//                       <TableCell align="left">{row.currency} {row.amount}</TableCell>
//                       <TableCell/>
//                       <TableCell/>
//                       <TableCell/>
//                       <TableCell/>
//                     </TableRow>
             
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }


// const rows = [
//   createData("28 August 2022","Bath & Body Works Bonus 1", "Cashback", "+1,000","Get 20% in cashback","$2,000"),
//   createData("28 August 2022","Flight Booking: LNDN - SIN ", "Redeem",  "-2,134","Get 20% in cashback","$2,000"),
//   createData("28 August 2022","Bath & Body Works Bonus", "Reward Points",  "+3,000","Get 20% in cashback","$2,000"),
//   createData("28 August 2022","Flight Booking: KOR - SIN", "Redeem",  "-5,850","Get 20% in cashback","$2,000"),
// ];


// const makeStyle=(points)=>{
//   if(points.includes('+'))
//   {
//     return {
//       background: 'rgb(145 254 159 / 47%)',
//       color: 'green',
//     }
//   }
//   else if(points.includes ('-'))
//   {
//     return{
//       background: '#ffadad8f',
//       color: 'red',
//     }
//   }
//   else{
//     return{
//       background: '#59bfff',
//       color: 'white',
//     }
//   }
// }

// export default function Transactions({user}) {
//     // const [open, setOpen] = useState(false);
//     const [initialData, setInitialData] = useState([]);
    
//     let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InN1ZG9AZ2FicmllbC5kZXYiLCJGaXJzdF9uYW1lIjoiR2FicmllbCIsIkxhc3RfbmFtZSI6Ik9uZyIsIlVpZCI6IjY0MWE4NTk1OGExNTNhMDdiMmVjMzBhZCIsImV4cCI6MTY3OTU0NjEzM30.7KvVMWyFXMMadB6s2uIQBBjzWczuVK-ziMdyOkE8bLs"
//      //Load data
//     useEffect(() => {
//         const sendRequest = async () => {
//         try{
//             const response = await fetch('http://localhost:8080/api/v1/transaction', {
//                 headers: {
//                     "Authorization" : 'Bearer ' + token,
//                 }
//             });
//             const responseData = await response.json();
//             setInitialData(responseData.transactions);
//             console.log(JSON.parse(initialData));

//         }catch(error){
//             console.log(error.message);
//         }
//         }
//         sendRequest();
        
//   },[])

//   return (
//       <div className="Table">
//       {/* <h3 className="font-poppins font-semibold ss:text-[18px] text-[52px] text-black ss:leading-[90.8px] leading-[75px]">Latest Transactions (Last 30 days)</h3> */}
//       <TableContainer component={Paper} style={{ boxShadow: "0px 10px 20px 0px #80808029", borderRadius: "0.8rem", marginBottom:50 }}>
//         <Table aria-label="collapsible table">
//           <TableHead>
//             <TableRow>      
//               <TableCell align="left">Date</TableCell>
//               <TableCell align="left">Transaction</TableCell>
//               <TableCell align="left">Reward Type</TableCell>
//               <TableCell align="left">Reward</TableCell>
//               <TableCell />
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {/* {rows.map((row) => (
//               <Row key={row.name} row={row} />
//             ))} */}
//             {initialData?.map((transaction) => (
//               <Row key={transaction.merchant_name} row={transaction}/>
//             ))
//             }
//           </TableBody>
//         </Table>
//       </TableContainer>
//       </div>
//   );
// }