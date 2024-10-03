import React from 'react';
import Navigation from "./Components/Navbar";
import Home from './Components/Home';
import Skills from './Components/Skills';
import "./App.css";


const App = () => {
  return (
    <div className='body'>
      <Navigation />
      <Home />
      <Skills />
    </div>
  );
};

export default App;
