import React from "react";

function HeroSupport() {
    return(
        <div style={{ background: "#f6f6f6", padding: "20px 40px" }} className="p-5 pt-0 pb-0">
      {/* Header Row */}
      <div className="p-5 m-5 mt-0 mb-2 pt-4">
       <div className="d-flex justify-content-between align-items-center mb-4  ms-3 pt-0">
        <h1 style={{ fontWeight: "600", color: "#2d3e50", margin: 0 }} >Support Portal</h1>
        <button
          className="btn btn-primary"
          style={{ minWidth: "120px", fontWeight: "500" }}>My tickets </button>
        </div>

      {/* Search Bar */}
      <div className="d-flex justify-content-center">
        <div
          className="input-group "
          style={{ width: "100%" }}>
          <span className="input-group-text bg-white border-end-0 ms-2 text-muted">
             <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input style={{height:"60px"}}
            type="text"
            className="form-control border-start-0"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
      </div>
    </div>
    );
}

export default HeroSupport;