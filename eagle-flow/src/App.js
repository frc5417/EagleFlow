import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './screens/Home';
import { Welcome } from './screens/Welcome';
import { Named } from './screens/Named';
import { Paths } from "./screens/Paths";
import { Settings } from "./screens/Settings";

import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Welcome />} />
        <Route path = "/home" element = {<Home />} />
        <Route path = "/named" element = {<Named />} />
        <Route path = "/paths" element = {<Paths />} />
        <Route path = "/settings" element = {<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;