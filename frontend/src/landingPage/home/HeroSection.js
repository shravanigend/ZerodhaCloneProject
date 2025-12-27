import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
    return(
        <div className="container p-5">
            <div className="row text-center p-5 pb-0">
                <img src="media/HomeHero.png" style={{height:"100%",width:"70%",marginLeft:"14%"}}/>                
                <h2 style={{fontSize:"1.9rem"}} className="mt-5"> Invest in everything</h2>
                <p style={{fontSize:"1.3rem"}} className=" text-muted">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link style={{textDecoration: "none" }}  to="/signupform"><button className="p-2 mt-4 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>Sign up for free</button></Link>
           
            </div>
        </div>
    );
}

export default HeroSection;