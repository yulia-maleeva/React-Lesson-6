import React from "react";

import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes.js";

import Home from "./pages/Home/index.jsx";
import News from "./pages/News/index.jsx";

const App = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.NEWS} element={<News />} />
  </Routes>
);

export default App;
