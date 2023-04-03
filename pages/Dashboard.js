import React from "react";
import Navbar from "./components/Navbar";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import CumulativeTotals from "./components/CumulativeTotals";
import UserTransactions from "./components/UserTransactions";

const Dashboard = () => {
  const API_URL = "http://35.187.241.140:8080/api/v1/card/user/";
  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IkRhbmVsbGUuTydLb25AZ21haWwuY29tIiwiRmlyc3RfbmFtZSI6IkRhbmVsbGUiLCJMYXN0X25hbWUiOiJPJ0tvbiIsIlVpZCI6IjAwMDA0OGRiLWYzNGYtNDg0MC1hY2EyLTU4ODYzMDQ4YTUzYiIsImV4cCI6MTY4MDU4ODM2OX0.tgtRd6hUQ04gJUxGHbiY6HvcNSb6e8e5bMa_tq09lRw";

  const CardDetails = ({ userId }) => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${API_URL}${userId}`, {
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
            },
          });
          const data = await response.json();
          setCards(data);
          console.log(data);
        } catch (error) {
          setError(error);
        }
      };

      fetchData();
    }, [userId]);

    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }

    return (
      <div className="grid grid-cols-2 gap-4 bg-[#F7F8F9]">
        <div className="p-10 pl-20">
          <TableContainer component={Paper}>
            <Table aria-label="card table">
              <TableHead>
                <TableRow>
                  <TableCell>Card ID</TableCell>
                  {/* <TableCell>Card PAN</TableCell> */}
                  <TableCell>Card Type</TableCell>
                  <TableCell>Value Type</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cards.map((card) => (
                  <TableRow key={card.card_id}>
                    <TableCell component="th" scope="row">
                      {card.card_id}
                    </TableCell>
                    {/* <TableCell>{card.card_pan}</TableCell> */}
                    <TableCell>{card.card_type}</TableCell>
                    <TableCell>{card.value_type}</TableCell>
                    <TableCell>{card.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <CumulativeTotals userId="6da94a1c-4dd6-4c2c-a35e-8879cc8503c2" />
        </div>
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <div className="w-full h-screen md:w-auto md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="p-4">
            <p className="font-bold text-2xl py-10 pl-20">
              {" "}
              Good to see you here, username!
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <Cards
              cvc="123"
              expiry="07/26"
              name="BERNICE TEO"
              number="4534 5678 9012 3456"
            />
            <Cards
              cvc="212"
              expiry="07/26"
              name="BERNICE TEO"
              number="2334 5678 9012 3456"
            />
            <Cards
              cvc="123"
              expiry="07/26"
              name="BERNICE TEO"
              number="6234 5678 9012 3456"
            />
          </div>
          <CardDetails userId="6da94a1c-4dd6-4c2c-a35e-8879cc8503c2" />
          <UserTransactions userId="6da94a1c-4dd6-4c2c-a35e-8879cc8503c2" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
