import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './screens/Home';
import { Welcome } from './screens/Welcome';
import { Named } from './screens/Named';

import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/named" element={<Named />} />
      </Routes>
    </Router>
  );
}



export default App;
