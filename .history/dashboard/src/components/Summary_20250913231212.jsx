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
                    <div className="Equity-content">
                        <div className="equity-number">
                            
                        </div><div className="equity-number">
                            
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