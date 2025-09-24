import React, { useState, createContext } from "react";
import BuyActionWindowPopup from "./BuyActionWindowPopup";

export const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

function GeneralContextProvider({ children }) {
  const [isBuyWindowOpen, setWindowOpen] = useState(false);
  const [isAddWindowOpen, setAddWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const handleOpenBuyWindow = (uid, Currprice) => {
    console.log("Opening buy window for:", uid, Currprice); // ✅ Debugging log
    setWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(Currprice);
  };

  const handleAddWindow = () => {
    co
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
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;
