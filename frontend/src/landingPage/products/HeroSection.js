import React from "react";


function HeroSection(){
    return(
     <div className="container p-5 border-bottom">
        <div className="row p-5 text-center">
            <h3>Zerodha Products</h3>
            <p style={{fontSize:"1.4rem"}} className="mb-3 mt-2">Sleek, modern, and intuitive trading platforms</p>
            <p style={{fontSize:"1.1rem"}}>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a></p>
        </div>
     </div>
    );
}
export default HeroSection;