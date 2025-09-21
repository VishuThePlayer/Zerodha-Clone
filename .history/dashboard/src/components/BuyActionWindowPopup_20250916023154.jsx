import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import GeneralContextProvider from "./GeneralContextProvider";
import axios from "axios";

function BuyActionWindowPopup({ uid, Currprice, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0.0);


  const handleBuy = () => {
    if (!quantity || !price) {
      alert("Please fill both fields!");
      return;
    }
    console.log("Buying", quantity, "shares of", uid, "at price", price);
    axios.post("http://localhost:5000/newOrder", {
        name: uid,
        qty: quantity,
        price: price,
        mode: "BUY"
    }).then((res) => {
        console.log(res);
    })
    onClose(); // close popup after buy
  };

  return (
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
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
          />

          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
                e.preventDefault(); // agar navigation nahi chahiye to
                onClose();
            }}
            >
            <Button color="inherit">
                Cancel
            </Button>
            </Link>

        <Button onClick={handleBuy} variant="contained" color="success">
          Buy
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BuyActionWindowPopup;
