import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Extra File 
import SearchedProduct from './Extra/Extra';

//Incomplete Pages/Sections
// import SearchedProduct from './pages/SearchedProduct/SearchedProduct';


// Complete Sections
import Header from "./Components/Header/Header";
import Footer from "./Components/LastSectionFooter/LastSectionFooter";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from './pages/Profile/Profile'
import About from "./pages/About/About";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ContactUs from './pages/ContactUs/ContactUs'
import CheckoutPage from './pages/CheckOutPage/CheckOutPage'
import HomePage from './pages/HomePage/HomePage';
import Wishlist from './pages/Wishlist/Wishlist';
import SearchPage from './pages/SearchPage/SearchPage';
import AIFashionUpload from "./pages/AIUpload/AIUpload";

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
