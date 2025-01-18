// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer/Footer';
import CareerPage from './components/sections/Careers'; // Import CareerPage

const App: React.FC = () => {
  return (
    <Router> 
      <div className="min-h-screen">
        <Navbar />

       
        <Routes>
        {/* <Route path="/" element={<>my name is aksahr</>} /> */}
          <Route path="/" element={<><Hero /><Services /><Contact /></>} />
          <Route path="/contact" element={<><Contact /></>} />
          
          <Route path="/career" element={<CareerPage />} />
        </Routes>

        <Footer />
      </div>
    
    </Router>
  );
}

export default App;