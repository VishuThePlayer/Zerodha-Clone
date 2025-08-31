import React from 'react';

function Info({ Title, Description, Img }) {
    return ( 
        <div className="text-center px-3">
            {/* Image/Icon */}
            <div className="mb-3">
                <img src={Img} alt={Title} className="img-fluid" style={{ maxHeight: "80px" }} />
            </div>

            {/* Title */}
            <h5 className="fw-semibold mb-2">{Title}</h5>

            {/* Description */}
            <p className="text-muted">{Description}</p>
        </div>
     );
}

export default Info;
