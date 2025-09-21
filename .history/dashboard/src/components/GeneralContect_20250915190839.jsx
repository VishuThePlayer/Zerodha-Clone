import React, { useState } from 'react'
import BuyActionWindowPopup from './BuyActionWindowPopup'


function GeneralContextProvider(props) {
    const [isBuyWindowOpen, setWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
   
    const handleOpenBuyWindow = (uid) => {
        setWindowOpen(true);
        setSelectedStockUID(uid);
    }

    const handleCloseBuyWindow = (uid) => {
        setWindowOpen(false);
        setSelectedStockUID("");
    }
    
    return ( 
        <GeneralContex.Provb
    );
}

export default GeneralContextProvider;