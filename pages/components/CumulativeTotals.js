import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CumulativeTotals = ({ totals }) => {

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
