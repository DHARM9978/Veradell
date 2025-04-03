import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Extra File 
import ChangePassword from './Extra/Extra';

//Incomplete Pages/Sections

// import ChangePassword from "./pages/ChangePassword/ChangePassword";



// Complete Sections
import Header from "./Components/Header/Header";
import Footer from "./Components/LastSectionFooter/LastSectionFooter";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from './pages/Profile/Profile'
import About from "./pages/About/About";

const App = () => {
  return (
    <>
      <Header />
      <ChangePassword />
      {/* <About /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Profile /> */}
      <Footer />
    </>
  );
};

export default App;
