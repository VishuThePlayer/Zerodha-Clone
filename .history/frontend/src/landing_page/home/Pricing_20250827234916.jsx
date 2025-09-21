import React from 'react'


function Pricing() {
    return ( 
        <div className="container text-center">
            <div className="row">
                <div className="col d-flex flex-column">
                    <h1 className='align-self-start'>Unbeatable pricing</h1>
                    <p className='text-start'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a 
                        className='text-start'
                        href=""
                    >
                        See pricing 
                    </a>
                </div>
                <div className="row">
                    <img 
                        className=''
                        src="https://zerodha.com/static/images/pricing-eq.svg" 
                        alt="" 
                        style={{width: "1%"}}
                    />
                    <p> Free account opening</p>
                    <img 
                        className=''
                        src="https://zerodha.com/static/images/pricing-eq.svg" 
                        alt="" 
                        style={{width: "10%"}}
                    />

                    
                    <p> Free equity delivery and direct mutual funds</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;