import React from 'react'


function Educations() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <img 
                        src="https://zerodha.com/static/images/index-education.svg" 
                        alt="" 
                    />
                </div>
                <div className="col">
                    <h1 className='fs-3 fw-normal mb-4'>Free and open market education</h1>
                    <p> cla
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a 
                        href="">
                        Varsity
                    </a>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a 
                        href=" ">
                        TradingQ&A 
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Educations;