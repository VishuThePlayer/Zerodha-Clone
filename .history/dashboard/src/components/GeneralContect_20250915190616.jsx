import React, { useState } from 'react'
import BuyActionWindowPopup from './BuyActionWindowPopup'


function GeneralContextProvider(props) {
    const [isBuyWindowOpen, setWindowOpen] = useState(false);
    const [selectedStockUID, sStockUID] = useState(false);
    
    return ( 
        <>
        </>
    );
}

export default GeneralContextProvider;