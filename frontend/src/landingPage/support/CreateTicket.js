
import React, { useState } from "react";

function CreateTicket() {
  const [isOpen, setIsOpen] = useState(false);
    return(
    <div className="container my-4">
      <div className="row">
        {/* Left Column */}
      <div className="col-md-8 p-5 pt-4 pe-0 ">


            
            {/* Item 1 */}
       <div className="d-flex align-items-center border " style={{ overflow: "hidden",marginBottom: "0px"}}>
           <div className="d-flex justify-content-center align-items-center w-full"style={{width: "60px",background: "#f2f8fe",padding: "14px",}}>
          <a href="/" style={{textDecoration:'none',fontSize:"1.2rem"}}><i class="fa-regular fa-circle-user"></i></a>
           </div>
           <div className="flex-grow-1 px-3 ">
             <span style={{ fontSize: "1.1rem",fontWeight:"500"}}>Account Opening</span>
           </div>
                <div
          className="px-3 text-primary"
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </div>
      </div>

            {/* Collapsible Content */}
             {isOpen && (
        <div className="px-4 pb-3 bg-white ms-2 border pt-3 " style={{width:"98%"}}>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: 0 }}>
            <li className="mb-2" style={{fontSize:"1.05rem"}}>
              <a href="/" className="text-primary text-decoration-none">
                Resident individual
              </a>
            </li>
            <li className="mb-2"  style={{fontSize:"1.05rem"}}>
              <a href="/" className="text-primary text-decoration-none">
                Minor
              </a>
            </li>
            <li className="mb-2"  style={{fontSize:"1.05rem"}}>
              <a href="/" className="text-primary text-decoration-none">
                Non Resident Indian (NRI)
              </a>
            </li>
            <li className="mb-2"  style={{fontSize:"1.05rem"}}>
              <a href="/" className="text-primary text-decoration-none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li style={{fontSize:"1.05rem"}}>
              <a href="/" className="text-primary text-decoration-none">
                Glossary
              </a>
            </li>
          </ul>
        </div>
      )}

            {/* Item 2 */}
         <div className="d-flex align-items-center border" style={{ overflow: "hidden",marginTop: "30px"}}>
           <div className="d-flex justify-content-center align-items-center w-full"style={{width: "60px",background: "#f2f8fe",padding: "14px",}}>
          <a href="/" style={{textDecoration:'none',fontSize:"1.2rem"}}><i class="fa-regular fa-circle-user"></i></a>
           </div>
           <div className="flex-grow-1 px-3 py-2">
             <span style={{ fontSize: "1.1rem",fontWeight:"500"}}>Your Zerodha Account</span>
           </div>
           <div className="px-3 text-muted">
              <i className="fas fa-chevron-down"></i>
            </div>
      </div>

            {/* Item 3 */}
         <div className="d-flex align-items-center border" style={{ overflow: "hidden",marginTop: "30px"}}>
           <div className="d-flex justify-content-center align-items-center w-full"style={{width: "60px",background: "#f2f8fe",padding: "14px",}}>
          <a href="/" style={{textDecoration:'none',fontSize:"1.2rem"}}><i class="fa-regular fa-circle-user"></i></a>
           </div>
           <div className="flex-grow-1 px-3 py-2">
             <span style={{ fontSize: "1.1rem",fontWeight:"500"}}>Kite</span>
           </div>
           <div className="px-3 text-muted">
              <i className="fas fa-chevron-down"></i>
            </div>
      </div>   
            {/* Item 4 */}
         <div className="d-flex align-items-center border" style={{ overflow: "hidden",marginTop: "30px"}}>
           <div className="d-flex justify-content-center align-items-center w-full"style={{width: "60px",background: "#f2f8fe",padding: "14px",}}>
          <a href="/" style={{textDecoration:'none',fontSize:"1.2rem"}}><i class="fa-regular fa-circle-user"></i></a>
           </div>
           <div className="flex-grow-1 px-3 py-2">
             <span style={{ fontSize: "1.1rem",fontWeight:"500"}}>Funds</span>
           </div>
           <div className="px-3 text-muted">
              <i className="fas fa-chevron-down"></i>
            </div>
      </div>  
       {/* Item 4 */}
      <div className="d-flex align-items-center border" style={{ overflow: "hidden",marginTop: "30px"}}>
           <div className="d-flex justify-content-center align-items-center w-full"style={{width: "60px",background: "#f2f8fe",padding: "14px",}}>
          <a href="/" style={{textDecoration:'none',fontSize:"1.2rem"}}><i class="fa-regular fa-circle-user"></i></a>
           </div>
           <div className="flex-grow-1 px-3 py-2">
             <span style={{ fontSize: "1.1rem",fontWeight:"500"}}>Console</span>
           </div>
           <div className="px-3 text-muted">
              <i className="fas fa-chevron-down"></i>
            </div>
      </div>  
       {/* Item 4 */}
      <div className="d-flex align-items-center border" style={{ overflow: "hidden",marginTop: "30px"}}>
           <div className="d-flex justify-content-center align-items-center w-full"style={{width: "60px",background: "#f2f8fe",padding: "14px",}}>
          <a href="/" style={{textDecoration:'none',fontSize:"1.2rem"}}><i class="fa-regular fa-circle-user"></i></a>
           </div>
           <div className="flex-grow-1 px-3 py-2">
             <span style={{ fontSize: "1.1rem",fontWeight:"500"}}>Coin</span>
           </div>
           <div className="px-3 text-muted">
              <i className="fas fa-chevron-down"></i>
            </div>
      </div>  

        </div>

        {/* Right Column */}
        <div className="col-md-4 pe-5 ps-5 pt-4">
          {/* Alert Box */}
          <div className="p-3 ps-2 pb-2 mb-4 pe-5" style={{background: "#fff3e6",borderLeft: "8px solid orange"}}>
          
          <ul>
            <a href="/"><li style={{fontSize:"1.05rem"}} className="mb-3">Surveillance measure on scrips - September 2025</li></a>
            <a href="/"><li style={{fontSize:"1.05rem"}}>Latest Intraday leverages and Square-off timings</li></a>
          </ul>
          </div>

          {/* Quick Links */}
          <div className="card" style={{borderRadius:"none",border:"1px solid rgba(0, 0, 0, 0.175);"}}>
            <div className="card-header fw-bold" style={{color:"#595959",height:"45px"}}>Quick links</div>
            <ol className="list-group list-group-flush">
              <li className="list-group-item" style={{height:"50px"}}>
                <a href="/" className=" text-decoration-none" style={{fontSize:"1.1rem"}}>
                  1.  Track account opening
                </a>
              </li>
              <li className="list-group-item" style={{height:"50px"}}>
                <a href="/" className="text-primary text-decoration-none" style={{fontSize:"1.1rem"}}>
                  2.  Track segment activation
                </a>
              </li>
              <li className="list-group-item" style={{height:"50px"}}>
                <a href="/" className="text-primary text-decoration-none" style={{fontSize:"1.1rem"}}>
                  3.  Intraday margins
                </a>
              </li>
              <li className="list-group-item" style={{height:"50px"}}>
                <a href="/" className="text-primary text-decoration-none" style={{fontSize:"1.1rem"}}>
                 4.   Kite user manual
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;