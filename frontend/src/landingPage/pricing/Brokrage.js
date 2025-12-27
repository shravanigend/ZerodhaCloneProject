import React from "react";


function Brokerage(){
    return(
       <div className="container p-5 pb-0">
      {/* Charges for account opening */}
      <div className="row p-5 pb-0 ">
         <h4 className="mb-4 ms-1">Charges for account opening</h4>
      <table className="table border ms-3" style={{lineHeight:"1.8",width:"96%",fontSize:"15px"}}>
        <thead >
          <tr className="mt-5" >
            <th scope="col" className="ps-3 ">Type of account</th>
            <th scope="col">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr  >
            <td  className="border-0 ps-3 text-muted">Online account</td>
            <td  className="border-0 ">
              <span className="badge " style={{backgroundColor:"#4caf50",color:"#fff",borderRadius:"2px"}}>FREE</span>
            </td>
          </tr>
          <tr >
            <td  className="border-0 ps-3 text-muted">Offline account</td>
            <td  className="border-0 ">
              <span className="badge "  style={{backgroundColor:"#4caf50",color:"#fff",borderRadius:"2px"}}>FREE</span>
            </td>
          </tr>
          <tr>
            <td  className="border-0 ps-3 text-muted">NRI account (offline only)</td>
            <td  className="border-0">₹ 500</td>
          </tr>
          <tr>
            <td className="ps-3 pb-3 text-muted">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>

      {/* Demat AMC */}
      <h4 className="mt-5 mb-4 ms-2">Demat AMC (Annual Maintenance Charge)</h4>
      <table className="table border ms-3" style={{lineHeight:"1.8",fontSize:"15px",width:"96%"}}>
        <thead>
          <tr>
            <th scope="col" className="ps-3">Value of holdings</th>
            <th scope="col">AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  className="border-0 ps-3 text-muted">Up to ₹4 lakh</td>
            <td  className="border-0 ">
              <span className="badge" style={{backgroundColor:"#4caf50",color:"#fff",borderRadius:"2px"}}>FREE*</span>
            </td>
          </tr>
          <tr>
            <td  className="border-0 ps-3 text-muted">₹4 lakh - ₹10 lakh</td>
            <td  className="border-0 text-muted ">₹ 100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td  className="border-0 ps-3 text-muted">Above ₹10 lakh</td>
            <td className="text-muted pb-3">₹ 300 per year, charged quarterly</td>
          </tr>
        </tbody>
      </table>
      
      <p style={{fontSize:"13.2px"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,<a href="/" style={{textDecoration:"none"}}> click here</a>.</p>
      <h4 className="mt-5 mb-4 ms-2">Demat AMC (Annual Maintenance Charge)</h4>
      <table className="table border ms-3" style={{lineHeight:"1.8",fontSize:"15px",width:"96%"}}>
        <thead>
          <tr>
            <th scope="col" className="ps-3">Service</th>
            <th scope="col">Billing Frquency</th>
            <th scope="col">Charges</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  className="border-0 ps-3 text-muted">Tickertape</td>
            <td  className="border-0 ">Monthly / Annual</td>
            <td  className="border-0  text-muted">Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td  className="border-0 ps-3 text-muted">Smallcase</td>
            <td  className="border-0 text-muted ">Per transaction</td>
            <td  className=" border-0 text-muted pb-3">Buy & Invest More: 100 | SIP: 10</td>
            
          </tr>
          <tr>
            <td  className="border-0 ps-3 text-muted">Kite Connect</td>
            <td className=" border-0 text-muted pb-3">Monthly</td>
            <td  className=" border-0 text-muted pb-3">Connect: 500 | Personal: Free</td>
          </tr>
        </tbody>
      </table>
      
    </div>
    </div>
  );
}
export default Brokerage;