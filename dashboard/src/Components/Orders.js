import React,{useState,useEffect} from "react";
import axios from "axios";
// import { holdings } from "../data/data";


const Order = () => {
  const [allOrders,setAllOrder]=useState([]);
  useEffect(()=>{
        axios.get("http://localhost:3002/allOrder").then((res)=>{
          console.log(res.data);
          setAllOrder(res.data);
        })
  },[]);
  return (
    <>
     <h3 className="title">Your Orders({allOrders.length}) </h3>
     <div className="order-table">
      <table>
        <tr>
          <th>Instruments</th>
          <th>QTY</th>
          <th>PRICE</th>
          <th>MODE</th>
        </tr>
        {allOrders.map((stock,index)=>{

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td style={{fontSize:"0.9rem"}}>{stock.mode}</td>
              </tr>
            );
        })}
      </table>
    
      
     </div>
    </>
  )
};

export default Order;    