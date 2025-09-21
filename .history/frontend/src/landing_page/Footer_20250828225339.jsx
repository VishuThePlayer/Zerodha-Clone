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
                    <div class="col">
                        <h4 className='fw-lig'>Account</h4>
                    </div>
                    <div class="col">
                        <h4>Support</h4>
                    </div>
                    <div class="col">
                        <h4>Company</h4>
                    </div>
                    <div class="col">
                        <h4>Quick links</h4>
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Footer;