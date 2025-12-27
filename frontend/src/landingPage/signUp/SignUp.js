import React from "react";
import { Link } from "react-router-dom";



function SignUp(){
    return(
     <div className="container p-5 pb-0 ">
        <div className="row p-5 pb-2 ">

          <div className="text-center pb-5">
            <h3 className="mb-4">Open a free demat and trading account online</h3>
            <p style={{fontSize:'1.4rem'}} className="text-muted">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
          </div>
        </div>
        <div className="row pt-0 p-5 m-5 mt-2">

          <div className=" col-7 ps-5 pe-0">
            <img style={{width:"95%" }} src="media/Signup/account_open.svg" alt="openaccount "></img>
          </div>

          <div className="col-5 ps-5 ">
            <h4 style={{color:"#595959"}}>Signup Now</h4>
            <p className="text-muted" style={{fontSize:"1.1rem"}}>Or track your existing application</p>
            <input type="text" style={{height:"14%",width:"100%"}} placeholder="Enter your email here"/>
              
             <button className="p-2 ps-0 mt-4 btn btn-primary fs-5 mb-5 novalidate" style={{width:"60%"}}><Link class="nav-link active" aria-current="page" to="/signup">SignUp</Link></button>
             <p style={{fontSize:"0.8rem"}} className="text-muted">By proceeding, you agree to the Zerodha <a style={{textDecoration:"none"}} href="">terms</a>  & <a style={{textDecoration:"none"}} href="">privacy policy</a></p>
             <div className="border-top"><p style={{fontSize:"0.85rem"}} className="mt-3 text-muted" >Looking to open NRI account? <a style={{textDecoration:"none"}} href="">Click here</a></p></div>
          </div>

        </div>
           
        
      </div>
    );
}
export default SignUp;