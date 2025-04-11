import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Extra File 
// import ChangePassword from './Extra/Extra';

//Incomplete Pages/Sections

// import ChangePassword from "./pages/ChangePassword/ChangePassword";



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
    <Router>
      <div className="app">
        <Header />1{" "}
        <main className="main-content">
          <Routes>
            {/* <Route path="" element={<HomePage />} /> */}
            <Route path="/ProductDescription" element={<ProductDescription />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
