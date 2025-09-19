import React from "react";

function Education() {
    return(
       <div className="container p-5 pt-0 pb-0" >
        <div className="row p-5">
            <div className="col-5  text-center me-5 ">
                <img src="media/education.svg"  style={{width:"90%"}}/>
            </div>
            <div className="col-6 ms-5">
                <div className="mb-4">
                <h2 style={{fontSize:"1.7rem"}} className="mb-4">Free and open market education</h2>
                <p className="text-muted" style={{fontSize:"1.1rem"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{textDecoration:"none",fontSize:"1.2rem"}}>Varcity - </a>
                </div>
                <div>
                <p  className="text-muted" style={{fontSize:"1.1rem"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{textDecoration:"none",fontSize:"1.2rem"}}>TradingQ&A  - </a>
                </div>

            </div>
            

        </div>
       </div>
    );
}

export default Education;