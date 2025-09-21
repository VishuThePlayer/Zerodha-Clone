import React from 'react'
import {Menu} from './'

function TopBar() {
    return ( 
        <>
            <div className="topbar-container">
                <div className="indices-container">
                    <div className="nifty">
                        <p className='index'>BSE</p>
                        <p className='index.points'>{100.2}</p>
                        <p className='percent'></p>
                    </div>
                    <div className="sensex">
                        <p className='index'>NSE</p>
                        <p className='index.points'>{100.2}</p>
                        <p className='percent'></p>
                    </div>
                </div>
                <Menu/>
            </div>
        </>
     );
}

export default TopBar;