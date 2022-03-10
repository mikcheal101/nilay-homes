import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import {Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
    

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" exact element={<Services />} />
        </Route>
    </Routes>
  );
}

export default App;
