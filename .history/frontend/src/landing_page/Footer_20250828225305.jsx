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
                        <h4>Account</h4>
                    </div>
                    <div class="col">
                        Support<h4>Account</h4>
                    </div>
                    <div class="col">
                        Company<h4>Account</h4>
                    </div>
                    <div class="col">
                        Quick links
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Footer;