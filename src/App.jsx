import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Extra File 
// import Profile from './Extra/Extra';

//Incomplete Pages/Sections
import About from "./pages/About/About";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Profile from './pages/Profile/Profile'



// Complete Sections
import Header from "./Components/Header/Header";
import Footer from "./Components/LastSectionFooter/LastSectionFooter";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const App = () => {
  return (
    <>
      <Header />
      {/* <Login /> */}
      {/* <Signup /> */}
      <Profile />
      <Footer />
    </>
  );
};

export default App;
