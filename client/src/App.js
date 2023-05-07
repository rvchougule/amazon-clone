import React from "react";
import "./App.css";
import Navbar from "./component/Header/Navbar";
import NewNavbar from "./component/NewNavbar/NewNavbar";
import MainComponent from "./component/Home/MainComponent";
import Footer from "./component/Footer/Footer";
import SignIn from "./component/SignUp_SignIn/SignIn";
import SignUP from "./component/SignUp_SignIn/SignUP";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/cart/Cart";
import Buynow from "./component/buynow/Buynow";

function App() {
  return (
    <>
      <Navbar />
      <NewNavbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUP />} />
        <Route path="/getproductsone/:id" element={<Cart/>} />
        <Route path="/buynow" element={<Buynow/>} />
      </Routes>
      <Footer />
    </>
  ); 
}

export default App;
