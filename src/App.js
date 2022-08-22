import './App.css';
import './components/css/style.css'
import Conocimientos from './components/Conocimientos';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SobreMi from './components/SobreMi';
import Divisoria from './components/reutilizables/Divisoria';
import Img from './components/images/Divisoria1.gif'

function App() {
  
  return (
    <>
    <Header />
    <HeroSection />
    <SobreMi />
    <Conocimientos />
    <Divisoria imagen={Img}/>
    <div   className='mt-5 d-block' style={{'height': '10000px', 'paddingTop':'100px'}}>
      <h1 className='mt-5'>Contenido</h1>
    </div>
    </>
  );
}

export default App;
