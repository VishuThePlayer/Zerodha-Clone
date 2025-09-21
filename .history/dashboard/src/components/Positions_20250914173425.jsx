import React from 'react'
import {positions} from 'react';

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
                    {Positions.map((items) )}
                </table>
            </div>
        </>
     );
}

export default Positions;