import React from 'react'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Program from './components/Program/Program';
import Training from './components/Training/Training';
import Pricing from './components/Pricing/Pricing';
const App = () => {
  return (
   <div className='App'>
    <Navbar/>
    <About/>
    <Program/>
    <Training/>
    <Pricing/>
   </div> 
    
  );
}

export default App
