import React from "react";


function Universe(){
    return(
     <div className="container p-5 pt-0">
        <div className="row p-5 pt-0 pb-0 text-center">
            <div className="p-5 mb-5"><h5>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5></div>
            <div>
                <h4 className="mb-4">The Zerodha Universe</h4>
                <p style={{fontSize:"1.1rem"}}>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
        
            <div className="row p-5 pb-0 pt-0 text-center">

                <div className="col-4 p-5 pb-0">
                    <div className="text-center mb-5">
                        <img style={{width:"70%"}} src="media/Products/zerodhafundhouse.png"></img>
                        <p style={{fontSize:"0.85rem"}} className="mt-2 p-2">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div  className="text-center mb-5">
                         <img style={{width:"70%"}} src="media/Products/streak-logo.png"></img>
                        <p style={{fontSize:"0.85rem"}} className="mt-2 p-2 text-center">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                </div>

                <div className="col-4 p-5 pb-0">
                     <div className="text-center mb-5">
                        <img className="p-2" style={{width:"70%"}} src="media/Products/sensibull.svg"></img>
                        <p style={{fontSize:"0.85rem"}} className="mt-4 ">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div  className="text-center mb-5">
                         <img className="p-2 pt-3" style={{width:"70%"}} src="media/Products/smallcase.png"></img>
                        <p style={{fontSize:"0.85rem"}} className="mt-2 p-2 text-center">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                </div>
                <div className="col-4 p-5 pb-0">
                     <div className="text-center mb-5 ">
                        <img style={{width:"55%"}} src="media/Products/tijori.svg"></img>
                        <p style={{fontSize:"0.85rem"}} className="mt-2 p-2">Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more.</p>
                    </div>
                    <div  className="text-center mb-5 pt-3">
                         <img className="p-2" style={{width:"50%"}} src="media/Products/ditto.png"></img>
                        <p style={{fontSize:"0.85rem"}} className="mt-2 p-2 text-center">Personalized advice on life and health insurance. No spam and no mis-selling.Sign up for free</p>
                    </div>
                </div>
            </div>
            <div className="text-center pb-3"><button className="btn btn-primary" style={{width:"20%",fontSize:"1.4rem"}}>Sign up for free</button></div>
           
        </div>
     </div>
    );
}
export default Universe;