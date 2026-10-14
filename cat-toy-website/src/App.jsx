import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shapes from './components/Shapes';
import { useState } from "react";
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Shapes/>
      <Features/>
      <HowItWorks/>
    </>
  );
}

export default App;
