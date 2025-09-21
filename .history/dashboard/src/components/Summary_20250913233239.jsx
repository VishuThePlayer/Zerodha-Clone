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
                        <div className="equity-content-1">
                            <div className="equity-number">
                                <h1>3.74k</h1>
                            </div>
                            <div className="equity-number">
                                <p>margin available</p>
                            </div>
                        </div>
                        <div className="equity-content-2">
                            <p>Margin used 0</p>
                            <p>Opening balance 3.74k</p>
                        </div>
                    </div>
                </div>
                <div className="Equity">
                    <div className="Equity-text">
                        <h2>Holding</h2>
                    </div>
                    <div className="equity-content">
                        <div className="equity-content-1">
                            <div className="equity-number">
                                <h1>1.55k</h1>
                            </div>
                        </div>
                        <div className="equity-content-2">
                            <p>Current 0</p>
                            <p>Opening balance 3.74k</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Summary;