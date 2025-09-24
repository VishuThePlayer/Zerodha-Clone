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
  CircularProgress,
} from "@mui/material";
import axios from "axios";

function AddWindow({
  uid,
  Currprice,
  open = true,     // pass open from parent if available
  onClose,
}) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [orderSuccess, setOrderSuccess] = useState(false);

  // useEffect: sync price when Currprice changes (optional but convenient)
  useEffect(() => {
    if (Currprice) setPrice(Number(Currprice));
  }, [Currprice]);

  const validate = () => {
    const q = Number(quantity);
    const p = Number(price);

    if (!q || q <= 0) {
      setAlertMsg("Please enter a valid quantity (>=1).");
      setAlertSeverity("warning");
      setOpenAlert(true);
      return false;
    }
    if (!p || p <= 0) {
      setAlertMsg("Please enter a valid price (>0).");
      setAlertSeverity("warning");
      setOpenAlert(true);
      return false;
    }
    // Optional business rule: comment out if you don't want this restriction
    // if (p <= (Currprice || 0)) {
    //   setAlertMsg("Limit buy price must be greater than current price.");
    //   setAlertSeverity("warning");
    //   setOpenAlert(true);
    //   return false;
    // }

    return true;
  };

  const handleBuy = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const payload = {
        name: uid,
        qty: Number(quantity),
        price: Number(price),
        mode: "BUY",
      };

      // IMPORTANT: send cookies for auth if backend uses cookie based auth
      const res = await axios.post(
        "https://zerodha-clone-bui7.onrender.com/api/orders/",
        payload,
        { withCredentials: true }
      );

      setAlertMsg(res.data?.message || "Funds Added successfully.");
      setAlertSeverity("success");
      setOrderSuccess(true);
      setOpenAlert(true);
    } catch (err) {
      console.error("Order error:", err);
      setAlertMsg(
        err.response?.data?.message || "Failed to Add Funds. Try again."
      );
      setAlertSeverity("error");
      setOrderSuccess(false);
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
    // DO NOT call onClose() here — wait for Snackbar to close (handled below)
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
    // If order was successful, close dialog after user saw the notif.
    if (orderSuccess) {
      // small delay to avoid abrupt UI jump (optional)
      setTimeout(() => {
        if (typeof onClose === "function") onClose();
      }, 150);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
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
              inputProps={{ min: 1 }}
              onChange={(e) => setQuantity(Number(e.target.value))}
              fullWidth
              variant="outlined"
              size="small"
            />
            <Typography variant="caption" color="text.secondary">
              Current Market Price: {Currprice ?? "N/A"}
            </Typography>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            color="inherit"
            onClick={() => {
              if (typeof onClose === "function") onClose();
            }}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            onClick={handleBuy}
            variant="contained"
            color="success"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={18} /> : null}
          >
            {loading ? "Placing..." : "Buy"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity}
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
