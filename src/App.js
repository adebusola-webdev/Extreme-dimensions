import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./component/Footer";
import { Consult } from "./component/Consult";

const App = () => {
  return (
    <>
      <Router>       
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Consult />
      <Footer />
    </>
  );
};

export default App;
