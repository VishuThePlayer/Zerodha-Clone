import React, { useState, createContext } from "react";
import BuyActionWindowPopup from "./BuyActionWindowPopup";

export const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

function GeneralContextProvider({ children }) {
  const [isBuyWindowOpen, setWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const handleOpenBuyWindow = (uid, price) => {
    console.log("Opening buy window for:", uid, ); // ✅ Debugging log
    setWindowOpen(true);
    setSelectedStockUID(uid);
    selectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    console.log("Closing buy window"); // ✅ Debugging log
    setWindowOpen(false);
    setSelectedStockUID("");
    selectedStockPrice(0);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindowPopup
          uid={selectedStockUID}
          onClose={handleCloseBuyWindow} // ✅ FIXED
        />
      )}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;
