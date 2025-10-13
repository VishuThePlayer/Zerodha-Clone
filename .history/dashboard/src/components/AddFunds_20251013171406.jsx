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
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { GeneralContext } from "./GeneralContextProvider";
import { useContext } from "react";

function AddWindowPopup({
  onClose,
}) {
  const { saveFundQuantity, handleCloseAddWindow } = useContext(GeneralContext);
  const [quantity, setQuantity] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const q = Number(quantity);
    if (!q || q <= 0) {
      setAlertMsg("Please enter a valid quantity (>=1).");
      setAlertSeverity("warning");
      setOpenAlert(true);
      return false;
    }
    return true;
  };

 const handleBuy = async () => {
  if (!validate()) return;

  setLoading(true);

};


  return (
    <>
      <Dialog open onClose={onClose} maxWidth="xs" fullWidth>
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
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="success"
            disabled={loading}
            onClick={handleBuy}
          >
            {loading ? <CircularProgress size={20} /> : "Buy"}
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