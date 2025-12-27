import React from "react";


function HeroSection(){
    return(
     <div className="container p-5 ">
        <div className="row p-5 text-center ">
            <h2 className="p-5 pb-2 pt-0 ">Charges</h2>
            <p className="mb-5" style={{fontSize:"1.4rem",color:"#909090"}}>List of all charges and taxes</p>
        </div>
        <div className="row p-5 mt-5 text-center">
            <div className="col-4">
                <img style={{width:"70%"}} className="mb-4"  src="media/pricing.svg"></img>
                <h3  style={{ whiteSpace: "nowrap",color:"#595959"}} >Free equity delivery</h3>
                <p style={{fontSize:"1.1rem"}} className="mt-4 text-muted ">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

            </div>
            <div className="col-4">
                <img style={{width:"70%"}} className="mb-4"   src="media/pricing3.svg"></img>
                <h3  style={{ whiteSpace: "nowrap",color:"#595959"}} >Intraday and F&O trades</h3>
                <p className="mt-4 text-muted" style={{fontSize:"1.1rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4">
                <img style={{width:"70%"}} className="mb-4"   src="media/pricing.svg"></img>
                <h3 style={{ whiteSpace: "nowrap",color:"#595959"}} >Free direct MF</h3>
                <p style={{fontSize:"1.1rem"}} className="mt-4 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
     </div>
    );
}
export default HeroSection;