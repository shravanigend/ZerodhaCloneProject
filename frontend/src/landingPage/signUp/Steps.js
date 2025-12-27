import React from "react";


function Steps(){
    return(
        <div className="container p-5">
            <h3 className=" ms-5 text-center">Steps to open a demat account with Zerodha</h3>
            <div className="row p-5 ">
                <div className="col-1"></div>
                <div className="col-5 ps-5 ms-4">
                    <img src="media/Signup/steps.svg" alt="stepsimg"></img>
                </div>
                <div className="col-5 p-5 ps-0 pt-4">
                    <h5 className="border-bottom p-3" style={{color:"#595959"}}>01. Enter the requested details</h5>
                    <h5 className="border-bottom p-3" style={{color:"#595959"}}>02. Complete e-sign & verification</h5>
                    <h5 className="p-3" style={{color:"#595959"}}>03. Start investing!</h5>
                </div>
                <div className="col-1"></div>
            </div>
             <div className="row  p-5 ">
                <div className="col-6 pt-3 ">
                    <img src="media/Signup/benefits.svg" style={{width:"73%"}} className="ps-5 pt-5 mt-5 ms-5 pb-5" alt="Benefitsimg"></img>
                    <h4 style={{whiteSpace:"nowrap",color:"#595959"}} className="ms-4">Benefits of opening a Zerodha demat account</h4>
                </div>
                <div className="col-6 ps-5 pt-4">
                    <div>
                    <h5 style={{color:"#595959"}} className="mb-3">Unbeatable pricing</h5>
                    <p style={{fontSize:"1.05rem" ,lineHeight:"1.6"}} className="text-muted">Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    </div>
                    <div>
                    <h5  style={{color:"#595959"}} className="mb-4 mt-5">Best investing experience</h5>
                    <p style={{fontSize:"1.05rem",lineHeight:"1.6"}} className="text-muted">Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    </div>
                    <div>
                    <h5  style={{color:"#595959"}} className="mb-4 mt-5">No spam or gimmicks</h5>
                    <p style={{fontSize:"1.05rem",lineHeight:"1.6"}} className="text-muted">Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    </div>
                    <div>
                    <h5  style={{color:"#595959"}}className="mb-4 mt-5">The Zerodha universe</h5>
                    <p style={{fontSize:"1.05rem",lineHeight:"1.6"}} className="text-muted">More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Steps;