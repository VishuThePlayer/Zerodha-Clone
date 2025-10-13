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
  refreshFunds: () => {},
});

function GeneralContextProvider({ children }) {
  const [isBuyWindowOpen, setWindowOpen] = useState(false);
  const [isAddWindowOpen, setAddWindowOpen] = useState(false);
  const [isGraphWindowOpen, setGraphWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [fundQuantity, setFundsQuantity] = useState(0);
  const [fundsRefreshTrigger, setFundsRefreshTrigger] = useState(0);

  const saveFundQuantity = (qty) => {
    console.log("Balance added is ", qty);
    setFundsQuantity(qty);
    // Trigger a refresh with a new timestamp
    setFundsRefreshTrigger(Date.now());
  };

  const handleOpenBuyWindow = (uid, Currprice) => {
    console.log("Opening buy window for:", uid, Currprice);
    setWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(Currprice);
  };

  const handleAddWindow = () => {
    console.log("Opening Add Balance Window");
    setAddWindowOpen(true);
  };

  const handleCloseAddWindow = () => {
    console.log("Closing Add Balance Window");
    setAddWindowOpen(false);
  };

  const handleCloseBuyWindow = () => {
    console.log("Closing buy window");
    setWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  const handleOpenStockGraph = (uid) => {
    setGraphWindowOpen(true);
    setSelectedStockUID(uid);
    console.log("Bar Graph Clicked for ", selectedStockUID);
  };

  const handleCloseStockGraph = () => {
    setGraphWindowOpen(false);
    console.log("Closing Line Graph");
  };

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
        closeGraph: handleCloseStockGraph,
        fundsRefreshTrigger,
      }}
    >
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindowPopup
          uid={selectedStockUID}
          price={selectedStockPrice}
          onClose={handleCloseBuyWindow}
        />
      )}

      {isAddWindowOpen && (
        <AddWindowPopup
          onClose={handleCloseAddWindow}
        />
      )}

      {isGraphWindowOpen && (
        <GraphActionWindow
          onClose={handleCloseStockGraph}
        />
      )}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;