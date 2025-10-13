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
  Snackbar,
  Alert,
  
} from "@mui/material";
import axios from "axios";
import { GeneralContext } from "./GeneralContextProvider";
import { useContext } from "react";

function AddWindowPopup({
  open = false,
  onClose,
}) {
  const { saveFundQuantity } = useContext(GeneralContext);
  const [quantity, setQuantity] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [loading, setLoading] = useState(false);

  const handleAddFunds = async () => {
    // Validate quantity
    if (quantity <= 0) {
      setAlertMsg("Please enter a valid quantity (>=1).");
      setAlertSeverity("warning");
      setOpenAlert(true);
      return;
    }

    setLoading(true);

    try {
      // Call backend API to add funds
      const response = await axios.post(
        "http://localhost:5000/api/funds/addFunds",
        { quantity }
      );

      console.log("Funds added:", response.data);

      // Update context
      saveFundQuantity(quantity);

      // Show success message
      setAlertMsg("Funds added successfully!");
      setAlertSeverity("success");
      setOpenAlert(true);

      // Reset form
      setQuantity(1);

      // Close dialog after a short delay so user sees success message
      setTimeout(() => {
        if (typeof onClose === "function") onClose();
      }, 500);

    } catch (error) {
      console.error(error.message);
      setAlertMsg(error.response?.data?.message || "Error adding funds");
      setAlertSeverity("error");
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (typeof onClose === "function") onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Add Funds</DialogTitle>

        <DialogContent>
          <Stack spacing={2} mt={1}>
            <Typography variant="body2" color="text.secondary">
              Enter the quantity to add funds to your account.
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
              disabled={loading}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            color="inherit"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={handleAddFunds}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Add Funds"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenAlert(false)}
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

export default AddWindowPopup;