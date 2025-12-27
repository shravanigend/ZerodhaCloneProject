import React from "react";
//const { Signup } = require("Controlers/AuthController.js");
import { Link } from "react-router-dom";

function OpenAcc() {
    return(
        <div className="row text-center p-5">
                <h1  style={{fontSize:"1.7rem"}} className="mt-5 mb-4"> Open a Zerodha account</h1>
                <p style={{fontSize:"1.1rem"}} className="text-muted mb-2">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link 
                 style={{ textDecoration: "none" }}
                 to="/signup"><button className="p-2 mt-4 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>Sign up for free</button></Link>
                
        </div>
    );
}

export default OpenAcc;