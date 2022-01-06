import React, { Fragment, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/Sidebar/SideBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('here')
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <NavBar toggleSidebar={toggleSidebar}/>
      {isOpen && <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar}/>}
      <Home />
      <About />
      <Services />
      {/* <Contact /> */}
    </Fragment>
  );
}

export default App;
