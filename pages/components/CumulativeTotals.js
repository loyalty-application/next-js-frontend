import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



const CumulativeTotals = ({ userId }) => {
    const [totals, setTotals] = useState(null);
    const BEARER_TOKEN =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IkRhbmVsbGUuTydLb25AZ21haWwuY29tIiwiRmlyc3RfbmFtZSI6IkRhbmVsbGUiLCJMYXN0X25hbWUiOiJPJ0tvbiIsIlVpZCI6IjAwMDA0OGRiLWYzNGYtNDg0MC1hY2EyLTU4ODYzMDQ4YTUzYiIsImV4cCI6MTY4MDU4ODM2OX0.tgtRd6hUQ04gJUxGHbiY6HvcNSb6e8e5bMa_tq09lRw";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://35.187.241.140:8080/api/v1/user/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${BEARER_TOKEN}`,
                    },
                }
            );
            const data = await response.json();
            setTotals({
                points: data.points,
                miles: data.miles,
                cashback: data.cashback,
            });
        };
        fetchData();
    }, [userId]);

    if (!totals) {
        return <p>Loading...</p>;
    }

    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                flexDirection: "column",
                paddingTop: "40px",
                paddingBottom: "40px",
                paddingRight: "40px",
            }}
        >
            <div style={{ flex: 1 }}>
                <Card style={{ minWidth: "150px" }}>
                    <CardContent>
                        <Typography gutterBottom>Points</Typography>
                        <Typography variant="h6" component="h5">
                            {totals.points}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div style={{ flex: 1 }}>
                <Card style={{ minWidth: "150px" }}>
                    <CardContent>
                        <Typography gutterBottom>Miles</Typography>
                        <Typography variant="h6" component="h6">
                            {totals.miles}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div style={{ flex: 1 }}>
                <Card style={{ minWidth: "100px" }}>
                    <CardContent>
                        <Typography gutterBottom>Cashback</Typography>
                        <Typography variant="h6" component="h6">
                            {totals.cashback}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CumulativeTotals;
