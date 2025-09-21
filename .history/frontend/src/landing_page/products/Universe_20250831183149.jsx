import React from 'react'
import Product from './Product';

function Universe() {
    return ( 
        <>
            <div className="container mt-5">
                <h3 className='text-center fw-normal fs-4'>Want to know more about our technology stack? Check out the <a href="Zerodha.tech">Zerodha.tech</a> blog.</h3>
                <br />
                <br />
                <br />
                <br />
                <div className='container'>
                    <h2 className='text-center mb-4'>The Zerodha Universe</h2>
                    <p className='text-center text-muted fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
                    <div className="row">
                        <div className="col">
                            <Product/>
                        </div>
                        <div className="col">
                            <Product/>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Universe;