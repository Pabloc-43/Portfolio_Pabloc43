import { useRef, useEffect, useState } from 'react';
import './App.css';
import './components/css/style.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  
  return (
    <>
    <Header />
    <HeroSection />
    <div   className='mt-5 d-block' style={{'height': '10000px', 'paddingTop':'100px'}}>
      <h1 className='mt-5'>Contenido</h1>
    </div>
    </>
  );
}

export default App;
