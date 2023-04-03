import React from "react";
import Navbar from "./components/Navbar";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState, useEffect } from "react";
import UserTransactions from "./components/UserTransactions";
import { useAuth } from "../contexts/AuthContext";
import api from "../config/api";
import { useRouter } from "next/router";
import CardDetails from "./components/CardDetails";


const Dashboard = () => {
    // login state
    const { user, loading, login, logout } = useAuth()

    // page states 
    const [totals, setTotals] = useState({
        points: 0,
        miles: 0,
        cashback: 0,
    });

    const [cards, setCards] = useState([]);

    const [transactions, setTransactions] = useState([]);
    const [transactionRowsLimit, setTransactionsRowsLimit] = useState(10);
    const [transactionPageNo, setTransactionPageNo] = useState(0);

    const [error, setError] = useState(null);
    const router = useRouter()

    // init state
    useEffect(() => {
        if (!user) {
            router.replace('/Login')
        }
        fetchCards();
        fetchTransactions();
        fetchTotals()
    }, []);

    const fetchTransactions = async () => {
        try {
            const res = await api.get(`/api/v1/transaction/${user.user_id}`);
            const data = res.data
            setTransactions(data);
        } catch (e) {
            console.log(e);
        }
    };
    const fetchCards = async () => {
        try {
            const res = await api.get(`/api/v1/card/user/${user.user_id}`)
            const data = res.data
            setCards(data);
        } catch (e) {
            console.log(e)
        }
    };
    const fetchTotals = async () => {
        try {
            const res = await api.get(`/api/v1/user/${user.user_id}`);
            const data = res.data
            setTotals(data);
        }
        catch (e) {
            console.log(e)
        }
    };

    const settings = {
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
                            Good to see you here, {user.first_name + " " + user.last_name}!
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        {cards.map((card) => (
                            <Cards
                                expiry=""
                                name={(user.first_name + " " + user.last_name).toUpperCase()}
                                number={card.card_pan}

                            />))}
                        <Cards
                            cvc="212"
                            expiry="07/26"
                            name="BERNICE TEO"
                            number="2334 5678 9012 3456"
                            preview={true}
                        />
                        <Cards
                            cvc="123"
                            expiry="07/26"
                            name="BERNICE TEO"
                            number="6234 5678 9012 3456"
                            preview={true}
                        />
                    </div>
                    <CardDetails totals={totals} cards={cards} userId="6da94a1c-4dd6-4c2c-a35e-8879cc8503c2" />
                    <UserTransactions transactions={transactions} />
                </div>
            </div>
        </div>
    );
};


export default Dashboard;
