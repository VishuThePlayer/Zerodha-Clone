import React from 'react';

function Info({ Title, Description, Img }) {
    return ( 
        <div className="text-center px-3">
            {/* Image/Icon */}
            <div className="mb-3">
                <img src={Img} alt={Title} className="img-fluid" style={{ width: "40px" }} />
            </div>

            {/* Title */}
            <h5 className="fs-3 fw-semibold mb-2">{Title}</h5>

            {/* Description */}
            <p className="fs-5 text-muted">{Description}</p>
        </div>
     );
}

export default Info;
