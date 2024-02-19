import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Card from './pages/Cards/Cards';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/card" element={<Card cardNumber={1} />} />
        <Route path="/card2" element={<Card cardNumber={2} />} />
        <Route path="/card3" element={<Card cardNumber={3} />} />
      </Routes>    
    </Router>
  );
}

export default App;
