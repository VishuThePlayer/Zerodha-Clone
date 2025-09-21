import React, { useEffect, useState } from 'react'
import {positions} from '../data';
import axios from 'axios';

function Positions() {

    const [position, setPosition] = useState([]);
    useEffect(() => {
        try {
            axios.get("http://localhost:5000/allPositions").then((res) => {
                setPosition(res);
            })
        } catch (error) {
            console.log("error" + error.mesa)
        }
    }, [])
    return ( 
        <>
            <div className="positions">
                <table className='positions-table'>
                    <tr>
                        <td>Product</td>
                        <td>Instrument</td>
                        <td>Qty</td>
                        <td>Avg</td>
                        <td>LTP</td>
                        <td>P&L</td>
                        <td>Chg</td>
                    </tr>
                    {position.map((item, index) => {
                        const curValue = item.price * item.qty;
                        const pnl = curValue - item.avg * item.qty;
                        const isProfit = pnl >= 0;
                        const pnlClass = isProfit ? "profit" : "loss";
                        const dayClass = item.isLoss ? "loss" : "profit";

                        return (
                        <tr key={index}>
                            <td>{item.product}</td>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.avg.toFixed(2)}</td>
                            <td>{item.price.toFixed(2)}</td>
                            <td className={pnlClass}>{pnl.toFixed(2)}</td>
                            <td className={`col-chg ${dayClass}`}>{item.day}</td>
                        </tr>
                        );
                    })}
                </table>
            </div>
        </>
     );
}

export default Positions;