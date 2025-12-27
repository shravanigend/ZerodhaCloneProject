import React,{useState,useContext} from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import "./BAW.css";
import { BarChartOutlined, BorderColor, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import { DoughtGraph } from "./DoughtChart";

const WatchList=()=>{
  const lables=watchlist.map((subArray)=>subArray["name"]);
         const data={
          labels:lables,
          datasets:[{
            label:"Price",
            data:watchlist.map((stock)=>stock.price),
            backgroundColor:[
            "rgba(255,99,132,0.5)",
            "rgba(54,162,235,0.5)",
            "rgba(255,206,86,0.5)",
            "rgba(75,192,192,0.5)",
            "rgba(153,102,135,0.5)",
            "rgba(255,64,64,0.5)",
            "rgba(193,51,110,0.5)",
            "rgba(93,255,61,0.5)",
            "rgba(93,64,255,0.5)",
            ],
            BorderColor:[
            "rgba(255,99,132,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
            "rgba(75,192,192,1)",
            "rgba(153,102,135,1)",
            "rgba(255, 64, 64, 1)",
            "rgba(193, 51, 110,1)",
            "rgba(93, 255, 61, 1)",
            "rgba(93, 64, 255, 1)",
            ],
            borderWidth:1,
          },],
         };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughtGraph data={data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseExit = (e) => {
    setShowWatchlistActions(false);
  };


    return(
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down" />) : ( <KeyboardArrowUp className="up" />)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
    );
  };


  const WatchListActions = ({ uid }) => {
    //const generalContext = useContext(GeneralContext);
    const { openBuyWindow } = useContext(GeneralContext);
    const { openSellWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
      console.log("✅ Buy button clicked for UID:", uid);
      openBuyWindow(uid);
  };
    const handleSellClick = () => {
      console.log("Sell button clicked for UID:", uid);
      openSellWindow(uid);
  };
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}   >
          <button  className="buy" >Buy</button>
        </Tooltip> 
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}onClick={handleSellClick} >
          <button className="sell">Sell</button>
        </Tooltip> 
        <Tooltip title="Analytics (L)" placement="top" arrow TransitionComponent={Grow} >
          <button className="action"><BarChartOutlined className="icons"/></button>
        </Tooltip> 
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow} >
          <button className="action"><MoreHoriz className="icons"/></button>
        </Tooltip> 
      </span>
    </span>
  );
};

