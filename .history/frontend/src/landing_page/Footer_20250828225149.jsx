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
                    <div class="col">Account</div>
                    <div class="col">Support</div>
                    <div class="col">Company</div>
                    <div class="col"
                    >Quick links
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Footer;