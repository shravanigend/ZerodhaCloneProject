import React from "react";
function Explore(){
    return(
        <div className="container p-5 pt-0">
            <h3 className="text-center" style={{color:"#595959"}}>Explore different account types</h3>
            <div className="row p-5 pb-2 my-hover-div" >              
                <div className="col-4 ps-5 pe-1">
                    <a style={{border:"1px solid #e1e1e1",display:"flex",textDecoration:"none",fontSize:"1.1rem",borderRadius:"5px",cursor:"pointer"}} className="p-4 pe-0 pb-3 " >
                    <div style={{left:"-42px",position:"relative",backgroundColor:"#eff6ff",height:"25%",width:"14%",borderRadius:"50%"}} className="text-center p-1">
                        <img src="media/Signup/individual.svg" ></img>
                    </div>
                    <div  style={{left:"-25px",position:"relative"}}>
                        <h5 className="mb-4 mt-2" style={{color:"#444"}}>Individual Account</h5>
                        <p className="text-muted">Invest in equity, mutual funds and derivatives</p>
                    </div> 
                    </a>              
                </div>
                <div className="col-4 ps-5 pe-1">
                    <a style={{border:"1px solid #e1e1e1",display:"flex",textDecoration:"none",fontSize:"1.1rem",borderRadius:"5px",cursor:"pointer"}} className="p-4 pe-0 pb-3" >
                    <div style={{left:"-42px",position:"relative",backgroundColor:"#eff6ff",height:"25%",width:"14%",borderRadius:"50%"}} className="text-center p-1">
                        <img src="media/Signup/huf.svg" ></img>
                    </div>
                    <div  style={{left:"-25px",position:"relative"}}>
                        <h5 className="mb-4 mt-2" style={{color:"#444"}}>HUF Account</h5>
                        <p className="text-muted">Make tax-efficient investments for your family </p>
                    </div> 
                    </a> 
                </div>
                <div className="col-4 ps-5 pe-1">
                    <a style={{border:"1px solid #e1e1e1",display:"flex",textDecoration:"none",fontSize:"1.1rem",borderRadius:"5px",cursor:"pointer"}} className="p-4 pe-0 pb-3" >
                    <div style={{left:"-42px",position:"relative",backgroundColor:"#eff6ff",height:"25%",width:"14%",borderRadius:"50%"}} className="text-center p-1">
                        <img src="media/Signup/nri.svg" ></img>
                    </div>
                    <div  style={{left:"-25px",position:"relative"}}>
                        <h5 className="mb-4 mt-2" style={{color:"#444"}}>NRI Account</h5>
                        <p className="text-muted">Invest in equity, mutual funds, debentures, and more</p>
                    </div> 
                    </a> 
                </div>

            </div>
             <div className="row p-5">              
                <div className="col-4 ps-5 pe-1">
                    <a style={{border:"1px solid #e1e1e1",display:"flex",textDecoration:"none",fontSize:"1.1rem",borderRadius:"5px",cursor:"pointer"}} className="p-4 pe-0 pb-3" >
                    <div style={{left:"-42px",position:"relative",backgroundColor:"#eff6ff",height:"25%",width:"14%",borderRadius:"50%"}} className="text-center p-1">
                        <img src="media/Signup/minor.svg" ></img>
                    </div>
                    <div  style={{left:"-25px",position:"relative"}}>
                        <h5 className="mb-4 mt-2" style={{color:"#444"}}>Minor Account</h5>
                        <p className="text-muted">Teach your little ones about money & invest for their future with them</p>
                    </div> 
                    </a>              
                </div>
                <div className="col-4 ps-5 pe-1">
                    <a style={{border:"1px solid #e1e1e1",display:"flex",textDecoration:"none",fontSize:"1.1rem",borderRadius:"5px",cursor:"pointer"}} className="p-4 pe-0 pb-3" >
                    <div style={{left:"-42px",position:"relative",backgroundColor:"#eff6ff",height:"25%",width:"14%",borderRadius:"50%"}} className="text-center p-1">
                        <img src="media/Signup/corporate.svg" ></img>
                    </div>
                    <div  style={{left:"-25px",position:"relative"}}>
                        <h5 className="mb-4 mt-2" style={{color:"#444"}}>Corporate / LLP/ Partnership</h5>
                        <p className="text-muted">Manage your business surplus and investments easily</p>
                    </div> 
                    </a>              
                </div>
                <div className="col-4"></div>
             </div>

        </div>

    )
}
export default Explore;