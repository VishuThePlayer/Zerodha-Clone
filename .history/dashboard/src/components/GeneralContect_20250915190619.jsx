import React, { useState } from 'react'
import BuyActionWindowPopup from './BuyActionWindowPopup'


function GeneralContextProvider(props) {
    const [isBuyWindowOpen, setWindowOpen] = useState(false);
    const [selectedStockUID, setSelecStockUID] = useState(false);
    
    return ( 
        <>
        </>
    );
}

export default GeneralContextProvider;