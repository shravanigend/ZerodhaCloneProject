import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
//import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from './landingPage/home/Homepage';
import AboutPage from './landingPage/about/AboutPage';
import Pricing from './landingPage/pricing/Pricing';
import Support from './landingPage/support/SupportPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import Product from './landingPage/products/ProductPage';
import SignUpPage from './landingPage/signUp/SignUpPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar/>
 <Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/signupform" element={<SignUpPage/>}></Route>
  <Route path="/about" element={<AboutPage/>}></Route>
  <Route path="/pricing" element={<Pricing/>}></Route>
  <Route path="/support" element={<Support/>}></Route>
  <Route path="/product" element={<Product/>}></Route>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
 </Routes>
 <Footer/>

</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
