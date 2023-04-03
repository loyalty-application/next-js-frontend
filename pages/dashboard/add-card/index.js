import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddCardPage() {
    const router = useRouter();
    const [cardId, setCardId] = React.useState("");
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);

    const handleAddCard = async () => {
        const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODAwNjQ1MzN9.jFcFfsp8nznwKJhc9m5QMpmC8wkLwhQtZydCZBRlQH8";
        const endpoint = "http://localhost:8080/api/v1/user/sudo@gabriel.dev";

        try {
            const response = await fetch(endpoint, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    cards: [cardId],
                }),
            });

            if (response.ok) {
                setOpenSuccess(true);
                setCardId(""); // Clear the TextField
            } else {
                setOpenError(true);
            }
        } catch (error) {
            console.error(error);
            setOpenError(true);
        }
    };


    const handleCloseSuccess = () => {
        setOpenSuccess(false);
    };

    const handleCloseError = () => {
        setOpenError(false);
    };

    return (
        <div>
            <Box sx={{ padding: 4 }}>
                <ArrowBackIosIcon onClick={() => router.back()} />
            </Box>
            <div className="flex p-20 justify-center h-max items-center">
                <div className="flex-col">
                    <h2 className="text-center text-xl text-base font-medium">
                        Enter your Card ID
                    </h2>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            "& > :not(style)": { m: 1 },
                        }}
                    >
                        <TextField
                            helperText="e.g. 1234 5678 9012 3456"
                            id="demo-helper-text-aligned"
                            label="Card ID"
                            placeholder="Enter Card ID"
                            value={cardId}
                            onChange={(e) => setCardId(e.target.value)}
                        />
                    </Box>
                    <div className="flex justify-center items-center p-4">
                        <Button
                            variant="contained"
                            onClick={handleAddCard}
                            className="inline-flex items-center justify-center px-3 sm:px-5 py-2 text-sm sm:text-base font-semibold transition-all bg-amber-300 text-inherit hover:scale-100 scale-90 duration-300 rounded-lg"
                        >
                            Add Card
                        </Button>
                        <Dialog open={openSuccess} onClose={handleCloseSuccess}>
                            <DialogTitle>Success</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Card successfully added!</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseSuccess}>Close</Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog open={openError} onClose={handleCloseError}>
                            <DialogTitle>Error</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    An error occurred while adding the card.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseError}>Close</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}
