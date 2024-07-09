import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./component/Footer";
import { Consult } from "./component/Consult";
import { Service } from "./component/Service";
import { Contact } from "./pages/Contact";

const App = () => {
  return (
    <>
      <Router>       
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Service />
      <Consult />
      <Footer />
    </>
  );
};

export default App;
