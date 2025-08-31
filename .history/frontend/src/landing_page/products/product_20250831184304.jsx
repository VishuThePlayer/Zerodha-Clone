import React from 'react';

function Product({ img, desc }) {
    return ( 
        <div className="d-flex flex-column align-items-center p-3">
            <img style={{ width: "40%" }} src={img} alt="product" />
            <p style={{width: "59%", fontSize: "1rem"}} className="mttext-center text-muted">
                {desc}
            </p>
        </div>
    );
}

export default Product;
