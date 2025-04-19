import React from 'react';
import './App.css';
import Nav from './Nav';        // Importing Nav component
import Main from './Main';      // Importing Main component
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';  // Importing Footer component

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Highlights />
      <Testimonials /> 
      <About />
      <Footer />
    </>
  );
}

export default App;
