import React from "react";
import OpenAcc from "../OpenAccount";



function SignUp(){
    return(
      <div className="container p-5 ">
        <div className="row p-5  ">

          <div className="text-center pb-5">
            <h3 className="mb-4">Open a free demat and trading account online</h3>
            <p style={{fontSize:'1.4rem'}} className="text-muted">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
          </div>

          <div className="row pt-3 p-5">

          <div className=" col-8 ps-5 pe-0">
            <img style={{width:"78%" }} src="media/account_open.svg"></img>
          </div>

          <div className="col-4  ">
            <h4>SignUp Now</h4>
            <p className="text-muted fs-6">Or track your existing application</p>
            <input type="text" style={{height:"30px",width:"auto"}}/>
          </div>

          </div>
           
        </div>
      </div>
      
    );
}
export default SignUp;