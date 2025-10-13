<Button
  variant="contained"
  color="success"
  onClick={async () => {
    // Validate quantity
    if (quantity <= 0) {
      setAlertMsg("Please enter a valid quantity (>=1).");
      setAlertSeverity("warning");
      setOpenAlert(true);
      return;
    }

    try {
      // Call backend API to add funds
      const response = await axios.post(
        "http://localhost:5000/api/funds/addFunds",
        { quantity }
      );

      console.log("Funds added:", response.data);

      // Update context / local state
      saveFundQuantity(quantity);

      // ✅ Close dialog via parent handler
      if (typeof onClose === "function") onClose();

      // Optionally show success alert
      setAlertMsg("Funds added successfully!");
      setAlertSeverity("success");
      setOpenAlert(true);

    } catch (error) {
      console.error(error.message);
      setAlertMsg("Error adding funds");
      setAlertSeverity("error");
      setOpenAlert(true);
    }
  }}
>
  Buy
</Button>
