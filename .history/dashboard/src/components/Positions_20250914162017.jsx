import React from 'react'

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
                    <tr>
                        <td>CNC</td>
                        <td>Eveready</td>
                        <td>2</td>
                        <td>316.27</td>
                        <td>316.35</td>
                        <td>-7.84</td>
                        <td>-1.24%</td>
                    </tr>
                    <tr>
                        <td>CNC</td>
                        <td>Eveready</td>
                        <td>2</td>
                        <td>316.27</td>
                        <td>316.35</td>
                        <td>-7.84</td>
                        <td>-1.24%</td>
                    </tr>
                </table>
            </div>
        </>
     );
}

export default Positions;