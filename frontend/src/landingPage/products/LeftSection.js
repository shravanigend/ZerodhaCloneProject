import React from "react";


function LeftSection({
    imageURL,
    productname,
    productDescription,
    tryDemo,
    learnmore,
    googlePlay,
    appStore
}){

    return(
    <div className="container p-5  pb-0">
        <div className="row p-5 pt-0 pb-0">
            <div className="col-6 p-5 pt-0 ">
                <img src={imageURL}  />
            </div>
            <div className="col-2"></div>
            <div className="col-4 mt-5 pt-5 pb-0">
                <h4 style={{color:'#595959'}}>{productname}</h4>
                <p className="mt-4" style={{fontSize:"1.1rem"}}>{productDescription}</p>
                <div className="mt-4 mb-4">
                   <a href={tryDemo} style={{fontSize:"1.1rem",textDecoration:"none"}}>{tryDemo}</a>
                   <a href={learnmore} style={{marginLeft:"40px",fontSize:"1.1rem",textDecoration:"none"}}>{learnmore}</a>
                </div>
                <div>
                   <a href={googlePlay} ><img style={{width:"45%"}} src="media/Products/google-play-badge.svg"/></a>
                   <a href={appStore} style={{marginLeft:"30px"}}><img style={{width:"40%"}} src="media/Products/appstore-badge.svg"/></a>
                </div>
            </div>

        </div>
    </div>
    );
}
export default LeftSection;