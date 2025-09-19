import React from "react";

function Pricing() {
  return (
    <div className="container p-5 pt-0">
      <div className="row p-5">
        {/* Left Section */}
        <div className="col-md-5">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p style={{fontSize:"1.1rem"}}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            See Pricing →
          </a>
        </div>

        {/* Right Section */}
        <div className="col-md-7 d-flex justify-content-between mb-0">
          {/* Item 1 */}
          <div className="d-flex align-items-center">
            <img
              src="media/pricing.svg" alt="Free Account" style={{ width: "110px", height: "auto" }}
            />
            <div style={{ marginLeft: "2px", lineHeight: "1.1"}} >
              <p className="text-muted" style={{ fontSize: "0.71rem", margin: 0 }}>
                Free account
              </p>
              <p className="text-muted" style={{ fontSize: "0.71rem", margin: 0 }}>
                opening
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="d-flex align-items-center">
            <img
              src="media/pricing2.svg"
              alt="Free Delivery"
              style={{ width: "110px", height: "auto" }}
            />
            <div style={{ marginLeft: "2px", lineHeight: "1.1", whiteSpace: "nowrap"}}>
              <p className="text-muted" style={{ fontSize: "0.71rem", margin: 0 }}>
                Free equity delivery
              </p>
              <p className="text-muted" style={{ fontSize: "0.71rem", margin: 0 }}>
                and direct mutual funds
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="d-flex align-items-center">
            <img
              src="media/pricing3.svg"
              alt="Intraday F&O"
              style={{ width: "110px", height: "auto" }}
            />
            <div style={{ marginLeft: "2px", lineHeight: "1.1" }}>
              <p className="text-muted" style={{ fontSize: "0.71rem", margin: 0 }}>
                Intraday and F&amp;O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Pricing;