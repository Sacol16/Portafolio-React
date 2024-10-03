import React from 'react';
import Navigation from "./Components/Navbar";
import Home from './Components/Home';
import "./App.css";


const App = () => {
  return (
    <div className='body'>
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
