import React, { useState, createContext } from 'react';
import BuyActionWindowPopup from './BuyActionWindowPopup';

// 1️⃣ Create the Context
export const GeneralContext = createContext({
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
});

function GeneralContextProvider({ children }) {
  const [isBuyWindowOpen, setWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: (uid) => {},
        closeBuyWindow: () => {},
      }}
    >
      {children}

      {/* Optional: Render popup globally so it's accessible */}
      {isBuyWindowOpen && (
        <BuyActionWindowPopup
          uid={selectedStockUID}
          onClose={handleCloseBuyWindow}
        />
      )}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;
