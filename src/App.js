import { useRef, useEffect, useState } from 'react';
import './App.css';
import './components/css/style.css'
import Header from './components/Header';

function App() {
  
  return (
    <>
    <Header ></Header>
    <div   className='mt-5 d-block' style={{'height': '10000px', 'paddingTop':'100px'}}>
      <h1 className='mt-5'>Contenido</h1>
    </div>
    </>
  );
}

export default App;
