import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from './landingPage/home/Homepage';
import AboutPage from './landingPage/about/AboutPage';
import SignUp from './landingPage/signUp/SignUp';
import Pricing from './landingPage/pricing/Pricing';
import Support from './landingPage/support/SupportPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import Product from './landingPage/products/ProductPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar/>
 <Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/signup" element={<SignUp/>}></Route>
  <Route path="/about" element={<AboutPage/>}></Route>
  <Route path="/pricing" element={<Pricing/>}></Route>
  <Route path="/support" element={<Support/>}></Route>
   <Route path="/product" element={<Product/>}></Route>
 
 </Routes>
 <Footer/>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
