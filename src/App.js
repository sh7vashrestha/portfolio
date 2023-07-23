import React from "react";
import NavBar from "./Components/navBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Blog from "./Components/Blog";
import { useState } from "react";
import Contact from "./Components/Contact";

function App() {
  const [nav, setNav] = useState(false);
  const handelClick = () => {
    setNav(!nav);
  };
  return (
    <div className="App">
      <NavBar nav ={nav} handelClick ={handelClick} />
      <Home />
      <About />
      <Skill />
      <Project nav = {nav}/>
      < Blog />
      <Contact />
    </div>
  );
}

export default App;
