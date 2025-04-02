import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Extra File 
// import Signup from './Extra/Extra';

//Incomplete Pages/Sections
import About from "./pages/About/About";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

import Signup from "./pages/Signup/Signup";

// Complete Sections
import Header from "./Components/Header/Header";
import Footer from "./Components/LastSectionFooter/LastSectionFooter";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <>
      <Header />            {/* Done  */}
      <Login />
      <Signup />
      <Footer />            {/* Done  */}

    </>
  );
};

export default App;
