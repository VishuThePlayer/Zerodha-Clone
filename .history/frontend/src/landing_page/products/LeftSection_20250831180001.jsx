import React from "react";

export default function LeftSection({
  imgSrc,
  imgAlt = "",
  heading,
  body,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  extra,
  children, // for custom nodes like store badges
}) {
  return (
    <section className="container py-5 gap-4">
      <div className="row align-items-center gy-4">
        <div className="col-12 col-lg-6 text-center">
          <img src={imgSrc} alt={imgAlt} className="img-fluid" />
        </div>
        <div className="fs-4 col-12 col-lg-4">
          <h3 className="fw-semibold mb-4">{heading}</h3>
          {body && <p className="text-muted mb-4">{body}</p>}

          <div className="d-flex flex-wrap gap-4 align-items-center mb-3">
            {primaryText && primaryHref && (
              <a href={primaryHref} className="text-decoration-none">
                {primaryText} →
              </a>
            )}
            {secondaryText && secondaryHref && (
              <a href={secondaryHref} className="text-decoration-none">
                {secondaryText} →
              </a>
            )}
          </div>

          {children /* e.g., app store badges */}
          {extra && <div className="mt-3">{extra}</div>}
        </div>
      </div>
    </section>
  );
}
