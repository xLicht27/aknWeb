import { Routes, Route } from 'react-router-dom';
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
import TablerosElectricos from './pages/servicios/TablerosElectricos';
import AnalisisSistemaElectrico from './pages/servicios/AnalisisSistemaElectrico';
import GruposElectrogenos from './pages/servicios/GruposElectrogenos';
import EquiposProteccion from './pages/servicios/EquiposProteccion';
import SistemaMediaTension from './pages/servicios/SistemaMediaTension';
import EficienciaEnergetica from './pages/servicios/EficienciaEnergetica';
import RedesContraIncendios from './pages/servicios/RedesContraIncendios';
import SistemasBombeo from './pages/servicios/SistemasBombeo';

export default function App() {
  useReveal();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/tableros-electricos" element={<TablerosElectricos />} />
          <Route path="/servicios/analisis-sistema-electrico" element={<AnalisisSistemaElectrico />} />
          <Route path="/servicios/grupos-electrogenos" element={<GruposElectrogenos />} />
          <Route path="/servicios/equipos-de-proteccion" element={<EquiposProteccion />} />
          <Route path="/servicios/sistema-de-media-tension" element={<SistemaMediaTension />} />
          <Route path="/servicios/eficiencia-energetica" element={<EficienciaEnergetica />} />
          <Route path="/servicios/redes-contra-incendios" element={<RedesContraIncendios />} />
          <Route path="/servicios/sistemas-de-bombeo" element={<SistemasBombeo />} />
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
