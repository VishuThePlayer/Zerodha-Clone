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
import { GeneralContext } from "./GeneralContextProvider";
import { useContext } from "react";

function AddWindowPopup({
  open = true,     // pass open from parent if available
  onClose,
}) {
  const { saveFundQuantity, handleCloseAddWindow } = useContext(GeneralContext);
  const [quantity, setQuantity] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("warning");

  // useEffect: sync price when Currprice changes (optional but convenient)


  const validate = () => {
    const q = Number(quantity);
    if (!q || q <= 0) {
      setAlertMsg("Please enter a valid quantity (>=1).");
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
  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle>add Funds</DialogTitle>

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
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            color="inherit"
            onClick={() => {
              if (typeof onClose === "function") onClose();
            }}
            disabled={false}
          >
            Cancel
          </Button>

          <Button
            // onClick={handleBuy}
            variant="contained"
            color="success"
            disabled={false}
            onClick={async() => {
              if(quantity > 0){
                saveFundQuantity(quantity);
                await axios.post("http://localhost:5000/api/funds/addFunds", quantity).then((res) =><)
                handleCloseAddWindow();
              }
            }}
          >
            Buy
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        // onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {/* <Alert
          onClose={handleCloseSnackbar}
          severity={alertSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertMsg}
        </Alert> */}
      </Snackbar>
    </>
  );
}

export default AddWindowPopup;
