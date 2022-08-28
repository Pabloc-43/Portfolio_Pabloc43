import './App.css';
import './components/css/style.css'
import Conocimientos from './components/Conocimientos';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SobreMi from './components/SobreMi';
import Divisoria from './components/reutilizables/Divisoria';
import Img1 from './components/images/Divisoria1.gif';
import Img2 from './components/images/espacio1.svg';
import Certificaciones from './components/Certificaciones';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';
import Contacto from './components/Contacto';

function App() {
  
  return (
    <>
    <Header />
    <HeroSection />
    <SobreMi />
    <Divisoria imagen={Img1}/>
    <Conocimientos />
    <Certificaciones />
    <Divisoria imagen={Img2}/>
    <Proyectos />
    <Contacto />
    <Footer />
    </>
  );
}

export default App;
