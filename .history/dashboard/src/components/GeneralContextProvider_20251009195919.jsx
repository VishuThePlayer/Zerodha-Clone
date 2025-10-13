import React, { useState, createContext } from "react";
import BuyActionWindowPopup from "./BuyActionWindowPopup";
import AddWindowPopup from "./AddFunds";
import GraphActionWindow from "./GraphActionWindow";


export const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  handleAddWindow: () => {},
  handleCloseAddWindow: () => {},
  openGraph: (uid) => {},
  closeGraph: () => {},

});

function GeneralContextProvider({ children }) {
  const [isBuyWindowOpen, setWindowOpen] = useState(false);
  const [isAddWindowOpen, setAddWindowOpen] = useState(false);
  const [isGraphWindowOpen, setGraphWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [fundQuantity, setFundsQuantity] = useState(0);

  const saveFundQuantity = (qty) => {
    console.log("Balance added is ",qty);
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

  const  handleOpenStockGraph = (uid) => {
    setGraphWindowOpen(true);
    setSelectedStockUID(uid);
    console.log("Bar Graph Clicked for ",selectedStockUID)
  }

  const  handleCloseStockGraph = () => {
    setGraphWindowOpen(false);
    console.log("Closing B")
  }

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        handleAddWindow: handleAddWindow,
        handleCloseAddWindow: handleCloseAddWindow,
        fundQuantity,
        saveFundQuantity,
        openGraph: handleOpenStockGraph,
        closeGraph: handleCloseStockGraph
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

      {isGraphWindowOpen && (
        <GraphActionWindow
        open = {isGraphWindowOpen}
        />
      )}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;
