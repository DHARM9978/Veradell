import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Extra File 
// import ChangePassword from './Extra/Extra';

//Incomplete Pages/Sections
// import SearchedProduct from './pages/SearchedProduct/SearchedProduct';


// Complete Sections
import Header from "./Components/Header/Header";
import Footer from "./Components/LastSectionFooter/LastSectionFooter";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from './pages/Profile/Profile'
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import ProductDescription from "./pages/ProductDescription/ProductDescription";

const App = () => {
  return (
    <>
      <Header />

      {/* <HomePage />   */}
      {/* <Signup /> */}
      <Login />
      {/* <Profile /> */}
      {/* <ChangePassword /> */}
      {/* <About /> */}
      {/* <ContactUs /> */}
      {/* <CheckoutPage /> */}
      {/* <Wishlist /> */}
      {/* <SearchPage /> */}
      {/* <AIFashionUpload /> */}
      {/* <SearchedProduct /> */}
      <Footer />
    </>

  );
};

export default App;
