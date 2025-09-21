import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function BuyActionWindowPopup({ uid, Currprice, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [openAlert, setOpenAlert] = useState(false); // ✅ Snackbar state
  const [alertMsg, setAlertMsg] = useState("");


  const handleBuy = () => {
    if (!quantity || !price || price <= (Currprice || 0) || quantity <= 0) {
      setAlertMsg("⚠️ Please enter valid Quantity and Price!");
      setOpenAlert(true);
      return;
    }

    console.log("Buying", quantity, "shares of", uid, "at price", price);
    axios
      .post("http://localhost:5000/api/ord", {
        name: uid,
        qty: quantity,
        price: price,
        mode: "BUY",
      })
      .then((res) => console.log(res))
      .catch(() => {
        setAlertMsg("❌ Failed to place order. Try again.");
        setOpenAlert(true);
      });

    onClose();
  };

  return (
    <>
      <Dialog open={true} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle>Buy {uid}</DialogTitle>

        <DialogContent>
          <Stack spacing={2} mt={1}>
            <Typography variant="body2" color="text.secondary">
              Enter the quantity and price to place your buy order.
            </Typography>

            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              fullWidth
              variant="outlined"
              size="small"
            />

            <TextField
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Link
            to=""
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <Button color="inherit">Cancel</Button>
          </Link>

          <Button onClick={handleBuy} variant="contained" color="success">
            Buy
          </Button>
        </DialogActions>
      </Dialog>

      {/* ✅ Modern Snackbar Alert */}
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenAlert(false)}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertMsg}
        </Alert>
      </Snackbar>
    </>
  );
}

export default BuyActionWindowPopup;
