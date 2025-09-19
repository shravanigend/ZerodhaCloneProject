
import React from "react";

function Team() {
    return(
     <div className="container p-5 pb-1">
        <div className="row p-5 ">
           <h3 className="text-center ms-5 ">People</h3>
        
         <div className="row p-5 m-5 pb-0 mt-0 ">

            <div className="col-5 p-5 pt-2 text-center">
                <img src="media/nithin-kamath.jpg" style={{borderRadius:"100%",width:"85%"}}></img>
                <h4 className="mt-4 fs-5">Nithin Kamath</h4>
                <p >Founder, CEO</p>
            </div>
            <div className="col-6 pt-4 " style={{lineHeight:"1.5"}}>
                <p style={{fontSize:"16.6px",color:"#595959"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p style={{fontSize:"16.6px",color:"#595959"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p style={{fontSize:"16.6px",color:"#595959"}}>Playing basketball is his zen.</p>
                <p style={{fontSize:"16.6px",color:"#595959"}}>Connect on <a style={{textDecoration:"none"}} href="">Homepage</a> /<a style={{textDecoration:"none"}}  href="">TradingQnA</a>  /<a style={{textDecoration:"none"}}  href="">Twitter</a> </p>
            </div>

         </div>
         <div className="p-4  ">

            <div style={{display:"flex"}} className="text-center mb-5 "> 
              <div className="col-4"> <img src="media/Nikhil.jpg" style={{borderRadius:"100%",width:"65%"}} className="m-3"></img>
              <h4 className="mt-4 fs-5">Nikhil Kamath</h4>
                <p >Co-founder & CFO</p>
                <p>Bio</p>
              </div> 
               <div className="col-4"> <img src="media/Kailash.jpg" style={{borderRadius:"100%",width:"65%"}} className="m-3"></img>               
               <h4 className="mt-4 fs-5">Dr. Kailash Nadh</h4>
                <p >CTO</p>
                <p>Bio</p></div> 
               <div className="col-4"> <img src="media/Venu.jpg" style={{borderRadius:"100%",width:"65%"}} className="m-3"></img>
               <h4 className="mt-4 fs-5">Venu Madhav</h4>
                <p >COO</p>
                <p>Bio</p>
                </div> 
            </div>

            <div style={{display:"flex"}} className="text-center  mb-5 ">
                <div className="col-4"> <img src="media/Hanan.jpg" style={{borderRadius:"100%",width:"65%"}} ></img>
              <h4 className="mt-4 fs-5">Hanan Delvi</h4>
                <p >CCO</p>
                <p>Bio</p>
              </div> 
               <div className="col-4"> <img src="media/Seema.jpg" style={{borderRadius:"100%",width:"65%"}} ></img>               
               <h4 className="mt-4 fs-5">Seema Patil</h4>
                <p >Director</p>
                <p>Bio</p></div> 
               <div className="col-4"> <img src="media/Karthik.jpg" style={{borderRadius:"100%",width:"65%"}}></img>
               <h4 className="mt-4 fs-5">Karthik Rangappa</h4>
                <p >Chief of Education</p>
                <p>Bio</p>
                </div> 
            </div>

            <div  className=" mt-5 ms-0 ps-5 ">
                <div style={{margin:'0px'}} className="ps-4 col-4"> <img src="media/Austin.jpg" style={{borderRadius:"100%",width:"75%"}} ></img>
                
              <h4 className="mt-4 ms-5 fs-5" >Austin Prakesh</h4>
                <p  className="ms-5 ps-2 " >Director Strategy</p>
                <p  className="ms-5 ps-5">Bio</p>
               
              </div>               
            </div>

         </div>
        
       </div>
       </div>
    );
}

export default Team;