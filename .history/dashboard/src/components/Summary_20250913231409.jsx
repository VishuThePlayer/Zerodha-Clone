import React from 'react'

function Summary() {
    return ( 
        <>
            <div className="summary">
                <div className="user">
                    <div className="user-text">
                        <h2>Hi! User!</h2>
                    </div>
                </div>
                <div className="Equity">
                    <div className="Equity-text">
                        <h2>Equity</h2>
                    </div>
                    <div className="equity-content">
                        <div className="equity-content">
                            <div className="equity-number">
                                <h1>3.74k</h1>
                            </div>
                            <div className="equity-number">
                                <p>margin avai</p>
                            </div>
                        </div>
                        <div className="equity-description">
                            
                        </div>
                    </div>
                </div>
                <div className="Holding">
                    <h2>Holding</h2>
                </div>
            </div>
        </>
     );
}

export default Summary;