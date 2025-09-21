import React from 'react'


function Footer() {
    return ( 
        <>
            <div className="container">
                <div
                    class="row justify-content-center align-items-center g-2"
                >
                    <div class="col">
                        <img style={{width: "50%"}} src="https://zerodha.com/static/images/logo.svg" alt="" />
                    </div>
                    <div class="col g">
                        <h4 className='fw-medium'>Account</h4>
                        <div className="col">
                            <h6 className='fs-5 fw-light'>Open demat account</h6>
                        </div>
                        <div className="col">
                            <h5 className='fs-5 fw-light'>Minor demat account</h5>
                        </div>
                        <div className="col">
                            <h5 className='fs-5 fw-light'>NRI demat account</h5>
                        </div>
                        <div className="col">
                            <h5 className='fs-5 fw-light'>Commodity</h5>
                        </div>
                        <div className="col">
                            <h5 className='fs-5 fw-light'>Dematerialisation</h5>
                        </div>
                        <div className="col">
                            <h5 className='fs-5 fw-light'>Fund transfer</h5>
                        </div>
                    </div>
                    <div class="col">
                        <h4 className='fw-medium'>Support</h4>
                    </div>
                    <div class="col">
                        <h4 className='fw-medium'>Company</h4>
                    </div>
                    <div class="col">
                        <h4 className='fw-medium'>Quick links</h4>
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Footer;