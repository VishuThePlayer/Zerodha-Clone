import React from "react";

function Team() {
  return (
    <div className="container my-5">
      {/* Section title */}
      <h3 className="text-center mb-5">People</h3>

      <div className="row justify-content-center align-items-start g-5">
        {/* Left: portrait + name + role */}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE0_kgsXLpzww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716127060210?e=1759363200&v=beta&t=FtsqXS6kGsNCSZgLTCAJMnOSlmlpLYULnaqjQqA2mOs"
            alt="Nithin Kamath"
            className="rounded-circle img-fluid shadow-sm"
            style={{ width: 260, height: 260, objectFit: "cover" }}
          />

          <div className="text-center mt-4">
            <div className="fw-medium"></div>
            <div className="text-muted">Founder, CEO</div>
          </div>
        </div>

        {/* Right: bio */}
        <div className="col-md-5 fs-6">
          <p className="lh-lg mb-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during
            his decade long stint as a trader. Today, Zerodha has changed the landscape of the
            Indian broking industry.
          </p>
          <p className="lh-lg mb-3">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market
            Data Advisory Committee (MDAC).
          </p>
          <p className="lh-lg mb-3">Playing basketball is his zen.</p>
          <p className="lh-lg mb-0">
            Connect on{" "}
            <a className="text-decoration-none" href="#" target="_blank" rel="noreferrer">
              Homepage
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="#" target="_blank" rel="noreferrer">
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="#" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
