import React from 'react'

function Team() {
  return (
    <>
      <div className="container my-5">
        <h3 className="text-center mb-4">People</h3>

        <div className="row align-items-center">
          {/* Image column */}
          <div className="col-md-6 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQE0_kgsXLpzww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716127060210?e=1759363200&v=beta&t=FtsqXS6kGsNCSZgLTCAJMnOSlmlpLYULnaqjQqA2mOs"
              alt="Nithin Kamath"
              className="img-fluid rounded-circle shadow-sm"
              style={{ maxWidth: '200px' }}
            />
          </div>

          {/* Text column */}
          <div className="col-md-2">
            <p className="lh-lg">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during
              his decade long stint as a trader. Today, Zerodha has changed the landscape of the
              Indian broking industry.
            </p>
            <p className="lh-lg">
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market
              Data Advisory Committee (MDAC).
            </p>
            <p className="lh-lg">Playing basketball is his zen.</p>
            <p className="lh-lg">
              Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{' '}
              <a href="#">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team

