import React from "react";
import HeroSection from "./HeroSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";


function Product(){
    return(
     <>
     <HeroSection/>
     <LeftSection 
    imageURL="media/Products/kite.png"
    productname="Kite"
    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
    tryDemo="Try Demo-"
    learnmore="Learn More-"
    googlePlay=""
    appStore="" 
    />
    <RightSection
     imageURL="media/Products/console.png"
    productname="Console"
    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
    learnmore="Learn More-"
    googlePlay=""
    appStore=""
    />
     <LeftSection 
    imageURL="media/Products/coin.png"
    productname="Coin"
    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
    tryDemo="coin-"
    googlePlay=""
    appStore="" 
    />
    <RightSection
     imageURL="media/Products/landing.svg"
    productname="Kite Connect API"
    productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
    learnmore="Kite Connect -"
    googlePlay=""
    appStore=""
    />
     <LeftSection 
    imageURL="media/Products/varsity.png"
    productname="Varsity mobile"
    productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
    googlePlay=""
    appStore="" 
    />
     <Universe/>
     </>
    );
}
export default Product;