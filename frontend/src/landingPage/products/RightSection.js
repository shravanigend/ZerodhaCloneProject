import React from "react";


function RightSection({
    imageURL,
    productname,
    productDescription,
    learnmore,
}){
    return(
     <div className="container p-5  ">
        <div className="row p-5 pt-0 pb-0 align-items-center">
            
             <div className="col-4 p-5 ">
                <h4 style={{color:'#595959'}}>{productname}</h4>
                <p className="mt-4" style={{fontSize:"1.1rem"}}>{productDescription}</p>
                <a href={learnmore} style={{fontSize:"1.1rem",textDecoration:"none"}}>{learnmore}</a>
            </div> 
            <div className="col-1"></div>
            <div className="col-6">
                <img src={imageURL}/>
            </div>
            
           
        </div>
     </div>
    );
}
export default RightSection;