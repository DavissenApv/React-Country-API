import React from 'react';
// importer depuis library react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* si path = accueil alors fournir composant suivant avec element */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* path * si url correspond a rien de declarer au dessus */}
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// creer rooter
