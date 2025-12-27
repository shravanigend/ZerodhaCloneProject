import React  from "react";

function Option(){
    return(
        <div className="container p-5 pt-0">
            <h3 className="text-center mb-5">Investment options with Zerodha demat account</h3>  
            <div className="row p-5" style={{marginLeft:"30px"}}>
                
                <div className="col-2 ps-5 ">
                    <img className="ps-5 mb-5 "  src="media/Signup/stocks.svg"></img>
                    <img className="ps-4 pt-3 mb-5"  src="media/Signup/ipo.svg"></img>
                </div>
                <div className="col-3 ps-5">
                    <div className="pb-5"><h4>Stocks</h4>
                    <p style={{fontSize:"1.1rem"}} >Invest in all exchange-listed securities</p></div>
                    <div><h4>IPO</h4>
                    <p style={{fontSize:"1.1rem" ,whiteSpace:"nowrap"} }>Apply to the latest IPOs instantly</p><p style={{fontSize:"1.1rem",lineHeight:"0"}}>via UPI</p></div>
                </div>
                <div className="col-2 ms-5 ps-5">
                    <img className="ps-5 mb-5 "  src="media/Signup/mf.svg"></img>
                    <img className="ps-4 mb-5 pt-5"  src="media/Signup/fo.svg"></img>
                </div>
                <div className="col-4 ms-2 ps-5">
                    <div className="pb-5 mb-3"><h4>Mutual funds</h4>
                    <p style={{fontSize:"1.1rem"}} >Invest in commission-free direct</p> <p style={{fontSize:"1.1rem",lineHeight:"0"}}>mutual funds</p></div>
                    <div><h4>Futures & options</h4>
                    <p style={{fontSize:"1.1rem"}}>Hedge and mitigate market risk through simplified F&O trading</p></div>
                </div>
                <div className="col-1"></div>

                <div className="text-center ">
                <button className=" p-2 mt-4 btn btn-primary fs-5" style={{width:"22%"}}>Explore Investments</button>
                </div>
                  
                
                
            </div>
        </div>        
    );
}
export default Option;