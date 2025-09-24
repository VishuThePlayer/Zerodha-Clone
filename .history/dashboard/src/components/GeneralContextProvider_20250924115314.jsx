import React, { useState, createContext } from "react";
import BuyActionWindowPopup from "./BuyActionWindowPopup";
import AddWindowPopup from "./AddFunds";

export const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  handleAddWindow: () => {},
  handleCloseAddWindow: () => {},
});

function GeneralContextProvider({ children }) {
  const [isBuyWindowOpen, setWindowOpen] = useState(false);
  const [isAddWindowOpen, setAddWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [fundQuantity, setFundsQuantity] = useState(0);

  const saveFundQuantity = (qty) => {
    console.log("Balance added is ",qty)
    setFundsQuantity(qty);
  }
  const handleOpenBuyWindow = (uid, Currprice) => {
    console.log("Opening buy window for:", uid, Currprice); // ✅ Debugging log
    setWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(Currprice);
  };

  const handleAddWindow = () => {
    console.log("Opening Add Balanace Window");
    setAddWindowOpen(true);
  }

  const handleCloseAddWindow = () => {
    console.log("Opening Add Balanace Window");
    setAddWindowOpen(false);
  }

  const handleCloseBuyWindow = () => {
    console.log("Closing buy window"); // ✅ Debugging log
    setWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        handleAddWindow: handleAddWindow,
        handleCloseAddWindow: handleCloseAddWindow,
        fundQuantity,
        saveFundQuantity
      }}
    >
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindowPopup
          uid={selectedStockUID}
          price={selectedStockPrice}
          onClose={handleCloseBuyWindow} // ✅ FIXED
        />
      )}

      
      {isAddWindowOpen && (
        <AddWindowPopup
          onClose={handleCloseAddWindow} // ✅ FIXED
        />
      )}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;
