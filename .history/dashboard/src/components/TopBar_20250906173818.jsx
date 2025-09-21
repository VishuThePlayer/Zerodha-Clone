import React from 'react'

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
                    <div className="sen">
                        <p className='index'>BSE</p>
                        <p className='index.points'>{100.2}</p>
                        <p className='percent'></p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default TopBar;