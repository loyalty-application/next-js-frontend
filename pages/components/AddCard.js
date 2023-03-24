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

export default function AddCard() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleAddCard = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Confirm Add Card</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to add this card?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} color="primary">
                  Add
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
