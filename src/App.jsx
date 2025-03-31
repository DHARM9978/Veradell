import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="" element={<About />} /> */}
        <Route path="" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
};

export default App;
