import React from 'react';

function Product({ img, desc }) {
    return ( 
        <div className="d-flex flex-column align-items-center p-3">
            <img style={{ width: "40%" }} src={img} alt="product" />
            <p className="text-center mt-2">
                {desc}
            </p>
        </div>
    );
}

export default Product;
