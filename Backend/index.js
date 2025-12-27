require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
//const bodyParser=require("body-parser");
const cors=require("cors");
const {holdingModel}=require("./model/holdinModel");
const {PositionModel}=require("./model/PositionModel");
const {OrderModel}=require("./model/OrderModel");
//const {userSchema} =require("./model/UserModel");
const cookieParser=require("cookie-parser");
const authRoute = require("./Route/AuthRoute");
const { userVerification } = require("./Middleware/AuthMiddleware"); 

const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;

const app=express();
// app.use(cors());
// app.use(bodyParser.json());

// app.get("/addHolding",async(req,res)=>{
//     let tempHolding=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ]
// tempHolding.forEach((item)=>{
//     let newHolding=new holdingModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price:item.price,
//     net: item.net,
//     day:item.day,
//     });
//     newHolding.save();
//  });res.send("data inserted done");
// });

// app.get("/addPosition",async(req,res)=>{
//     let tempPosition=[  {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ]
// tempPosition.forEach((item)=>{
//     let newPosition=new PositionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     });
//     newPosition.save();
//  });res.send("postion data inserted ");
// });


app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:3001"],
    //methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);



app.post("/test", (req, res) => {
  console.log("Test route hit!", req.body);
  res.json({ success: true });
});

app.get("/allHolding",async(req,res)=>{
    let allHolding=await holdingModel.find({});
    res.json(allHolding);
});
app.get("/allPos",async(req,res)=>{
    let allPos=await PositionModel.find({});
    res.json(allPos);
});
app.get("/allOrder",async(req,res)=>{
    let allOrder=await OrderModel.find({});
    res.json(allOrder);
});

app.post("/newOrder",(req,res)=>{
   let newOrder=new OrderModel({
    name: req.body.name,
    qty:  req.body.qty,
    price:  req.body.price,
    mode:  req.body.mode,
   });
   newOrder.save();
   res.send("order saved");
});
app.post("/sellOrder",(req,res)=>{
   let newOrder=new OrderModel({
    name: req.body.name,
    qty:  req.body.qty,
    price:  req.body.price,
    mode:  req.body.mode,
   });
   newOrder.save();
   res.send("order sell");
});

app.get('/dashboard', userVerification, (req, res) => {
  // userVerification sets req.user if token is valid
  return res.json({
    success: true,
    user: req.user, // username or email
  });
});



app.listen(PORT,()=>{
    console.log("zerodha App started");
    mongoose.connect(uri).then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
    console.log('DB started' ,PORT);
});