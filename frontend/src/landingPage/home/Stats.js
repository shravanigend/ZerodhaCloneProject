import React from "react";
import { Link } from "react-router-dom";

function Stats() {
    return(
         <div className="container p-5 pt-0">
            <div className="row ps-5 ">
                <div className="col-5 p-3">
                    <h2 className="mb-5">Trust with confidence</h2>
                    <div className="mb-4">
                    <h3  className="mb-0 fs-4">Customer-first always</h3>
                    <p style={{fontSize:"1.12rem"}} className="mt-3 text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="mb-4">
                    <h3 className="mb-0 fs-4">No spam or gimmicks</h3>
                    <p style={{fontSize:"1.12rem"}} className="mt-3 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className="mb-4">
                    <h3 className="mb-0 fs-4">The Zerodha universe</h3>
                    <p style={{fontSize:"1.12rem"}} className="mt-3 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="mb-4">
                    <h3 className="mb-0 fs-4">Do better with money</h3>
                    <p style={{fontSize:"1.12rem"}} className="mt-3 text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>

                <div className="col-7 p-3">
                    <Link style={{textDecoration:"none"}} to="/product">
                    <img  style={{width:"100%",height:"86%"}} className="mt-2 mb-2" src="media/ecosystem.png" alt="stat img"/></Link>
                    <p style={{fontSize:"1.2rem", margin:"space-between"}} className="text-center mt-2">
                        <a href="" style={{textDecoration:"none"}} className="mx-5">Explore our products - </a>
                        <a href=""  style={{textDecoration:"none"}}>Try Kite demo -</a>
                    </p>
                </div>
                <img src="media/eco-bottom.png" className="col-8" style={{margin:"0 auto"}}/>
            </div>            
        </div>
    );
}

export default Stats;