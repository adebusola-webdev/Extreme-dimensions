import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './component/Footer';
import { Aboutus } from './pages/Aboutus';
import { Service } from './pages/Service';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about-us' element={<Aboutus/>}/>
          <Route path='/service' element={<Service/>}/>
        </Routes>
      </Router>
    
    </>
  );
};

export default App;

