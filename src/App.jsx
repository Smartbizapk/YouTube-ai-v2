import React from 'react';
import Welcome from './modules/Welcome';

const App = () => (
  <div>
    <h1>SmartBiz Frontend</h1>
    <Welcome />
  </div>
);

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./modules/Welcome";
import Module1 from "./modules/Module1";
import Module2 from "./modules/Module2";
// Baaki modules bhi yahi import karo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
        {/* Sabhi 12 modules ka route yahi add karo */}
      </Routes>
    </Router>
  );
}

export default App;
