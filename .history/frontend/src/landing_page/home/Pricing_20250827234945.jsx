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
                    <div class="btn-group-vertical" role="group" aria-label="">
                        <button type="button" class="btn btn-secondary">First One</button>
                        <button type="button" class="btn btn-secondary">Second One</button>
                        <div class="btn-group" role="group">
                            <button
                                id="dropdownId"
                                type="button"
                                class="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                More
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">First Dropdown</a>
                                <a class="dropdown-item" href="#">Second Dropdown</a>
                            </div>
                        </div>
                    </div>
                    
                    <img 
                        className=''
                        src="https://zerodha.com/static/images/pricing-eq.svg" 
                        alt="" 
                        style={{width: "8%"}}
                    />

                    
                    <p> Free equity delivery and direct mutual funds</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;