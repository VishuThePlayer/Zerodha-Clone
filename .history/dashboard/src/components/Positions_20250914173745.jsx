import React from 'react'
import {positions} from '../';

function Positions() {
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
                    {positions.map((items, index) => (
                        <tr key={index}>
                            <td>{items.product}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
     );
}

export default Positions;