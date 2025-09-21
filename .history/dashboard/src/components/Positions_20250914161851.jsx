import React from 'react'

function Positions() {
    return ( 
        <>
            <div className="positions">
                <table>
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
                        <td>Cocker Spaniel</td>
                        <td>Cocker Spaniel</td>
                    </tr>
                    <tr>
                        <td>CNC</td>
                        <td>16</td>
                        <td>9</td>
                        <td>10</td>
                        <td>Cocker Spaniel</td>
                        <td>Cocker Spaniel</td>
                        <td>5</td>
                    </tr>
                </table>
            </div>
        </>
     );
}

export default Positions;