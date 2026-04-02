import { Routes, Route } from 'react-router-dom'; // Quitamos BrowserRouter de aquí
import { useReveal } from './hooks/useReveal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Noticias from './pages/Noticias';
import Nosotros from './pages/Nosotros';
import Proyectos from './pages/Proyectos';
import TrabajaConNosotros from './pages/TrabajaConNosotros';
import Contacto from './pages/Contacto';

export default function App() {
  useReveal();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/trabajaconnosotros" element={<TrabajaConNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          {/*en caso de ruta inexistente */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
