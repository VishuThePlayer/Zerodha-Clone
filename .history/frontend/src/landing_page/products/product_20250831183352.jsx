import React from 'react';

function Product({ link, img, desc, imgClass }) {
    return (
        <div className="text-center p-3">
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <img className={imgClass} src={img} alt="product logo" /><br />
                <span className="text-12 text-light-grey">{desc}</span>
            </a>
            <br /><br className="hide-on-mobile" />
        </div>
    );
}

export default Product;
